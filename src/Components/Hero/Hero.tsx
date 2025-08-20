import { HashLink as Link } from "react-router-hash-link";
import Typing from "react-typing-effect";
import Profile from "./../../Images/my.jpg";
import CV from "./../../PDF/CV.pdf";
import { FaMedium } from "react-icons/fa"; // Medium icon

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Black shadow/glow ball */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-black/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-black/30 blur-2xl animate-pulse" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/80" />

      {/* Content */}
      <div className="relative flex items-center justify-center w-full h-full px-4 md:px-6 text-center text-primary-foreground">
        <div className="text-center z-10">
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

          {/* Text */}
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
              Computer Science Undergraduate | Full-Stack Developer
            </p>
            <p className="mt-6 max-w-[700px] mx-auto text-muted-foreground text-[1rem] leading-relaxed">
              I'm a passionate Computer Science and Engineering undergraduate
              from the University of Moratuwa, recently completed my internship
              as a Software Engineer at Scienter Technologies (Pvt) Ltd. With a
              strong foundation in full-stack development.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link
                to="#projects"
                smooth
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-black bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-transform transform duration-300 ease-in-out hover:bg-primary/90 hover:border-white hover:font-bold hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                🚀 View Projects
              </Link>

              <a
                href={CV}
                download="CV.pdf"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-black bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-transform transform duration-300 ease-in-out hover:bg-primary/90 hover:border-white hover:font-bold hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                📄 Download CV
              </a>

              <a
                href="https://medium.com/@wimukthibandara928"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-black bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-transform transform duration-300 ease-in-out hover:bg-primary/90 hover:border-white hover:font-bold hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <FaMedium className="text-xl" />
                My Medium Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
