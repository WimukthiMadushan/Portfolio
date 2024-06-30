import React from "react";
import Person from "./../Images/Person.png";
import "./../Styles/Hero.css";
import SideBar from "./SideBar";
function HeroSection() {
  return (
    <div className="hero-container" id="home">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Full Stack Developer..</h1>
        <h2 className="hero-description">
          I am a passionate full stack web developer currently pursuing my
          studies at the University of Moratuwa's CSE department. With a strong
          foundation in both front-end and back-end technologies, I am dedicated
          to building efficient and innovative web solutions. My education and
          hands-on experience enable me to tackle complex development challenges
          and contribute effectively to dynamic projects.
        </h2>
        <div className="hero-button-container">
          <button className="hero-button">Download CV</button>
        </div>
      </div>
      <img className="person-img" src={Person} alt="" />
    </div>
  );
}

export default HeroSection;
