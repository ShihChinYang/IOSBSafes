//
//  ViewController.swift
//  BSafes
//
//  Created by MacBook Pro - SYang on 6/20/24.
//

import UIKit
import WebKit
import StoreKit

class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {
    
    var webView: WKWebView!
    var localHost: String!
    var timer: Timer!
    var appLoaded: Bool = false
    var pendingTransaction: Transaction? = nil
    
    @objc func fireTimer() {
        print("Timer fired!")
        if appLoaded == false {
            webView?.reload();
        } else {
            timer.invalidate();
        }
    }
    
    override func loadView() {
        let webViewConfiguration = WKWebViewConfiguration();
        webViewConfiguration.limitsNavigationsToAppBoundDomains = true;
        webView = WKWebView(frame: .zero, configuration: webViewConfiguration)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        //webView.isInspectable = true
        let contentController = webView.configuration.userContentController
        contentController.add(self, name: "toggleMessageHandler")
        view = webView
        timer = Timer.scheduledTimer(timeInterval: 3.0, target: self, selector: #selector(fireTimer), userInfo: nil, repeats: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let testWith3000 = false
        let url: URL!
        if !testWith3000 {
            url = URL(string: "http://localhost:8080/apps/bsafes.html")!
            localHost = "http://localhost:8080"
        } else {
            url = URL(string: "http://localhost:3000/apps/bsafes")!
            localHost = "http://localhost:3000"
        }
        webView.load(URLRequest(url: url))
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
            default:
                print(action)
            }
        }
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if navigationAction.navigationType == .linkActivated  {
            if let url = navigationAction.request.url {
                if let host = url.host, !host.hasPrefix("v2.bsafes.com"), !host.hasPrefix("www.bsafes.com"), !host.hasPrefix("bsafes.com") {
                    UIApplication.shared.open(url)
                    decisionHandler(.cancel)
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
                        decisionHandler(.cancel)
                        return
                    } else {
                        if let host = url.host, !host.hasPrefix("localhost") {
                            let path = url.path
                            let internalURL = URL(string: "\(localHost!)\(path)")
                            guard (internalURL != nil) else {
                                return
                            }
                            webView.load(URLRequest(url: internalURL!))
                            decisionHandler(.cancel)
                        } else {
                            decisionHandler(.allow)
                        }
                        return
                    }
                }
            }
        } else {
            print("not a user link")
            decisionHandler(.allow)
            return
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

