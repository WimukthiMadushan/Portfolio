import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 ${
        scrolled ? "scrolled" : "not-scrolled"
      }`}
    >
      {/* Hamburger Icon for mobile */}
      <button className="navbar-menu-icon md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Center Container for Navbar Links and Social Icons */}
      <div className="flex-grow flex justify-center">
        {/* Centered Navbar Links */}
        <nav
          className={`${
            isMenuOpen
              ? "navbar-open flex flex-col gap-8 items-center"
              : "navbar-menu hidden md:flex gap-8"
          } transition-all duration-300 w-full md:w-auto`}
        >
          <Link
            to="#about-me"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            onClick={closeMenu}
          >
            About Me
          </Link>
          <Link
            to="#technologies"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            onClick={closeMenu}
          >
            Technologies
          </Link>
          <Link
            to="#projects"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="#contact-me"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            onClick={closeMenu}
          >
            Contact Me
          </Link>
          <Link
            to="#footer"
            smooth
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            onClick={closeMenu}
          >
            Footer
          </Link>
        </nav>

        {/* Social Icons */}
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a
          href="https://github.com/WimukthiMadushan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>

      {/* Social Icons for mobile */}
      {isMenuOpen && (
        <div className="flex md:hidden items-center gap-6 mt-6">
          <a
            href="https://github.com/WimukthiMadushan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            onClick={closeMenu}
          >
            <FaGithub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            onClick={closeMenu}
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      )}
    </header>
  );
}
