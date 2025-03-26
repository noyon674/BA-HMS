import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactMap = () => {
  return (
    <div className="relative w-full mb-20">
      {/* Google Map */}
      <div className="w-full h-[650px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25194.233979826477!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3bbf98c5ed%3A0x9c1d8fcfea3a9336!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1711468307176!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-green-900 text-white p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <ContactItem
          icon={<FaPhoneAlt className="text-[#E69C74]" />}
          title="Help Line"
          text="(+0) 123 456 789"
        />
        <ContactItem
          icon={<FaMapMarkerAlt className="text-[#E69C74]" />}
          title="Location"
          text="Jl. Raya Kuta No.70, Kuta"
        />
        <ContactItem
          icon={<FaEnvelope className="text-[#E69C74]" />}
          title="Email Address"
          text="healthcare@gmail.com"
        />
      </div>
    </div>
  );
};

// Reusable Contact Item Component
const ContactItem = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ContactMap;
