import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-[#10332A] flex justify-center items-center py-16 px-8">
      <div className="max-w-6xl flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.postimg.cc/Pf0ZFK5w/improving-img.jpg"
            alt="Scientist using a microscope"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-white">
          <h4 className="text-2xl uppercase tracking-wide mb-2">Who We Are</h4>
          <h2 className="text-5xl font-bold text-[#F28C67] leading-tight mb-4">
            Improving The Quality Of Your Life Through Better Health.
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We offer a wide range of comprehensive healthcare services to
            address all aspects of your health. From preventive care and health
            screenings to specialized treatments and chronic disease management.
          </p>

          {/* Play Video Button */}
          <button className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition">
            <FaPlay className="w-4 h-4" />
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
