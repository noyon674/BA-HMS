import React from "react";
import { Link } from "react-router-dom";

function Blog_details_banner() {
  return (
    <div className="bg-bgprimary h-50 lg:h-[50vh] flex flex-col gap-5 items-center justify-center">
      <h2 className="text-4xl font-semibold text-textsecondary">
        Blog Details
      </h2>
      <p className="flex items-center gap-x-3 text-xl font-semibold text-textprimary">
        <Link to="/" className="hover:text-textsecondary">
          Home
        </Link>
        <span className="text-textsecondary">||</span>
        <Link to="/blogs" className="hover:text-textsecondary">
          Blog
        </Link>
        <span className="text-textsecondary">||</span>
        <span>Details</span>
      </p>
    </div>
  );
}

export default Blog_details_banner;
