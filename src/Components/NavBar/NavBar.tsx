import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./NavBar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 ${
        scrolled ? "scrolled" : "not-scrolled"
      }`}
    >
      <div className="flex flex-grow justify-center">
        <nav className="flex items-center gap-8">
          <Link
            to="#about-me"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
          >
            About Me
          </Link>
          <Link
            to="#technologies"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
          >
            Technologies
          </Link>
          <Link
            to="#projects"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
          >
            Projects
          </Link>
          <Link
            to="#contact-me"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
          >
            Contact Me
          </Link>
          <Link
            to="#footer"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
          >
            Footer
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to={"https://github.com/WimukthiMadushan"}
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          to={
            "https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
          }
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </header>
  );
}
