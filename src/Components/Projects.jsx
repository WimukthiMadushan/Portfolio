import React from "react";
import "./../Styles/Projects.css";
import Card from "./Card";
function Projects() {
  const details = [
    {
      title: "Airline Reservation System",
      description: "Description 1",
      link: "https://github.com/WimukthiMadushan/Airline_Reservation_System",
    },
    {
      title: "Full Stack Blog App Design",
      description: "Description 2",
      link: "https://github.com/WimukthiMadushan/Blog_App",
    },
    {
      title: "Book Shop for CRUD operations",
      description: "Description 3",
      link: "https://github.com/WimukthiMadushan/Book_Shop",
    },
    {
      title: "Portfolio Website Design",
      description: "Description 4",
      link: "https://github.com/WimukthiMadushan/Portfolio",
    },
    {
      title: "Meta Advanced react project",
      description: "Description 5",
      link: "https://github.com/WimukthiMadushan/meta-advanced-react-project",
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
