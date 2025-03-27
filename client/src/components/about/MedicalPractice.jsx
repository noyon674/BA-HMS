import React from "react";

const MedicalPractice = () => {
  return (
    <section className="bg-pink-50 py-16 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 space-y-8">
        <h3 className="text-xl text-[#F28C67] uppercase">
          Caring for the health of you and your family.
        </h3>
        <h1 className="text-5xl font-bold text-gray-800 mt-2">
          We Provide All Aspects Of Medical Practice For Your Whole Family!
        </h1>
        <p className="mt-4 text-gray-600">
          Welcome to Medipro, where we offer comprehensive medical care tailored
          to every member of your family.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-gray-700">
            ✅ <span className="ml-2">Family-Centered Care</span>
          </li>
          <li className="flex items-center text-gray-700">
            ✅ <span className="ml-2">Preventive Services</span>
          </li>
          <li className="flex items-center text-gray-700">
            ✅ <span className="ml-2">Vaccinations and Immunizations</span>
          </li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600">
          Get Started ➜
        </button>
      </div>

      {/* Right Section - Cards */}
      <div className="md:w-1/2 space-y-4">
        <Card
          title="Patient Information"
          description="I hereby give consent to healthcare professionals to provide medical treatment."
        />
        <Card
          title="Emergency Contact"
          description="This application form is for informational purposes only and does not guarantee."
        />
        <Card
          title="Medical History"
          description="Our medical history is a vital piece of information that provides healthcare."
        />
      </div>
    </section>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4">
      <span className="text-green-600 text-2xl">📋</span>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default MedicalPractice;
