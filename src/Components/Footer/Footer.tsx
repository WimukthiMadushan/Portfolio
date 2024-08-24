import { HashLink as Link } from "react-router-hash-link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { LuArrowUpSquare } from "react-icons/lu";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-black via-gray-800 to-black py-6 md:py-8 relative"
    >
      <div className="container mx-auto text-center text-white">
        {/* Contact Section and Social Links */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <FaPhone className="h-6 w-6 text-yellow-500" />
            <span className="text-sm md:text-base">+94 740631472</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              to={
                "https://www.facebook.com/profile.php?id=100057304343669&mibextid=ZbWKwL"
              }
              className="flex items-center gap-2 text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
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
              className="flex items-center gap-2 text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="h-6 w-6" />
              <span className="text-sm md:text-base">LinkedIn</span>
            </Link>

            <Link
              to={"https://github.com/WimukthiMadushan"}
              className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6" />
              <span className="text-sm md:text-base">GitHub</span>
            </Link>

            <Link
              to={"https://wa.me/+94740631472"}
              className="flex items-center gap-2 text-white hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-6 w-6" />
              <span className="text-sm md:text-base">WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-2 mb-4">
          <p className="text-lg font-semibold mb-2">Technologies used</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-gray-300 text-sm bg-gray-800 px-2 py-1 rounded-lg">
              React
            </span>
            <span className="text-gray-300 text-sm bg-gray-800 px-2 py-1 rounded-lg">
              Tailwind CSS
            </span>
            <span className="text-gray-300 text-sm bg-gray-800 px-2 py-1 rounded-lg">
              TypeScript
            </span>
            <span className="text-gray-300 text-sm bg-gray-800 px-2 py-1 rounded-lg">
              HTML5
            </span>
            <span className="text-gray-300 text-sm bg-gray-800 px-2 py-1 rounded-lg">
              CSS3
            </span>
          </div>
        </div>

        {/* Back to Top Arrow */}
        {/* Back to Top Arrow */}
        <div className="absolute bottom-4 right-4">
          <Link
            smooth
            to="#hero"
            className="text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-125"
            title="Back to Top"
          >
            <LuArrowUpSquare className="h-8 w-8 animate-bounce infinite" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
