import React from "react";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="w-full max-w-5xl mx-auto py-14 md:py-18 lg:py-22 bg-gray-100 rounded-xl shadow-lg"
    >
      <div className=" grid gap-10 px-8 md:px-10 lg:px-12">
        <div className="grid gap-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 transition-transform transform hover:scale-105 hover:text-gray-800">
            About Me
          </h2>
          <p className="text-lg text-gray-700">
            Hi, I'm a Computer Science and Engineering student at the University
            of Moratuwa. I'm passionate about becoming a software engineer and
            excited to gain practical experience as an intern. I have a strong
            interest in full-stack web development and love working on projects
            that bring ideas to life. I'm also keep on learning how to design
            and build software that is easy to use and reliable. I'm eager to
            grow my skills and contribute to real-world software projects.
          </p>
        </div>
        <div className="grid gap-6">
          <h3 className="text-2xl font-semibold text-gray-800 transition-transform transform hover:scale-105 hover:text-gray-700">
            My Goals
          </h3>
          <p className="text-lg text-gray-700">
            As a Computer Science and Engineering student, my goal is to gain
            practical experience as a software engineer intern. I'm excited to
            apply my knowledge to real-world projects and learn from experienced
            professionals in the field. My vision is to become a skilled and
            versatile software engineer who can contribute to innovative and
            impactful projects. I'm committed to continuously learning and
            improving my skills to achieve this goal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
