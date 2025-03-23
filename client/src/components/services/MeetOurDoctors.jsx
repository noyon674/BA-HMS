import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Elizabeth Foster",
    specialty: "Family Physician",
    description: "Compassionate care for all ages.",
    image: "https://via.placeholder.com/200",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
  {
    name: "Dr. David Lee",
    specialty: "Surgeon",
    description: "Skillful hands, transforming lives.",
    image: "https://via.placeholder.com/200",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
  {
    name: "Dr. Ava White",
    specialty: "Cardiologist",
    description: "Mental wellness and guiding.",
    image: "https://via.placeholder.com/200",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
  {
    name: "Dr. Daniel Brown",
    specialty: "Dermatologist",
    description: "Focuses on skin, hair disorders.",
    image: "https://via.placeholder.com/200",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
];

export default function MeetOurDoctors() {
  return (
    <div className="bg-pink-50 py-12 px-6 text-center">
      <h3 className="text-sm uppercase text-pink-600">Our Best Doctor</h3>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Meet Our Doctors.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

function DoctorCard({ doctor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-md text-center relative overflow-hidden transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <p className="text-pink-600 font-semibold">{doctor.specialty}</p>
      <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
      <p className="text-gray-600 mt-2">{doctor.description}</p>
      <div
        className={`absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center gap-4 transition-all duration-300 ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {doctor.social.map((Icon, i) => (
          <Icon
            key={i}
            className="text-pink-600 text-2xl hover:text-pink-800 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
