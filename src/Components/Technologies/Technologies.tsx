import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaPython,
  FaJava,
  FaJs,
  FaCuttlefish,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiMysql,
  SiVisualstudiocode,
  SiDocker,
} from "react-icons/si";
import "./Technologies.css";

function Technologies() {
  return (
    <div
      id="technologies"
      className="flex w-full items-center justify-center min-h-screen bg-gray-50"
    >
      <section className="w-full md:py-20 lg:py-20">
        <div className="w-100% max-w-5xl mx-auto container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
              Technologies
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team leverages the latest tools and frameworks to build
              cutting-edge solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9">
            <div className="technology-item duration-1">
              <FaReact className="icon" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="technology-item duration-2">
              <SiNextdotjs className="icon" />
              <span className="text-sm font-medium">Next.js</span>
            </div>
            <div className="technology-item duration-3">
              <SiTailwindcss className="icon" />
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            <div className="technology-item duration-4">
              <SiTypescript className="icon" />
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="technology-item duration-5">
              <FaNodeJs className="icon" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="technology-item duration-6">
              <SiMongodb className="icon" />
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            <div className="technology-item duration-7">
              <SiExpress className="icon" />
              <span className="text-sm font-medium">Express.js</span>
            </div>
            <div className="technology-item duration-8">
              <FaCss3Alt className="icon" />
              <span className="text-sm font-medium">CSS3</span>
            </div>
            <div className="technology-item duration-9">
              <FaHtml5 className="icon" />
              <span className="text-sm font-medium">HTML5</span>
            </div>
            <div className="technology-item duration-10">
              <FaGitAlt className="icon" />
              <span className="text-sm font-medium">Git</span>
            </div>
            <div className="technology-item duration-11">
              <FaPython className="icon" />
              <span className="text-sm font-medium">Python</span>
            </div>
            <div className="technology-item duration-12">
              <FaJava className="icon" />
              <span className="text-sm font-medium">Java</span>
            </div>
            <div className="technology-item duration-13">
              <FaJs className="icon" />
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="technology-item duration-14">
              <FaCuttlefish className="icon" />
              <span className="text-sm font-medium">C</span>
            </div>
            <div className="technology-item duration-15">
              <SiCplusplus className="icon" />
              <span className="text-sm font-medium">C++</span>
            </div>
            <div className="technology-item duration-16">
              <SiMysql className="icon" />
              <span className="text-sm font-medium">MySQL</span>
            </div>
            <div className="technology-item duration-17">
              <SiVisualstudiocode className="icon" />
              <span className="text-sm font-medium">VS Code</span>
            </div>
            <div className="technology-item duration-18">
              <SiDocker className="icon" />
              <span className="text-sm font-medium">Docker</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technologies;
