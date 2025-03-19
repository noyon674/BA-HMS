import { useState } from "react";
import { blogsData } from "../../../data/blogs";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";

const secretKey = "iamnoyon"; // Keep this secret

const Blogs = () => {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogsData.length / blogsPerPage);
  const displayedBlogs = blogsData.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const sliceDes = (desc) => {
    return desc.slice(0, 120) + "...";
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedBlogs.map((blog) => {
          const { id, title, desc, img } = blog;

          // Encrypt ID dynamically
          const encryptedId = CryptoJS.AES.encrypt(
            id.toString(),
            secretKey
          ).toString();
          const encodedId = encodeURIComponent(encryptedId); // Encode for safe URL usage

          return (
            <div key={id} className="shadow rounded-b-md">
              <div>
                <img src={img} alt="blog.jpg" className="rounded-t-md" />
              </div>
              <div className="px-3 pb-5">
                <Link
                  title="read more"
                  to={`/blogs/${encodedId}`} // Use encrypted ID in URL
                  state={{ id, title, desc, img }}
                >
                  <h2 className="text-2xl mt-1 mb-5 font-semibold text-mobilemenubg hover:text-textsecondary">
                    {title}
                  </h2>
                </Link>
                <p className="text-lg text-gray-600">{sliceDes(desc)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center space-x-2 mt-20 lg:mb-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`bg-bgprimary text-textsecondary px-5 rounded font-semibold flex items-center ${
            currentPage === 1
              ? "opacity-70"
              : "cursor-pointer hover:bg-transparent border border-bgprimary hover:text-bgprimary"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 border border-bgprimary rounded-md">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`bg-bgprimary text-textsecondary px-5 rounded font-semibold flex items-center ${
            currentPage === totalPages
              ? "opacity-70"
              : "cursor-pointer hover:bg-transparent border border-bgprimary hover:text-bgprimary"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
