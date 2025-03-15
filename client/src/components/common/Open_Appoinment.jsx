import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import Appoinment from "./Appoinment";

function Open_Appoinment() {
  return (
    <div className="bg-bgprimary px-3 md:px-0">
      <div className="container mx-auto flex flex-col h-[350px] sm:h-[250px] justify-center xl:justify-around gap-y-5 lg:flex-row lg:items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-x-10">
          <div className="text-6xl text-textsecondary">
            <FontAwesomeIcon icon={faBriefcaseMedical} />
          </div>
          <div className="">
            <h2 className="text-3xl text-textprimary font-semibold my-3">
              Open For Appointments
            </h2>
            <p className="text-lg text-textprimary lg:w-[500px]">
              We are delighted to announce that our doors are open, and we are
              now accepting appointments to serve you better.
            </p>
          </div>
        </div>
        <div className="">
          <Appoinment />
        </div>
      </div>
    </div>
  );
}

export default Open_Appoinment;
