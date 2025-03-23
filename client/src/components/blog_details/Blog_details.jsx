import React from "react";
import Ask_Question from "../common/Ask_Question";
import { useParams } from "react-router-dom";

import CryptoJS from "crypto-js";
import { blogsData } from "../../../data/blogs";

function Blog_details() {
  const { id } = useParams();
  const decryptedBytes = CryptoJS.AES.decrypt(
    decodeURIComponent(id), // Decode URL-safe string
    "iamnoyon"
  );
  const blogId = decryptedBytes.toString(CryptoJS.enc.Utf8);
  const data = blogsData.filter((blog) => blog.id == blogId);

  if (!data[0].title) {
    return (
      <div className="text-center text-2xl font-semibold mt-10">
        Blog not found
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 pt-14 lg:pt-31">
      <div className="max-w-6xl mx-auto">
        <img
          src={data[0].img}
          alt="blog.jpg"
          className="w-full h-100 object-cover rounded-md"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mt-10">
          {data[0].title}
        </h1>
        <div className="mt-4 text-lg text-gray-700 leading-relaxed">
          {data[0].desc}
        </div>

        <div>
          <Ask_Question />
        </div>
      </div>
    </div>
  );
}

export default Blog_details;
