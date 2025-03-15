import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUserCheck,
  faHospitalUser,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

function Home_Work() {
  return (
    <div className="bg-bgsecondary py-16 lg:py-32">
      <div className="container mx-auto">
        <div className="lg:flex justify-around items-center">
          <div>
            <p className="text-xl text-textsecondary tracking-widest text-center lg:text-left my-1">
              How We Work
            </p>
            <h2 className="text-3xl lg:text-5xl mx-auto text-center lg:text-left text-bgprimary font-semibold mb-3 w-[400px]">
              A Comprehensive Directory For Your Health Care.
            </h2>
          </div>
          <div>
            <p className="text-base lg:text-lg text-center lg:text-left px-3 text-gray-600 lg:w-[600px] xl:w-[650px]">
              We are your trusted one-stop destination for all your healthcare
              needs. Our comprehensive directory is designed to provide you with
              easy access to a wide range of healthcare services and providers,
              ensuring that you and your family.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 mt-20 px-3 md:px-0">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className="text-4xl lg:text-5xl text-textsecondary">
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
            <span className="text-lg lg:text-xl text-bgprimary font-semibold">
              Book An Appointment
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className="text-4xl lg:text-5xl text-textsecondary">
              <FontAwesomeIcon icon={faHospitalUser} />
            </span>
            <span className="text-lg lg:text-xl text-bgprimary font-semibold">
              Conduct Checkup
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className="text-4xl lg:text-5xl text-textsecondary">
              <FontAwesomeIcon icon={faUserCheck} />
            </span>
            <span className="text-lg lg:text-xl text-bgprimary font-semibold">
              Perform Treatment
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className="text-4xl lg:text-5xl text-textsecondary">
              <FontAwesomeIcon icon={faFileContract} />
            </span>
            <span className="text-lg lg:text-xl text-bgprimary font-semibold">
              Prescribe & Payment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Work;
