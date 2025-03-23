
import React from 'react';

const DownloadApp = () => {
  return (
    <div className="bg-[#fff7f3] py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section: Text & Buttons */}
      <div className="text-center lg:text-left max-w-xl">
        <h3 className="text-sm text-rose-400 tracking-wider font-semibold uppercase mb-2">App Download</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Download MediPro App & <br /> Get <span className="text-green-600">100$ Healthcare</span>.
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to the convenient world of our Medical Website App, where taking control of your health has never been easier. Download our user-friendly app now to access a wide range of medical services and resources right at your fingertips.
        </p>
        {/* Download Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start">
          <a href="GOOGLE_PLAY_LINK" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12"/>
          </a>
          <a href="APP_STORE_LINK" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Apple_app_store_badge.svg" alt="App Store" className="h-12"/>
          </a>
        </div>
      </div>

      {/* Right Section: Phone Image */}
      <div className="relative mt-12 lg:mt-0">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-rose-300 rounded-full"></div>
        <div className="absolute -top-5 -right-5 w-72 h-72 bg-green-900 rounded-full"></div>
        <img src="PHONE_IMAGE_URL" alt="MediPro App" className="relative z-10 w-64 md:w-72 shadow-xl" />
      </div>
    </div>
  );
};

export default DownloadApp;
