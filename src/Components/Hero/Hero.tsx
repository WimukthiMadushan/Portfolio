import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Typing from "react-typing-effect";
import Profile from "./../../Images/my.jpg";
import CV from "./../../PDF/CV.pdf";
import {
  FaMedium,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaRocket,
} from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./Hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden flex items-center"
    >
      {/* Modern geometric backgrounds */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-300 rounded-full opacity-15 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-black/5 rounded-full animate-pulse delay-500" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-[8rem] pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Hi, I'm <br />
                <span className="relative inline-block text-3xl lg:text-5xl">
                  <Typing
                    text={["Wimukthi", "a Developer", "an Engineer"]}
                    speed={150}
                    eraseSpeed={100}
                    typingDelay={500}
                    eraseDelay={2000}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600"
                  />
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-600 rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Computer Science Undergraduate & Full-Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Passionate Computer Science and Engineering student from the
              University of Moratuwa. Recently completed an internship as a
              Software Engineer at Scienter Technologies. I love building
              innovative solutions and exploring cutting-edge technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="#projects"
                smooth
                className="group inline-flex items-center px-5 py-2.5 text-sm bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <FaRocket className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View Projects
              </Link>

              <a
                href={CV}
                download="CV.pdf"
                className="group inline-flex items-center px-5 py-2.5 text-sm bg-white text-black border border-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <FaDownload className="mr-2 group-hover:bounce transition-transform duration-300" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 font-medium">Follow me:</span>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/WimukthiMadushan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://medium.com/@wimukthibandara928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaMedium className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image & Visual Elements */}
          <div
            className={`relative lg:flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[3rem] transform -rotate-3 opacity-15"></div>

            {/* Main profile container */}
            <div className="relative z-10 text-center">
              {/* Profile Image */}
              <div className="relative mx-auto mb-8">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-[3rem] bg-gradient-to-br from-gray-200 to-gray-300 p-2 shadow-2xl">
                  <img
                    src={Profile}
                    alt="Wimukthi Madushan"
                    className="w-full h-full rounded-[2.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Floating elements around image */}
                <div className="absolute -top-6 -right-6 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-200 animate-bounce">
                  <span className="text-sm font-bold text-blue-600">
                    Python
                  </span>
                </div>

                <div className="absolute -top-2 -left-8 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-200 animate-pulse">
                  <span className="text-sm font-bold text-orange-600">
                    Java
                  </span>
                </div>

                <div className="absolute top-20 -right-10 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-200 animate-float">
                  <span className="text-sm font-bold text-green-600">
                    Node.js
                  </span>
                </div>

                <div className="absolute -bottom-6 -right-8 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-200 animate-float-delay">
                  <span className="text-sm font-bold text-cyan-600">React</span>
                </div>

                <div className="absolute -bottom-2 -left-10 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-200 animate-bounce delay-500">
                  <span className="text-sm font-bold text-black">Next.js</span>
                </div>
              </div>

              {/* Skill badges floating around */}
              <div className="hidden lg:block">
                <div className="absolute top-10 -left-8 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 animate-float">
                  <span className="text-sm font-semibold text-gray-700">
                    TypeScript
                  </span>
                </div>
                <div className="absolute top-32 -right-12 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 animate-float-delay">
                  <span className="text-sm font-semibold text-gray-700">
                    MongoDB
                  </span>
                </div>
                <div className="absolute bottom-32 -left-16 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 animate-float">
                  <span className="text-sm font-semibold text-gray-700">
                    Express
                  </span>
                </div>
                <div className="absolute bottom-10 -right-8 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 animate-float-delay">
                  <span className="text-sm font-semibold text-gray-700">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
          >
            <ChevronDownIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
