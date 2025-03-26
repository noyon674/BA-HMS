import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#fff7f3] py-16 px-6 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-20">
        <h3 className="text-[#E69C74] text-2xl tracking-wider font-semibold uppercase mb-6">
          Fill the Form
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Contact Form
        </h1>
      </div>

      {/* Form Container */}
      <div className="bg-green-900 text-white w-full max-w-6xl p-20 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2">Enter Your Full Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-rose-500 py-2"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Enter Your Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-rose-500 py-2"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">
              Enter Your Phone Number
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-rose-500 py-2"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Your Subject</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-rose-500 py-2"
              placeholder="Subject"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm mb-2">Type Your Message</label>
            <textarea
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-rose-500 py-2 h-24 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
        </form>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button className="px-6 py-2 border-2 border-[#E69C74] text-[#E69C74] text-2xl font-semibold rounded-full transition duration-300 hover:bg-rose-400 hover:text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
