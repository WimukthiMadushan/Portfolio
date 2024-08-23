import { Link } from "react-router-dom";
import { FaReact, FaNode } from "react-icons/fa";
import { SiExpress, SiMysql, SiExpo, SiFlask } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import ILMS from "./../../Images/ILMS.png";
import RPAL from "./../../Images/RPAL.png";
import ARS from "./../../Images/ARS.png";
import NPD from "./../../Images/NPD.png";
import AITP from "./../../Images/AITP.png";
import vivado from "./../../Images/Vivado.png";

function Projects() {
  const iconSize = "h-8 w-8";

  const projects = [
    {
      id: 1,
      name: "Library Management System",
      image: ILMS,
      description:
        "Semester five project for the course of Software Engineering. Still ongoing project and will be completed by the end of the semester. Contains Web and mobile application for efficient book management and user interaction.",
      link: "https://github.com/WimukthiMadushan/Interactive-library-management-system-.git",
      technologies: [
        <FaReact className={iconSize} />,
        <FaNode className={iconSize} />,
        <SiExpress className={iconSize} />,
        <SiMysql className={iconSize} />,
        <TbBrandReactNative className={iconSize} />,
      ],
    },
    {
      id: 2,
      name: "AI Travel Planner App",
      image: AITP,
      description:
        "AI-based travel planner app. Still ongoing project. Building with React Native, Expo, and Firebase authentication.The app provides detailed information on places, costs, and personalized recommendations based on the number of travelers (family, alone, or couples).",
      link: "https://github.com/WimukthiMadushan/AI-Travel-Planner-App.git",
      technologies: [
        <TbBrandReactNative className={iconSize} />,
        <RiFirebaseFill className={iconSize} />,
        <SiExpo className={iconSize} />,
      ],
    },
    {
      id: 3,
      name: "RPAL Interpreter",
      image: RPAL,
      description:
        "An interpreter for RPAL Programming Lanuage, consisting of a lexical analyzer, parser, and a CSE machine. Evaluate RPAL Program by Constructing Parse Tree and then Evaluating the Parse Tree using CSE Machine.",
      link: "https://github.com/WimukthiMadushan/Programming-Languages.git",
      technologies: [<TbBrandCpp className={iconSize} />],
    },
    {
      id: 4,
      name: "Airline Reservation System",
      image: ARS,
      description:
        "Semester 3 Database Management System project. Contains a Web application. Based on the MySQL database.",
      link: "https://github.com/WimukthiMadushan/Airline_Reservation_System.git",
      technologies: [
        <FaReact className={iconSize} />,
        <SiFlask className={iconSize} />,
        <SiMysql className={iconSize} />,
      ],
    },
    {
      id: 5,
      name: "Nano Processor Design",
      image: NPD,
      description:
        "Second semester Computer Organization and Digital Design Course project. Designing a 4-bit nano processor.With apable of performing operations such as addition, subtraction, left shift, right shift, and negation.",
      link: "https://github.com/WimukthiMadushan/Computer-Organization-and-Digital-Design.git",
      technologies: [<img src={vivado} alt="Vivado" className={iconSize} />],
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
      id="projects"
    >
      <div className="container mx-auto grid gap-8 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 md:text-xl lg:text-base xl:text-xl">
            Check out some of the projects I've worked on. Each one showcases my
            skills and creativity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt="Project Thumbnail"
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.name}
                </h3>
                <p className="text-[1rem] text-gray-600">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="text-blue-500 hover:text-black hover:underline"
                  target="_blank"
                >
                  View On Github
                </Link>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  {project.technologies.map((tech, index) => (
                    <div key={index}>{tech}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
