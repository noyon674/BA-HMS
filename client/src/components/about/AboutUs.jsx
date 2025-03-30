import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-pink-50 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="max-w-xl space-y-7">
        <h3 className="text-[#E69C74] text-xl uppercase font-semibold">
          About Us
        </h3>
        <h2 className="text-gray-900 text-5xl font-semibold mt-2">
          Caring For The Health & Well Being Of Family.
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Our family-centered approach to healthcare ensures that each member of
          your family receives personalized attention and care tailored to their
          unique needs. We believe in building strong relationships with our
          patients, fostering trust.
        </p>
        <div className="mt-6 flex item-start space-x-4">
          <img
            src="https://i.postimg.cc/85tD3yGg/about-footer-img.jpg"
            alt="Dr. Elizabeth Foster"
            className="w-40 h-40 object-cover rounded-md"
          />
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-lg">
              Dr. Elizabeth Foster
            </h4>
            <p className="text-[#E69C74]  text-sm">Family Physician</p>
            <div className="border-[#E69C74] border"></div>
            <img src="https://i.postimg.cc/J4ym6cdS/signature.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="sm:flex bg-no-repeat bg-cover gap-x-10 mb-20 lg:mb-0"
        style={{
          backgroundImage: "url('https://i.postimg.cc/prjCJ2TF/13972.jpg')",
        }}
      >
        <img
          src="https://i.postimg.cc/3RJz1D5D/page-about-us-img-1.jpg"
          alt=""
          className="rounded-full hidden sm:block -ml-10 lg:mt-20 sm:w-48 sm:h-72 lg:w-52 lg:h-80 transform scale-110 "
        />
        <img
          src="https://i.postimg.cc/7PTrW0Jg/page-about-us-img-2.jpg"
          alt=""
          className="rounded-full mb-20 hidden sm:block sm:w-48 sm:h-72 lg:w-52 lg:h-80 transform scale-110"
        />
      </div>
    </section>
  );
};

export default AboutUs;
