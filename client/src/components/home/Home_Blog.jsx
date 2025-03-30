import React from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../../../data/blogs";
import * as CryptoJS from "crypto-js";

const secretKey = "iamnoyon"; // Keep this secret

function Home_Blog() {
  const sliceDesc = (desc) => {
    return desc.slice(0, 120) + "...";
  };
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
          {blogsData.map((blog, index) => {
            const { id, title, desc, img } = blog;
            const encryptedId = CryptoJS.AES.encrypt(
              id.toString(),
              secretKey
            ).toString();
            const encodedId = encodeURIComponent(encryptedId);
            if (index <= 3) {
              return (
                <div className="shadow rounded-b-md" key={blog.id}>
                  <div>
                    <img src={img} alt="blog.jpg" className=" rounded-t-md" />
                  </div>
                  <div className="px-3 pb-5">
                    <Link
                      title="read more"
                      to={`/blogs/${encodedId}`}
                      state={{ id, title, desc, img }}
                    >
                      <h2 className="text-2xl mt-1 mb-5 font-semibold text-mobilemenubg hover:text-textsecondary">
                        {title}
                      </h2>
                    </Link>
                    <p className="text-lg text-gray-600">{sliceDesc(desc)}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="text-center mt-10 lg:mt-20">
          <Link
            to="blogs"
            className="bg-transparent text-bgprimary px-10 py-3 rounded font-semibold border border-bgprimary hover:bg-bgprimary hover:text-textsecondary "
          >
            All BLogs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home_Blog;
