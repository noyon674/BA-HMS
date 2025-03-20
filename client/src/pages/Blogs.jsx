import React from "react";
import Blog_Banner from "../components/blogs/Blog_Banner";
import All_Blogs from "../components/blogs/All_Blogs";

function Blogs() {
  return (
    <>
      <hr className="border-orange-100 border-t-2" />
      <Blog_Banner />
      <All_Blogs />
    </>
  );
}

export default Blogs;
