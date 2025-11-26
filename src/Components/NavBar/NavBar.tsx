import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { HomeIcon, UserIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about-me", "technologies", "projects", "contact-me"];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: "#hero", label: "Home", icon: HomeIcon },
    { to: "#about-me", label: "About", icon: UserIcon },
    { to: "#technologies", label: "Skills", icon: CodeBracketIcon },
    { to: "#projects", label: "Projects", icon: BriefcaseIcon },
    { to: "#contact-me", label: "Contact", icon: EnvelopeIcon },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand - Empty space for balance */}
            <div className="flex-shrink-0 w-20">
              {/* Empty space for visual balance */}
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.to.slice(1);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-black bg-gray-200"
                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Social Links & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="https://github.com/WimukthiMadushan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.to.slice(1);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth
                    onClick={closeMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "text-black bg-gray-200 border-l-4 border-black"
                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-4 mt-4 border-t border-gray-200">
                <a
                  href="https://github.com/WimukthiMadushan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Floating Navigation Indicator (Optional) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-3">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.to.slice(1);
            return (
              <Link
                key={item.to}
                to={item.to}
                smooth
                className={`block w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                  isActive
                    ? "bg-black scale-125"
                    : "bg-gray-400 hover:bg-black"
                }`}
                title={item.label}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
