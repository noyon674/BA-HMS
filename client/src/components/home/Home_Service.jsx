import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFlaskVial,
  faNotesMedical,
  faTooth,
  faBedPulse,
} from "@fortawesome/free-solid-svg-icons";

function Home_Service() {
  return (
    <div className="bg-bgsecondary py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-5 md:px-0">
        <div className="flex flex-col justify-center h-[300px]">
          <p className="text-xl tracking-widest font-semibold text-textsecondary mb-5">
            Medical Services
          </p>
          <h2 className="text-5xl font-semibold w-[400px] text-gray-800">
            We're Providing Best Services.
          </h2>
        </div>
        <div className="border border-gray-500 pt-10 relative box h-[300px] overflow-hidden group">
          <div className="pb-20 px-10 absolute z-10 transition-all duration-300 ease-in-out">
            <p className="text-5xl text-[#333]">
              <FontAwesomeIcon icon={faEye} />
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
              Eye Care
            </h3>
            <p className="text-lg text-gray-600">
              We understand the importance of clear vision and its impact on
              your.
            </p>
          </div>

          <div className="absolute overlay bg-textsecondary bottom-0 left-0 w-full h-14 flex justify-center items-end pb-5 transition-all duration-300 ease-in-out group-hover:h-20">
            <Link className="text-xl font-semibold text-gray-700 underline z-10 transition-all duration-300 ease-in-out group-hover:text-gray-900">
              Read more
            </Link>
          </div>
        </div>
        <div className="border border-gray-500 pt-10 relative box h-[300px] overflow-hidden group">
          <div className="pb-20 px-10 absolute z-10 transition-all duration-300 ease-in-out">
            <p className="text-5xl text-[#333]">
              <FontAwesomeIcon icon={faNotesMedical} />
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
              Medical Checkup
            </h3>
            <p className="text-lg text-gray-600">
              During your medical checkup, our skilled healthcare professionals.
            </p>
          </div>

          <div className="absolute overlay bg-textsecondary bottom-0 left-0 w-full h-14 flex justify-center items-end pb-5 transition-all duration-300 ease-in-out group-hover:h-20">
            <Link className="text-xl font-semibold text-gray-700 underline z-10 transition-all duration-300 ease-in-out group-hover:text-gray-900">
              Read more
            </Link>
          </div>
        </div>
        <div className="border border-gray-500 pt-10 relative box h-[300px] overflow-hidden group">
          <div className="pb-20 px-10 absolute z-10 transition-all duration-300 ease-in-out">
            <p className="text-5xl text-[#333]">
              <FontAwesomeIcon icon={faTooth} />
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
              Dental Care
            </h3>
            <p className="text-lg text-gray-600">
              We are passionate about providing top-notch dental care to help
              you.
            </p>
          </div>

          <div className="absolute overlay bg-textsecondary bottom-0 left-0 w-full h-14 flex justify-center items-end pb-5 transition-all duration-300 ease-in-out group-hover:h-20">
            <Link className="text-xl font-semibold text-gray-700 underline z-10 transition-all duration-300 ease-in-out group-hover:text-gray-900">
              Read more
            </Link>
          </div>
        </div>
        <div className="border border-gray-500 pt-10 relative box h-[300px] overflow-hidden group">
          <div className="pb-20 px-10 absolute z-10 transition-all duration-300 ease-in-out">
            <p className="text-5xl text-[#333]">
              <FontAwesomeIcon icon={faFlaskVial} />
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
              Laboratory Service
            </h3>
            <p className="text-lg text-gray-600">
              We understand the critical role that accurate diagnostics play in
              guiding.
            </p>
          </div>

          <div className="absolute overlay bg-textsecondary bottom-0 left-0 w-full h-14 flex justify-center items-end pb-5 transition-all duration-300 ease-in-out group-hover:h-20">
            <Link className="text-xl font-semibold text-gray-700 underline z-10 transition-all duration-300 ease-in-out group-hover:text-gray-900">
              Read more
            </Link>
          </div>
        </div>
        <div className="border border-gray-500 pt-10 relative box h-[300px] overflow-hidden group">
          <div className="pb-20 px-10 absolute z-10 transition-all duration-300 ease-in-out">
            <p className="text-5xl text-[#333]">
              <FontAwesomeIcon icon={faBedPulse} />
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
              Patient-Centered
            </h3>
            <p className="text-lg text-gray-600">
              Hospitals, or clinics with positive reviews and ratings from
              patients.
            </p>
          </div>

          <div className="absolute overlay bg-textsecondary bottom-0 left-0 w-full h-14 flex justify-center items-end pb-5 transition-all duration-300 ease-in-out group-hover:h-20">
            <Link className="text-xl font-semibold text-gray-700 underline z-10 transition-all duration-300 ease-in-out group-hover:text-gray-900">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Service;
