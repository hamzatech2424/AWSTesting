import AVKit

@objc(VideoPiPModule)
class VideoPiPModule: NSObject {
    @objc func enablePiPMode(_ videoURL: String) {
        if let url = URL(string: videoURL) {
            let player = AVPlayer(url: url)
            let playerViewController = AVPlayerViewController()
            playerViewController.player = player

            DispatchQueue.main.async {
                if let keyWindow = UIApplication.shared.windows.first(where: { $0.isKeyWindow }) {
                    keyWindow.rootViewController?.present(playerViewController, animated: true) {
                        player.play()
                    }
                }
            }
        }
    }
}
