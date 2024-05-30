import React from "react";
import Cloud from "./../Images/Cloud.png";
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
        <h1 className="hero-title">Full Stack Developer.</h1>
        <h2 className="hero-description">
          I am a passionate full stack developer with a knack for crafting
          robust and scalable web applications. With 5 years of hands-on
          experience, I have honed my skills in front-end technologies like
          React and Next.js, as well as back-end technologies like Node.js,
          MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to
          create innovative solutions that drive business growth and deliver
          exceptional user experiences.
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
