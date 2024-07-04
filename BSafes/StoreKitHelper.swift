//
//  StoreKitHelper.swift
//  BSafes
//
//  Created by MacBook Pro - SYang on 7/4/24.
//

import StoreKit

struct StoreKitHelper {
    static let numberOfTimesLaunchedKey = "numberOfTimesLaunched"
    
    static func displayStoreKit() {
        guard let currentVersion = Bundle.main.object(forInfoDictionaryKey: kCFBundleVersionKey as String) as? String else {
            return
        }
        
        let lastVersionPromptedForReview = UserDefaults.standard.string(forKey: "lastVersion")
        let numberOfTimesLaunched: Int = UserDefaults.standard.integer(forKey: StoreKitHelper.numberOfTimesLaunchedKey)
        
        if numberOfTimesLaunched > 7 && currentVersion != lastVersionPromptedForReview {
            if #available(iOS 10.3, *) {
                if let scene = UIApplication.shared.connectedScenes.first(where: { $0.activationState == .foregroundActive }) as? UIWindowScene {
                    DispatchQueue.main.async {
                        SKStoreReviewController.requestReview(in: scene)
                        UserDefaults.standard.set(currentVersion, forKey: "lastVersion")
                    }
                }
            } else {
                
            }
        }
        UserDefaults.standard.set(numberOfTimesLaunched + 1, forKey: StoreKitHelper.numberOfTimesLaunchedKey)
    }
    
    static func incrementNumberOfTimesLaunched() {
        let numberOfTimesLaunched: Int = UserDefaults.standard.integer(forKey: StoreKitHelper.numberOfTimesLaunchedKey) + 1
        UserDefaults.standard.set(numberOfTimesLaunched, forKey: StoreKitHelper.numberOfTimesLaunchedKey)
    }
}
