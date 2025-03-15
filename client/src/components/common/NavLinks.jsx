import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/services">Services</NavLink>

      {/* Category Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-x-2 category hover:cursor-pointer"
        >
          Category{" "}
          <span className="flex items-center">
            {isOpen ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 top-12 w-52 bg-bgsecondary text-bgprimary shadow-lg rounded-md text-lg">
            <NavLink
              to="/category/web-development"
              className="block px-4 py-4 hover:bg-mobilemenubg hover:text-textsecondary"
            >
              Web Development
            </NavLink>
            <NavLink
              to="/category/design"
              className="block px-4 py-4 hover:bg-mobilemenubg hover:text-textsecondary"
            >
              Design
            </NavLink>
            <NavLink
              to="/category/marketing"
              className="block px-4 py-4 hover:bg-mobilemenubg hover:text-textsecondary"
            >
              Marketing
            </NavLink>
          </div>
        )}
      </div>

      <NavLink to="/contact">Contact Us</NavLink>
    </>
  );
}

export default NavLinks;
