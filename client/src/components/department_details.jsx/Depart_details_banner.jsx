import React from "react";
import { Link, NavLink } from "react-router-dom";

function Depart_detail_banner({ name }) {
  return (
    <div className="bg-bgprimary h-50 lg:h-[55vh] flex flex-col gap-5 items-center justify-center">
      <h2 className="text-4xl font-semibold text-textsecondary capitalize">
        {name}
      </h2>
      <p className="flex items-center gap-x-3 text-xl font-semibold text-textprimary">
        <Link to="/" className="hover:text-textsecondary">
          Home
        </Link>
        <span className="text-textsecondary">||</span>
        <Link to="/departments" className="hover:text-textsecondary">
          Departments
        </Link>
        <span className="text-textsecondary">||</span>
        <span className=" capitalize">{name}</span>
      </p>
    </div>
  );
}

export default Depart_detail_banner;
