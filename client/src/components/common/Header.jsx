import React, { useState } from "react";
import NavLinks from "./NavLinks";

import Appoinment from "./Appoinment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  // toggle for mobile menu
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="bg-bgprimary pt-5 pb-2 px-3 sm:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="./assets/images/logo.svg" alt="logo.svg" />
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex space-x-10 items-center">
          <div className="flex space-x-5 xl:space-x-10 text-xl text-textprimary uppercase">
            <NavLinks />
          </div>
          <div>
            <Appoinment />
          </div>
        </div>

        {/* three bar */}
        <button
          className="lg:hidden text-3xl text-textprimary"
          onClick={toggle}
        >
          {isOpenMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden flex flex-col items-end space-y-3 pr-3 md:pr-10 mt-2 bg-mobilemenubg overflow-hidden transition-all duration-200 ${
          isOpenMenu ? "h-[230px]" : "h-0"
        } rounded-md`}
      >
        <div className="flex flex-col space-y-1 text-xl text-textprimary uppercase pt-1 text-right">
          <NavLinks />
        </div>
        <div>
          <Appoinment />
        </div>
      </div>
    </div>
  );
}

export default Header;
