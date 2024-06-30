import React from "react";
import "./../Styles/Projects.css";
import Card from "./Card";
function Projects() {
  const details = [
    {
      title: "Airline Reservation System",
      description:
        "Created an Airline Reservation System using React, Flask, and MySQL. This app lets users search for flights, book tickets, and manage reservations easily. React handles the front-end, Flask manages the back-end, and MySQL stores the data securely.",
      link: "https://github.com/WimukthiMadushan/Airline_Reservation_System",
    },
    {
      title: "Full Stack Blog App Design",
      description:
        "Designed a full-stack blog application using the MERN stack for practice. This project involved creating a RESTful API with Node.js and Express.js for the backend, MongoDB as the database, and React.js for building a dynamic and interactive front-end.",
      link: "https://github.com/WimukthiMadushan/Blog_App",
    },
    {
      title: "Food Delivery Web-Application",
      description:
        "Comprehensive food delivery web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project refined my skills in full-stack development, integrating responsive front-end interfaces with a robust backend, and efficient database handling",
      link: "https://github.com/WimukthiMadushan/Food-Delivery.git",
    },
    {
      title: "Portfolio Website Design",
      description:
        "Created a responsive portfolio website to showcase personal projects, skills, and experience. The site features a modern design with smooth navigation, built using React js. This project demonstrates my web design creativity and front-end development skills.",
      link: "https://github.com/WimukthiMadushan/Portfolio",
    },
    {
      title: "Meta Advanced react project",
      description:
        "This is a project that I have done to practice my react skills. This project is a simple react project that uses react hooks and context API.",
      link: "https://github.com/WimukthiMadushan/meta-advanced-react-project",
    },
    {
      title: "Interactive Library Managment System",
      description:
        "This is my semester 5 project done using React, Node js, express and mySql database.",
      link: "https://github.com/WimukthiMadushan/Interactive-library-management-system-.git",
    },
  ];
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title">Projects.</h1>
      <div className="card-container">
        {details.map((details) => (
          <Card
            key={details.title}
            title={details.title}
            description={details.description}
            link={details.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
