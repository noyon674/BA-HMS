import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// Doctor data
const doctors = [
  {
    name: "Dr. Elizabeth Foster",
    specialty: "Family Physician",
    description: "Compassionate care for all ages.",
    image: "https://i.postimg.cc/W45fGMCj/team-1.jpg",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
  {
    name: "Dr. David Lee",
    specialty: "Surgeon",
    description: "Skillful hands, transforming lives.",
    image: "https://i.postimg.cc/Xvr9PdXn/team-2.jpg",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
  {
    name: "Dr. Ava White",
    specialty: "Cardiologist",
    description: "Mental wellness and guiding.",
    image: "https://i.postimg.cc/RV8SRtr7/team-3.jpg",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
  {
    name: "Dr. Daniel Brown",
    specialty: "Dermatologist",
    description: "Focuses on skin, hair disorders.",
    image: "https://i.postimg.cc/5tbZq9t5/team-4.jpg",
    social: [FaInstagram, FaLinkedin, FaTwitter, FaFacebookF],
  },
];

export default function MeetOurDoctors() {
  return (
    <div className="bg-pink-50 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-4 mb-20">
        {/* Section Header */}
        <h3 className="text-xl uppercase text-[#E69C74] ">Our Best Doctor</h3>
        <h2 className="text-5xl font-bold text-gray-800 mb-8">
          Meet Our Doctors
        </h2>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Doctor Card Component
function DoctorCard({ doctor }) {
  return (
    <div className="group bg-white p-6 rounded-2xl text-center relative overflow-hidden transition-all duration-300 space-y-4">
      {/* Image Wrapper with Hover Effect */}
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-80 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-50"
        />
      </div>

      {/* Doctor Info */}
      <p className="text-[#E69C74] text-xl font-semibold">{doctor.specialty}</p>
      <h3 className="text-2xl font-bold text-[#0F2D26]">{doctor.name}</h3>
      <p className="text-gray-600 mt-2">{doctor.description}</p>

      {/* Hover Social Links */}
      <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {doctor.social.map((Icon, i) => (
          <div
            key={i}
            className="p-2 bg-[#0F2D26] rounded-xl transition duration-300 hover:bg-pink-800"
          >
            <Icon className="text-white text-2xl cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}
