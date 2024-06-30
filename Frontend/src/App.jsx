import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import ContactMe from "./Components/ContactMe";
import Technologies from "./Components/Technologies";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import SideBar from "./Components/SideBar";
import Certificates from "./Components/Certificates";

function App() {
  return (
    <>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-repeat-y"></div>
      </div>
      <div>
        <div>
          <NavBar />
          <HeroSection />

          <Technologies />
          <AboutMe />
          <Projects />
          <Certificates />
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
