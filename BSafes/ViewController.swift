//
//  ViewController.swift
//  BSafes
//
//  Created by MacBook Pro - SYang on 6/20/24.
//

import UIKit
import WebKit
import StoreKit

extension URL {
    var typeIdentifier: String? {
        return (try? resourceValues(forKeys: [.typeIdentifierKey]))?.typeIdentifier
    }
    var localizedName: String? {
        return (try? resourceValues(forKeys: [.localizedNameKey]))?.localizedName
    }
}

class ViewController: UIViewController, WKNavigationDelegate, WKDownloadDelegate, WKUIDelegate, WKScriptMessageHandler, UIDocumentInteractionControllerDelegate {
    
    var webView: WKWebView!
    var localHost: String!
    var timer: Timer!
    var appLoaded: Bool = false
    var pendingTransaction: Transaction? = nil
    var fileDestinationURL: URL?
    let documentInteractionController = UIDocumentInteractionController()
    
    func addWebView() {
        let webViewConfiguration = WKWebViewConfiguration();
        webViewConfiguration.limitsNavigationsToAppBoundDomains = true;
        self.webView = WKWebView(frame: .zero, configuration: webViewConfiguration)
        self.webView.autoresizingMask = [.flexibleWidth, .flexibleHeight ]
        self.webView.navigationDelegate = self
        self.webView.uiDelegate = self
        //webView.isInspectable = true
        let contentController = self.webView.configuration.userContentController
        contentController.add(self, name: "toggleMessageHandler")
        self.view = self.webView
        let testWith3000 = true
        let url: URL!
        if !testWith3000 {
            url = URL(string: "http://localhost:8080/apps/bsafes.html")!
            self.localHost = "http://localhost:8080"
        } else {
            url = URL(string: "http://localhost:3000/apps/bsafes")!
            self.localHost = "http://localhost:3000"
        }
        self.webView.load(URLRequest(url: url))
    }
    
    @objc func fireTimer() {
        print("Timer fired!")
        if appLoaded == false {
            webView?.reload();
        }
        let script = "window.bsafesNative.pingFromNative();"
        webView.evaluateJavaScript(script) { (result, error) in
            if let result = result {
                print("pingFromNative result: \(result)")
            } else if let error = error {
                print("An error occurred: \(error)")
                self.addWebView()
            }
        }
    }
    
