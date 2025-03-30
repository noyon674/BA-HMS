import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Appoinment() {
  return (
    <Link
      to="/appoinment"
      className="flex items-center gap-x-3 text-lg font-semibold text-textsecondary border-2 transition-all duration-200 border-borderclr px-7 py-2 hover:cursor-pointer hover:bg-borderbg hover:text-textprimary rounded-full"
    >
      <span>Book Appoinment</span>
      <span>
        <FontAwesomeIcon icon={faCalendarDays} />
      </span>
    </Link>
  );
}

export default Appoinment;
