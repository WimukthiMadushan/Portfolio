import React from "react";
import "./../Styles/AboutMe.css";
import About from "./../Images/about.jpg";
function AboutMe() {
  return (
    <div className="about-me-container" id="about">
      <div className="about-me-img">
        <img className="about-me-img" src={About} alt="" />
      </div>
      <div className="about-me-description">
        <h1 className="about-me-title">About Me.</h1>
        <p className="about-me-description">
          Hello! I'm W.G Wimukthi Madushan Bandara, a passionate and dedicated
          full-stack web developer currently studying at the Department of
          Computer Science and Engineering, Faculty of Engineering, University
          of Moratuwa. With a strong foundation in both front-end and back-end
          technologies, I enjoy creating seamless, efficient, and user-friendly
          web applications.
        </p>
        <h3 className="about-me-sub-topics">Education</h3>
        <ul>
          <li>
            <strong>Bachelor of Science in Engineering</strong>
            <ul>
              <li>Computer Science and Engineering</li>
              <li>University of Moratuwa</li>
              <li>Expected Graduation: 2026</li>
              <br />
            </ul>
          </li>
        </ul>

        <h3 className="about-me-sub-topics">Technical Skills</h3>
        <ul>
          <li>
            <strong>Front-End Development</strong>: HTML, CSS, JavaScript,
            React, Angular, Vue.js, Next.js
          </li>
          <li>
            <strong>Back-End Development</strong>: Node.js, Express.js,
            Springboot, Django, Flask
          </li>
          <li>
            <strong>Database Management</strong>: MySQL, MongoDB, SQLite
          </li>
          <li>
            <strong>Version Control</strong>: Git, GitHub
          </li>
          <li>
            <strong>Cloud Platforms</strong>: AWS (EC2, S3, Lambda), Google
            Cloud Platform, Firebase
          </li>
          <li>
            <strong>DevOps</strong>: Docker, Jenkins, CI/CD Pipelines
          </li>
          <li>
            <strong>Software Engineering Principles</strong>: Object-Oriented
            Programming (OOP), Design Patterns, Agile Methodologies, Test-Driven
            Development (TDD)
          </li>
          <li>
            <strong>Networking</strong>: TCP/IP, DNS, HTTP/HTTPS, SSL/TLS
          </li>
          <li>
            <strong>Security</strong>: Authentication & Authorization (OAuth,
            JWT), Web Security Best Practices
          </li>
          <br />
        </ul>
        <h3 className="about-me-sub-topics">Personal Attributes</h3>
        <ul>
          <li>
            <strong>Problem Solver</strong>: Enjoy tackling complex challenges
            and finding innovative solutions.
          </li>
          <li>
            <strong>Team Player</strong>: Excellent collaboration skills with a
            knack for working effectively in team environments.
          </li>
          <li>
            <strong>Continuous Learner</strong>: Always eager to learn new
            technologies and improve my skill set.
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
