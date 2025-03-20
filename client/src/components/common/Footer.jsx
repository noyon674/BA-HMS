import {
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-bgprimary text-white py-20 px-6 mt-40 sm:mt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pt-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <img src={logo} alt="logo.svg" />
          </h2>
          <p className="mt-2 text-base font-semibold text-gray-300">
            Our family-centered approach to healthcare ensures that each member
            of your family receives personalized attention.
          </p>
          <div className="flex gap-4 mt-4 text-textsecondary text-2xl">
            <FaLinkedin className="cursor-pointer hover:text-white transition" />
            <FaYoutube className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaFacebook className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-textsecondary font-semibold text-xl">
            Quick Links
          </h3>
          <ul className="flex flex-col mt-2 text-lg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-textsecondary font-semibold text-xl">
            Contact Details
          </h3>
          <ul className="mt-2 space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2 text-base">
              <FaMapMarkerAlt /> Jl. Raya Kuta No.70, Kuta
            </li>
            <li className="flex items-center gap-2 text-base">
              <FaEnvelope /> healthcare@gmail.com
            </li>
            <li className="flex items-center gap-2 text-base">
              <FaPhone /> +01 547 547 5478
            </li>
            <li className="flex items-center gap-2 text-base">
              <FaClock /> 8 AM - 5 PM, Monday - Saturday
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-textsecondary font-semibold text-xl">
            Newsletter
          </h3>
          <p className="mt-2 text-gray-300 text-base">
            Stay informed and never miss out on the latest news, health tips.
          </p>
          <div className="flex items-center border border-gray-500 rounded-lg p-1 mt-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent text-gray-300 border-0 outline-none focus:ring-0 focus:border-transparent px-3 py-2 w-full"
            />
            <button className="border-borderbg hover:bg-borderbg hover:text-textprimary hover:cursor-pointer border-2 text-textsecondary font-semibold px-7 py-3 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
