import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Technologies from "./Components/Technologies/Technologies";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
