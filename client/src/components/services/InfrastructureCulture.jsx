

import React from 'react';

const images = [
  'https://i.postimg.cc/your-image1.jpg',
  'https://i.postimg.cc/your-image2.jpg',
  'https://i.postimg.cc/your-image3.jpg',
  'https://i.postimg.cc/your-image4.jpg',
  'https://i.postimg.cc/your-image5.jpg',
  'https://i.postimg.cc/your-image6.jpg',
  'https://i.postimg.cc/your-image7.jpg',
  'https://i.postimg.cc/your-image8.jpg',
  'https://i.postimg.cc/your-image9.jpg',
  'https://i.postimg.cc/your-image10.jpg'
];

const InfrastructureCulture = () => {
  return (
    <div className="bg-[#fff7f3] py-12 px-6 lg:px-20">
      {/* Header */}
      <div className="mb-12 text-center lg:text-left">
        <h3 className="text-sm text-rose-400 tracking-wider font-semibold mb-2 uppercase">Our Culture</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Infrastructure & Culture</h1>
        <p className="text-gray-700 max-w-3xl mx-auto lg:mx-0">
          At our medipro, we pride ourselves on fostering a culture of care, where every individual’s well-being is our utmost priority. Our commitment to excellence in healthcare is grounded.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div key={index} className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
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
