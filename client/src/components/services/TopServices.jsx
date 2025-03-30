import {
  FaArrowRight,
  FaHandsHelping,
  FaHeart,
  FaTooth,
  FaVirus,
} from "react-icons/fa";

export default function TopServices() {
  const services = [
    { title: "Cardiology", icon: <FaHeart className="text-6xl" /> },
    { title: "Diagnostics", icon: <FaTooth className="text-6xl" /> },
    { title: "Virology", icon: <FaVirus className="text-6xl" /> },
    { title: "Therapy", icon: <FaHandsHelping className="text-6xl" /> },
  ];

  return (
    <section className="bg-[#FFF6F2] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-5 mb-20">
        <h3 className="text-[#E69C74] uppercase tracking-widest text-2xl">
          Top Service
        </h3>
        <h2 className="text-5xl font-bold text-[#0F2D26] mt-2 leading-tight">
          We Are a Progressive Medical Clinic.
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base">
          Welcome to our comprehensive medical services designed to cater to
          your diverse healthcare needs. We are committed to delivering
          top-notch medical care with a patient-centered approach.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-y-4 space-y-3"
          >
            {/* Icon */}
            <div className="text-[#0F2D26] ">{service.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-[#0F2D26]">
              {service.title}
            </h3>

            {/* Button */}
            <div className="w-full flex justify-center">
              <button className="p-2 bg-[#0F2D26] text-white rounded-full hover:bg-[#E69C74] transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      ;
    </section>
  );
}
