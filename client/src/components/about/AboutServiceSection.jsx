import React from "react";
import { FaClipboardList, FaMicroscope, FaUserMd } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    id: 1,
    icon: <FaMicroscope className="text-[#F28C67] text-6xl" />,
    title: "Modern Laboratory",
    description:
      "Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise results.",
  },
  {
    id: 2,
    icon: <FaClipboardList className="text-[#F28C67] text-6xl" />,
    title: "Experienced Doctors",
    description:
      "We take pride in our team of experienced doctors who are at the forefront of delivering exceptional care.",
  },
  {
    id: 3,
    icon: <FaUserMd className="text-[#F28C67] text-6xl" />,
    title: "Expert Medical Staff",
    description:
      "Our dedicated medical professionals ensure the highest quality of healthcare and patient satisfaction.",
  },
];

const AboutServiceSection = () => {
  return (
    <div className="bg-[#FEF6F2] py-20 px-6">
      <div className="max-w-6xl mx-auto  space-y-5 mb-20">
        <h4 className="text-[#F28C67] text-2xl uppercase tracking-widest mb-2">
          Top Services
        </h4>
        <h2 className="text-6xl font-bold text-[#10332A] mb-10">
          We Are a Progressive <br /> Medical Clinic.
        </h2>
      </div>
      <div className="max-w-6xl mx-auto text-center ">
        {/* Section Title */}

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition"
            >
              {/* Icon */}
              <div>{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mt-8">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-6">{service.description}</p>

              {/* Read More Link */}
              <div className="mt-8 flex items-center gap-2 text-[#10332A] font-medium hover:underline cursor-pointer">
                Read More
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutServiceSection;
