import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faUserNurse,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home_Appoinment() {
  return (
    <div className="bg-bgsecondary py-[100px]">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="basis-1/3 pt-16 bg-textsecondary flex flex-col justify-between">
          <div className="px-10 py-10 lg:py-0">
            <h2 className="text-4xl font-semibold text-textprimary w-[300px]">
              Don't <span className="font-bold">Hesitate</span> To Contact us
            </h2>
          </div>
          <div className="bg-black text-bgsecondary duration-200 ease-in-out hover:bg-bgprimary">
            <Link
              to="/appoinment"
              className="flex items-center justify-center text-xl gap-x-3 py-3"
            >
              <span>Book Appoinment</span>
              <span>
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
            </Link>
          </div>
        </div>
        <div className="basis-2/3 grid grid-cols-1 sm:grid-cols-2 bg-bgprimary divide-y-2 sm:divide-x-2 divide-red-100">
          <div className="py-16 px-10 ">
            <div className="text-5xl text-textsecondary mb-5">
              <FontAwesomeIcon icon={faUserDoctor} />
            </div>
            <div>
              <h3 className="text-2xl text-textprimary font-semibold">
                Need Family Health
              </h3>
              <p className="text-xl text-gray-400 mt-2">
                We understand the importance of family health overall
                well-being.
              </p>
            </div>
          </div>
          <div className="py-16 px-10 ">
            <div className="text-5xl text-textsecondary mb-5">
              <FontAwesomeIcon icon={faUserNurse} />
            </div>
            <div>
              <h3 className="text-2xl text-textprimary font-semibold">
                24 hours service
              </h3>
              <p className="text-xl text-gray-400 mt-2">
                We take pride in offering 24-hour medical services to ensure
                that you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Appoinment;