    override func loadView() {
        let webViewConfiguration = WKWebViewConfiguration();
        addWebView()
        timer = Timer.scheduledTimer(timeInterval: 3.0, target: self, selector: #selector(fireTimer), userInfo: nil, repeats: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let ac = UIAlertController(title: nil,
                                   message: message,
                                   preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "Ok",
                                   style: .default) { _ in
            completionHandler()
        })
        present(ac, animated: true)
    }
    
    func webView(_ webView: WKWebView,
                 runJavaScriptConfirmPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping (Bool) -> Void) {
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .actionSheet)
        alertController.addAction(UIAlertAction(title: "Ok", style: .default, handler: { (action) in
            completionHandler(true)
        }))
        alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
            completionHandler(false)
        }))
        self.present(alertController, animated: true, completion: nil)
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let dict = message.body as? [String : String] else {
            return
        }
        
        appLoaded = true
        
        if let action = dict["action"] {
            switch action {
            case "getAccessKey":
                let localhostAccessKeyId = AccessKeyInfo.localhostAccessKeyId
                let localhostAccessKey = AccessKeyInfo.localhostAccessKey
                
                let script = "window.bsafesNative.accessKeyWebCall({localhostAccessKeyId:\"\(localhostAccessKeyId)\", localhostAccessKey:\"\(localhostAccessKey)\"});"
                
                webView.evaluateJavaScript(script) { (result, error) in
                    if let result = result {
                        print("Label is updated with message: \(result)")
                    } else if let error = error {
                        print("An error occurred: \(error)")
                    }
                }
            case "checkout":
                 guard let planId = dict["planId"] else {
                       return
                 }
                 print(planId)
                 guard let appleClientSecret = dict["appleClientSecret"] else {
                       return
                 }
                 print(appleClientSecret)
                 checkout(planId, withSecret: appleClientSecret)
            case "finishTransaction":
                 print("finishTransaction")
                 Task {
                       await finishTransaction()
                 }
            case "requestReview":
                StoreKitHelper.displayStoreKit()
            default:
                print(action)
            }
        }
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: @escaping (WKNavigationActionPolicy, WKWebpagePreferences) -> Void) {
        print(navigationAction)
        if navigationAction.shouldPerformDownload {
            decisionHandler(.download, preferences)
            return
        }
        if navigationAction.navigationType == .linkActivated  {
            if let url = navigationAction.request.url {
                if let host = url.host, !host.hasPrefix("v2.bsafes.com"), !host.hasPrefix("www.bsafes.com"), !host.hasPrefix("bsafes.com") {
                    UIApplication.shared.open(url)
                    decisionHandler(.cancel, preferences)
                    return
                } else {
                    let path = url.path
                    if path == "/external/payment" {
                        let bsafesHost = "https://v2.bsafes.com"
                        let externalURL = URL(string: "\(bsafesHost)/logIn?toPath=/services/payment")
                        guard (externalURL != nil) else {
                            return
                        }
                        UIApplication.shared.open(externalURL!)
                        decisionHandler(.cancel, preferences)
                        return
                    } else {
                        if let host = url.host, !host.hasPrefix("localhost") {
                            let path = url.path
                            let internalURL = URL(string: "\(localHost!)\(path)")
                            guard (internalURL != nil) else {
                                return
                            }
                            webView.load(URLRequest(url: internalURL!))
                            decisionHandler(.cancel, preferences)
                        } else {
                            decisionHandler(.allow, preferences)
                        }
                        return
                    }
                }
            }
        } else {
            print("not a user link")
            decisionHandler(.allow, preferences)
            return
        }
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse, decisionHandler: @escaping (WKNavigationResponsePolicy) -> Void) {
        if navigationResponse.canShowMIMEType {
            decisionHandler(.allow)
        } else {
            decisionHandler(.download)
        }
    }
    
    func webView(_ webView: WKWebView, navigationAction: WKNavigationAction, didBecome download: WKDownload) {
        download.delegate = self
    }
    
    func download(_ download: WKDownload, decideDestinationUsing response: URLResponse, suggestedFilename: String, completionHandler: @escaping (URL?) -> Void) {
        let script = "window.bsafesNative.iOSActivityWebCall({activity:1})"
        
        webView.evaluateJavaScript(script) { (result, error) in
            if let result = result {
                print("Javascript retures: \(result)")
            } else if let error = error {
                print("A javascript error occurred: \(error)")
            }
        }
        let tempDirectory = FileManager.default.temporaryDirectory
        let tempFolderName = UUID().uuidString
        let tempDirectoryPath = tempDirectory.appendingPathComponent(tempFolderName, isDirectory:true)
        do {
            try FileManager.default.createDirectory(at: tempDirectoryPath, withIntermediateDirectories: false)
        } catch {
            debugPrint(error)
            return
        }
        let url = tempDirectoryPath.appendingPathComponent(suggestedFilename, isDirectory: false)
        fileDestinationURL = url
        completionHandler(url)
    }
    
    func download(_ download: WKDownload, didFailWithError error: Error, resumeData: Data?) {
        print(error)
    }
    
    func share(_ url: URL) {
        documentInteractionController.url = url
        documentInteractionController.uti = url.typeIdentifier ?? "public.data, public.content"
        documentInteractionController.name = url.localizedName ?? url.lastPathComponent
        documentInteractionController.presentOptionsMenu(from: view.frame, in: view, animated: true)
        documentInteractionController.delegate = self
    }
    
    func documentInteractionControllerDidDismissOptionsMenu(_ controller: UIDocumentInteractionController) {
        print("documentInteractionController dismisssed")
        if let url = fileDestinationURL {
            do {
                try FileManager.default.removeItem(at: url)
                let script = "window.bsafesNative.iOSActivityWebCall({activity:0})"
                
                webView.evaluateJavaScript(script) { (result, error) in
                    if let result = result {
                        print("Javascript retures: \(result)")
                    } else if let error = error {
                        print("A javascript error occurred: \(error)")
                    }
                }
            } catch {
                debugPrint(error)
                return
            }
        }
    }
    
    func downloadDidFinish(_ download: WKDownload) {
        if let url = fileDestinationURL {
            share(url)
        }
    }
    
    private func checkout(_ productId: String, withSecret secret: String) {
        let checkout = Checkout(forDelegate: self, forProduct: productId, withSecret: secret)
        checkout.purchase()
    }
    
    func handleCheckoutResult(_ transaction: Transaction?) {
        var script: String
        if let transaction {
            print(transaction)
            pendingTransaction = transaction
            let purchaseTime = Int(transaction.purchaseDate.timeIntervalSince1970 * 1000);
            print(purchaseTime);
            script = "window.bsafesNative.transactionWebCall({status: \"ok\", transaction: { time: \(purchaseTime), id:\"\(transaction.id)\", originalId:\"\(transaction.originalID)\"}});"

        } else {
            script = "window.bsafesNative.transactionWebCall({status: \"error\"})"
        }
        webView.evaluateJavaScript(script) { (result, error) in
           if let result = result {
                print("Javascript retures: \(result)")
           } else if let error = error {
                print("A javascript error occurred: \(error)")
           }
        }
    }
    
    func handleCheckoutError(_ result: String) {
         let script = "window.bsafesNative.transactionWebCall({status: \"error\", error: \"\(result)\"})"
         webView.evaluateJavaScript(script) { (result, error) in
             if let result = result {
                 print("Javascript returns: \(result)")
              } else if let error = error {
                 print("An javascript error occurred: \(error)")
              }
         }
    }
    
    @MainActor
    private func finishTransaction() async {
        if let pendingTransaction {
            await pendingTransaction.finish()
            print("Transaction finished.")
        }
    }

}

