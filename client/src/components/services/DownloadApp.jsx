import React from "react";

const DownloadApp = () => {
  return (
    <div className="bg-[#fff7f3] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-0 lg:flex-row items-center justify-between">
        {/* Left Section: Text & Buttons */}
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-xl text-[#E69C74]  tracking-wider font-semibold uppercase mb-2">
            App Download
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Download MediPro App & <br /> Get
            <span className="text-green-600">100$ Healthcare</span>.
          </h1>
          <p className="text-gray-700 mb-6 text-base">
            Welcome to the convenient world of our Medical Website App, where
            taking control of your health has never been easier. Download our
            user-friendly app now to access a wide range of medical services and
            resources right at your fingertips.
          </p>
          {/* Download Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="GOOGLE_PLAY_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.postimg.cc/vB1tBsdH/google-play-img.png"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="APP_STORE_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.postimg.cc/fTQfwpqD/app-store-img.png"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Section: Phone Image */}
        <div className="">
          <img
            src="https://i.postimg.cc/R0gghd6G/app-download-1.png"
            alt="MediPro App"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
