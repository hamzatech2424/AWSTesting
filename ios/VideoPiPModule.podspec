Pod::Spec.new do |s|
    s.name             = 'VideoPiPModule'
    s.version          = '1.0.0'
    s.summary          = 'A custom module for enabling PiP mode in React Native.'
    s.homepage         = 'https://github.com/your-username/VideoPiPModule'
    s.author           = { 'Your Name' => 'your@email.com' }
    s.source           = { :git => 'https://github.com/your-username/VideoPiPModule.git', :tag => '1.0.0' }
    s.platform         = :ios, '10.0'
    s.source_files     = 'VideoPiPModule.swift'
  
    # You might need to specify other dependencies here if your module relies on them.
    # Example:
    # s.dependency 'SomeDependency'
  end
  