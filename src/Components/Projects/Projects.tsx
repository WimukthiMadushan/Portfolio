
import { Github as GithubIcon } from 'lucide-react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import Sanchaara from "./../../Images/Sanchaara.jpg";
import CatDog from "./../../Images/CatDog.png"
import AWS from "./../../Images/AWS.jpg"
import Netflix from "./../../Images/Netflix.jpg"
import ZTN from "./../../Images/ZTN.png"
import NPD from "./../../Images/NPD.png"
import RPAL from "./../../Images/RPAL.png";
import ARS from "./../../Images/ARS.png";
import ElaphantCare from "./../../Images/ElephantCare.png";
import ARA from "./../../Images/Asgardio.png";

const allProjects = [
  {
    title: "Potato Disease Classification Using CNN",
    description: "Developed a deep learning pipeline using TensorFlow CNN to identify and classify potato leaf diseases. Built a Flask/FastAPI backend to serve model predictions with a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=600&fit=crop",
    technologies: ["Python", "Flask", "FastAPI", "TensorFlow", "CNN", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/WimukthiMadushan/Deep-learning-project-Potato-Disease-Classification-Using-CNN.git"
  },
  {
    title: "Sanchaara – Travel Companion",
    description: "Backend-focused microservices architecture for a travel task-management app. Built with Spring Boot, Kafka-powered real-time communication, and Dockerized deployment for cloud readiness.",
    image: Sanchaara,
    technologies: ["Java", "Spring Boot", "Flutter", "Kafka", "Docker", "MongoDB", "PostgreSQL"],
    githubUrl: "https://github.com/WimukthiMadushan/Sanchara-Backend.git"
  },
  {
    title: "Interactive Library Management System (Web & Mobile)",
    description: "A full-stack library management solution with React web UI, React Native mobile app, and Node.js/Express backend for book checkouts, user management, and search features.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
    technologies: ["React.js", "React Native", "Node.js", "Express", "MySQL", "Expo", "CSS3"],
    githubUrl: "https://github.com/WimukthiMadushan/Interactive-library-management-system.git"
  },
  {
    title: "Deep Learning Image Classifier",
    description: "Created a CNN-powered image classifier using TensorFlow and Keras to categorize Cats and Dogs. Built a Next js interface and integrated it with Flask Pandas/OpenCV for preprocessing and analytics.",
    image: CatDog,
    technologies: ["Python", "Flask", "TensorFlow", "Keras", "Pandas", "OpenCV"],
    githubUrl: "https://github.com/WimukthiMadushan/Image-Classifier-CNN.git"
  },
  {
    title: "Microservice Deployment on AWS with CI/CD",
    description: "Deployed Java Spring Boot microservices on AWS EC2 with RDS backend, Dockerized each service, and implemented CI/CD via GitHub Actions for automated testing and deployment.",
    image: AWS,
    technologies: ["Java", "Spring Boot", "Docker", "AWS EC2", "AWS RDS", "MySQL", "GitHub Actions"],
    githubUrl: "https://github.com/WimukthiMadushan/Complete-FullStack-Deployment.git"
  },
  {
    title: "Netflix Clone with Firebase Authentication",
    description: "Built a Netflix-style web app with React, featuring user signup/login via Firebase Authentication and dynamic show browsing UI powered by TMDb API.",
    image: Netflix,
    technologies: ["React", "Firebase Authentication"],
    githubUrl: "https://github.com/WimukthiMadushan/Netflix-Clone.git"
  },
  {
    title: "Zero Trust Network Frontend",
    description: "A web-based Zero Trust Network Access (ZTNA) solution built with Next js and Firebase Authentication. It provides secure access to applications and resources without traditional VPNs",
    image: ZTN,
    technologies: ["Next Js", "Tailwind CSS", "TypeScript", "Radix UI", "Firebase Authentication"],
    githubUrl: "https://github.com/WimukthiMadushan/Zero_Trust_Network.git"
  },
  {
    title: "Elaphant Care Frontend",
    description: "A web-based elephant care management system built with React and Firebase. It provides features for managing and caring for elephants.",
    image: ElaphantCare,
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/WimukthiMadushan/Elephant-care.git" 
  },
  {
    title: "Asgardeo Authentication",
    description: "A web-based authentication system built with React and Asgardeo. It provides secure user authentication and authorization for web applications.",
    image: ARA,
    technologies: ["React", "Asgardeo", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/WimukthiMadushan/Asgardeo-react-authentication.git"
  },
  {
    title: "Airline Reservation System",
    description: "Semester 3 Database Management System project. Contains a Web application. Based on the MySQL database. It allows users to search for flights, book tickets, and manage reservations.",
    image: ARS,
    technologies: ["React", "Flask", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/WimukthiMadushan/Airline_Reservation_System.git"
  },
  {
    title: "Nano Processor Design",
    description: "Second semester Computer Organization and Digital Design Course project. Designing a 4-bit nano processor.With apable of performing operations such as addition, subtraction, left shift, right shift, and negation.",
    image: NPD,
    technologies: ["Xilinx Vivado", "Digital Design"],
    githubUrl: "https://github.com/WimukthiMadushan/Computer-Organization-and-Digital-Design.git"
  },
  {
    title: "RPAL Interpreter",
    description: "An interpreter for RPAL Programming Lanuage, consisting of a lexical analyzer, parser, and a CSE machine. Evaluate RPAL Program by Constructing Parse Tree and then Evaluating the Parse Tree using CSE Machine.",
    image: RPAL,
    technologies: ["C++"],
    githubUrl: "https://github.com/WimukthiMadushan/Programming-Languages.git"
  }
];


const ProjectsSection = () => {

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section id="projects" className="py-10 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto mb-6 rounded-full animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Explore my latest work and projects that showcase my passion for creating innovative, 
            user-friendly solutions with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              View More Projects
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/WimukthiMadushan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in"
            style={{ animationDelay: '1.2s' }}
          >
            <GithubIcon className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;