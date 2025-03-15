import React from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../../../data/blogs";

function Home_Blog() {
  return (
    <div className="bg-bgsecondary py-20 lg:py-32 px-3 md:px-0">
      <div className="container mx-auto">
        <div className="mb-10">
          <p className="text-xl tracking-widest text-textsecondary">Our Blog</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-bgprimary">
            Lates News & Articles.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {blogsData.map((blog) => (
            <div className="shadow rounded-b-md" key={blog.id}>
              <div>
                <img src={blog.img} alt="blog.jpg" className=" rounded-t-md" />
              </div>
              <div className="px-3 pb-5">
                <Link title="read more">
                  <h2 className="text-2xl mt-1 mb-5 font-semibold text-mobilemenubg hover:text-textsecondary">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-lg text-gray-600">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home_Blog;
