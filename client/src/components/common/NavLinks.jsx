import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </>
  );
}

export default NavLinks;
