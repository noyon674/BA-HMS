import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Home_Service() {
  return (
    <div className="bg-bgsecondary py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
        <div className="flex flex-col justify-center">
          <p className="text-xl tracking-widest font-semibold text-textsecondary mb-5">
            Medical Services
          </p>
          <h2 className="text-5xl font-semibold w-[400px] text-gray-800">
            We're Providing Best Services.
          </h2>
        </div>
        <div className="border border-gray-500 pt-10 relative box">
          <div className="pb-20 px-10  z-10">
            <p className="text-5xl text-textsecondary">
              <FontAwesomeIcon icon={faEye} />
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
              Eye Care
            </h3>
            <p className="text-xl text-gray-500">
              We understand the importance of clear vision and its impact on
              your.
            </p>
          </div>
          <div className="absolute overlay bg-textsecondary bottom-0 left-0 w-full h-14 flex justify-center items-end pb-5">
            <Link className="text-xl font-semibold text-gray-700 underline z-10">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Service;
