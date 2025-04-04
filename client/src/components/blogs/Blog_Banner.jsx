import React from "react";
import { Link } from "react-router-dom";

function Blog_Banner() {
  return (
    <div className="bg-bgprimary h-50 lg:h-[55vh] flex flex-col gap-5 items-center justify-center mb-10 md:mb-20">
      <h2 className="text-4xl font-semibold text-textsecondary">Blogs</h2>
      <p className="flex items-center gap-x-3 text-xl font-semibold text-textprimary">
        <Link to="/" className="hover:text-textsecondary">
          Home
        </Link>
        <span className="text-textsecondary">||</span>
        <span>Blogs</span>
      </p>
    </div>
  );
}

export default Blog_Banner;
