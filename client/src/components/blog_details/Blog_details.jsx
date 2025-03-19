import React from "react";
import { useLocation } from "react-router-dom";

function Blog_details() {
  const { title, desc, img } = useLocation().state;
  console.log(location);

  if (!title) {
    return (
      <div className="text-center text-2xl font-semibold mt-10">
        Blog not found
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-6xl mx-auto">
        <img
          src={img}
          alt="blog.jpg"
          className="w-full h-100 object-cover rounded-md"
        />
        <h1 className="text-4xl font-bold mt-6">{title}</h1>
        <div className="mt-4 text-lg text-gray-700 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

export default Blog_details;
