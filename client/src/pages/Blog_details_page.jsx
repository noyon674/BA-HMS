import React from "react";
import Blog_details_banner from "../components/blog_details/Blog_details_banner";
import Blog_details from "../components/blog_details/Blog_details";

function Blog_details_page() {
  return (
    <div>
      <Blog_details_banner />
      <div className="bg-bgsecondary">
        <Blog_details />
      </div>
    </div>
  );
}

export default Blog_details_page;
