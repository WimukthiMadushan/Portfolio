import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaGithub,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import { LuArrowUpSquare } from "react-icons/lu";

function Footer() {
  return (
    <div id="footer" className="bg-black py-6 md:py-8 relative">
      <div className="container mx-auto text-center text-white">
        {/* Contact Section and Social Links */}
        <div className="flex flex-col items-center gap-6 mb-6">
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <FaPhone className="h-6 w-6 text-white" />
            <span className="text-sm md:text-base">+94 740631472</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link
              to={"https://www.facebook.com"}
              className="flex items-center gap-2 text-white hover:text-blue-500 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-6 w-6" />
              <span className="text-sm md:text-base">Facebook</span>
            </Link>

            <Link
              to={
                "https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
              }
              className="flex items-center gap-2 text-white hover:text-blue-600 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="h-6 w-6" />
              <span className="text-sm md:text-base">LinkedIn</span>
            </Link>

            <Link
              to={"https://github.com/WimukthiMadushan"}
              className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6" />
              <span className="text-sm md:text-base">GitHub</span>
            </Link>

            <Link
              to={"https://wa.me/+94740631472"}
              className="flex items-center gap-2 text-white hover:text-green-500 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-6 w-6" />
              <span className="text-sm md:text-base">WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Technologies Section */}
        <p>Technologies used.</p>
        <div className="bg-black py-4">
          <div className="flex flex-wrap justify-center gap-6">
            <span className="text-gray-300 text-sm">React</span>
            <span className="text-gray-300 text-sm">Tailwind CSS</span>
            <span className="text-gray-300 text-sm">TypeScript</span>
            <span className="text-gray-300 text-sm">HTML5</span>
            <span className="text-gray-300 text-sm">CSS3</span>
          </div>
        </div>

        {/* Back to Top Arrow */}
        <div className="absolute bottom-4 right-4">
          <Link
            smooth
            to="#hero"
            className="text-white p-3 rounded-full shadow-lg"
            title="Back to Top"
          >
            <LuArrowUpSquare className="h-8 w-8 m-5 hover:scale-150 transition duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
