import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Typing from "react-typing-effect";
import Profile from "./../../Images/my.jpg";
import CV from "./../../PDF/CV.pdf";

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/80" />
      <div className="relative flex items-center justify-center w-full h-full px-4 md:px-6 text-center text-primary-foreground">
        {/* Content Container */}
        <div className="text-center">
          {/* Image Container */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full border-1 border-black p-1">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              I'm{" "}
              <Typing
                text={["Wimukthi Madushan.."]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1000}
              />
            </h1>
            <p className="text-lg md:text-xl max-w-[600px] mx-auto mt-4 text-muted-foreground">
              Software Engineer | Full-Stack Developer
            </p>
            <p className="mt-6 max-w-[700px] mx-auto text-muted-foreground">
              Third-year Computer Science and Engineering student at the
              University of Moratuwa, specializing in software engineering, web,
              and mobile app development.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="#projects"
                smooth
                className="inline-flex h-10 items-center justify-center rounded-md border border-black bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform transform duration-300 ease-in-out hover:bg-primary/90  hover:border-white hover:font-bold hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Projects
              </Link>
              <a
                href={CV}
                download="CV.pdf"
                className="inline-flex h-10 items-center justify-center rounded-md border border-black bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform transform duration-300 ease-in-out hover:bg-primary/90 hover:border-white hover:font-bold hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
