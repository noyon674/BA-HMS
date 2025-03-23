import { FaHeart, FaTooth, FaVirus, FaHandsHelping, FaArrowRight } from "react-icons/fa";

export default function TopServices() {
  const services = [
    { title: "Cardiology", icon: <FaHeart className="text-4xl" /> },
    { title: "Diagnostics", icon: <FaTooth className="text-4xl" /> },
    { title: "Virology", icon: <FaVirus className="text-4xl" /> },
    { title: "Therapy", icon: <FaHandsHelping className="text-4xl" /> },
  ];

  return (
    <section className="bg-[#FFF6F2] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-[#E69C74] uppercase tracking-widest text-sm">Top Service</h3>
        <h2 className="text-4xl font-bold text-[#0F2D26] mt-2 leading-tight">
          We Are a Progressive Medical Clinic.
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Welcome to our comprehensive medical services designed to cater to your diverse healthcare needs. We are
          committed to delivering top-notch medical care with a patient-centered approach.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-[#0F2D26] mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#0F2D26]">{service.title}</h3>
            <div className="mt-4 flex justify-center">
              <button className="p-2 bg-[#0F2D26] text-white rounded-full hover:bg-[#E69C74] transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
