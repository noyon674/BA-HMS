import React from "react";

const images = [
  "https://i.postimg.cc/C5XmtTfJ/cultuer-1.jpg",
  "https://i.postimg.cc/mDQ94vq8/cultuer-2.jpg",
  "https://i.postimg.cc/TP221Zpt/cultuer-3.jpg",
  "https://i.postimg.cc/4NtpQhwr/cultuer-4.jpg",
  "https://i.postimg.cc/sggDDkBw/cultuer-5.jpg",
  "https://i.postimg.cc/Nf0WyB49/cultuer-6.jpg",
  "https://i.postimg.cc/tTMF23KH/cultuer-7.jpg",
  "https://i.postimg.cc/hjf2Dtgc/cultuer-8.jpg",
  "https://i.postimg.cc/brfk7yw6/cultuer-9.jpg",
  "https://i.postimg.cc/25qW3bqc/cultuer-10.jpg",
];

const InfrastructureCulture = () => {
  return (
    <div className="bg-[#fff7f3] py-12 px-6 lg:px-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-16 max-w-7xl mx-auto">
        <div className="space-y-10">
          <h3 className="text-xl text-[#E69C74] tracking-wider font-semibold mb-2 uppercase">
            Our Culture
          </h3>
          <h1 className="text-4xl  font-bold text-gray-900 mb-4">
            Our Infrastructure & Culture
          </h1>
        </div>
        <div>
          <p className="text-gray-700 max-w-3xl mx-auto lg:mx-0">
            At our medipro, we pride ourselves on fostering a culture of care,
            where every individual’s well-being is our utmost priority. Our
            commitment to excellence in healthcare is grounded.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-72 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={`infrastructure-${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureCulture;
