import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  BriefcaseIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Sanchaara from "./../../Images/Sanchaara.jpg";
import CatDog from "./../../Images/CatDog.png";
import AWS from "./../../Images/AWS.jpg";
import Netflix from "./../../Images/Netflix.jpg";
import ZTN from "./../../Images/ZTN.png";
import NPD from "./../../Images/NPD.png";
import RPAL from "./../../Images/RPAL.png";
import ARS from "./../../Images/ARS.png";
import ElephantCare from "./../../Images/ElephantCare.png";
import ARA from "./../../Images/Asgardio.png";

const allProjects = [
  {
    title: "Final Year Research Project",
    description:
      "Advanced AI/ML research project developing cutting-edge machine learning solutions. Focusing on innovative applications of deep learning, computer vision, and natural language processing technologies for real-world problem solving.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: [
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "TensorFlow",
      "PyTorch",
      "Research & Innovation",
    ],
    githubUrl: "#", // Will be updated when research is complete
    category: "ai",
    featured: true,
    isResearch: true,
    status: "In Progress",
    duration: "2024-2025",
  },
  {
    title: "JobAlign.AI Mobile Application",
    description:
      "Building a React Native mobile application that calculates the similarity score between a candidate’s CV and job description. Integrating a RAG-based chatbot for companies to query CVs",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: [
      "React Native",
      "TypeScript",
      "Clerk",
      "FastAPI",
      "Clerk",
      "FastAPI",
      "MongoDB",
      "Hugging Face",
      "RAG",
      "SMTP",
      "Expo",
      "Docker",
    ],
    githubUrl: "https://github.com/JobAlign-AI",
    category: "ai",
    featured: true,
  },
  {
    title: "Potato Disease Classification Using CNN",
    description:
      "Developed a deep learning pipeline using TensorFlow CNN to identify and classify potato leaf diseases. Built a Flask/FastAPI backend to serve model predictions with a user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=600&fit=crop",
    technologies: [
      "Python",
      "Flask",
      "FastAPI",
      "TensorFlow",
      "CNN",
      "NumPy",
      "Matplotlib",
    ],
    githubUrl:
      "https://github.com/WimukthiMadushan/Deep-learning-project-Potato-Disease-Classification-Using-CNN.git",
    category: "ai",
    featured: true,
  },
  {
    title: "Deep Learning Image Classifier",
    description:
      "Created a CNN-powered image classifier using TensorFlow and Keras to categorize Cats and Dogs. Built a Next.js interface and integrated it with Flask for preprocessing and analytics.",
    image: CatDog,
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "Pandas",
      "OpenCV",
    ],
    githubUrl: "https://github.com/WimukthiMadushan/Image-Classifier-CNN.git",
    category: "ai",
    featured: true,
  },
  {
    title: "Sanchaara – Travel Companion",
    description:
      "Backend-focused microservices architecture for a travel task-management app. Built with Spring Boot, Kafka-powered real-time communication, and Dockerized deployment for cloud readiness.",
    image: Sanchaara,
    technologies: [
      "Java",
      "Spring Boot",
      "Flutter",
      "Kafka",
      "Docker",
      "MongoDB",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/WimukthiMadushan/Sanchara-Backend.git",
    category: "fullstack",
    featured: true,
  },
  {
    title: "Interactive Library Management System",
    description:
      "A full-stack library management solution with React web UI, React Native mobile app, and Node.js/Express backend for book checkouts, user management, and search features.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "Express",
      "MySQL",
      "Expo",
      "CSS3",
    ],
    githubUrl:
      "https://github.com/WimukthiMadushan/Interactive-library-management-system.git",
    category: "fullstack",
    featured: true,
  },
  {
    title: "Microservice Deployment on AWS with CI/CD",
    description:
      "Deployed Java Spring Boot microservices on AWS EC2 with RDS backend, Dockerized each service, and implemented CI/CD via GitHub Actions for automated testing and deployment.",
    image: AWS,
    technologies: [
      "Java",
      "Spring Boot",
      "Docker",
      "AWS EC2",
      "AWS RDS",
      "MySQL",
      "GitHub Actions",
    ],
    githubUrl:
      "https://github.com/WimukthiMadushan/Complete-FullStack-Deployment.git",
    category: "cloud",
    featured: false,
  },
  {
    title: "Netflix Clone with Firebase Authentication",
    description:
      "Built a Netflix-style web app with React, featuring user signup/login via Firebase Authentication and dynamic show browsing UI powered by TMDb API.",
    image: Netflix,
    technologies: ["React", "Firebase Authentication"],
    githubUrl: "https://github.com/WimukthiMadushan/Netflix-Clone.git",
    category: "web",
    featured: false,
  },
  {
    title: "Zero Trust Network Frontend",
    description:
      "A web-based Zero Trust Network Access (ZTNA) solution built with Next.js and Firebase Authentication. It provides secure access to applications and resources without traditional VPNs.",
    image: ZTN,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Radix UI",
      "Firebase Authentication",
    ],
    githubUrl: "https://github.com/WimukthiMadushan/Zero_Trust_Network.git",
    category: "web",
    featured: false,
  },
  {
    title: "Elephant Care Management",
    description:
      "A web-based elephant care management system built with React and Firebase. It provides features for managing and caring for elephants with real-time updates.",
    image: ElephantCare,
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/WimukthiMadushan/Elephant-care.git",
    category: "web",
    featured: false,
  },
  {
    title: "Asgardeo Authentication",
    description:
      "A web-based authentication system built with React and Asgardeo. It provides secure user authentication and authorization for web applications.",
    image: ARA,
    technologies: ["React", "Asgardeo", "Tailwind CSS", "TypeScript"],
    githubUrl:
      "https://github.com/WimukthiMadushan/Asgardeo-react-authentication.git",
    category: "web",
    featured: false,
  },
  {
    title: "Airline Reservation System",
    description:
      "Full-stack airline reservation system with React frontend and Flask backend. Features flight search, booking management, and user authentication with MySQL database.",
    image: ARS,
    technologies: ["React", "Flask", "MySQL", "HTML", "CSS"],
    githubUrl:
      "https://github.com/WimukthiMadushan/Airline_Reservation_System.git",
    category: "fullstack",
    featured: false,
  },
  {
    title: "Nano Processor Design",
    description:
      "Hardware design project creating a 4-bit nano processor capable of performing arithmetic and logical operations including addition, subtraction, and bit shifting.",
    image: NPD,
    technologies: ["Xilinx Vivado", "Digital Design"],
    githubUrl:
      "https://github.com/WimukthiMadushan/Computer-Organization-and-Digital-Design.git",
    category: "systems",
    featured: false,
  },
  {
    title: "RPAL Interpreter",
    description:
      "A complete interpreter for the RPAL programming language, featuring lexical analysis, parsing, and a CSE machine for program evaluation through parse tree construction.",
    image: RPAL,
    technologies: ["C++"],
    githubUrl: "https://github.com/WimukthiMadushan/Programming-Languages.git",
    category: "systems",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: BriefcaseIcon },
  { id: "ai", label: "AI & ML", icon: CpuChipIcon },
  { id: "fullstack", label: "Full Stack", icon: CodeBracketIcon },
  { id: "web", label: "Web Development", icon: GlobeAltIcon },
  { id: "cloud", label: "Cloud & DevOps", icon: CloudIcon },
  { id: "systems", label: "Systems", icon: DevicePhoneMobileIcon },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const ProjectCard = ({ project }: { project: (typeof allProjects)[0] }) => {
    // Special full-width styling for research project
    if (project.isResearch) {
      return (
        <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-800">
          {/* Abstract Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
          </div>

          <div className="relative z-10 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/30">
                  Final Year Research
                </span>
                <span className="px-4 py-1.5 bg-green-500/20 text-green-300 text-xs font-bold uppercase tracking-wider rounded-full border border-green-500/30">
                  {project.status}
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="pt-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium rounded-lg border border-white/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Duration</div>
                  <div className="text-white font-medium">
                    {project.duration}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Domain</div>
                  <div className="text-white font-medium">
                    AI & Machine Learning
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                    Publication in progress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Regular project card styling - Modern & Clean with Images
    return (
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating GitHub Button */}
          {project.githubUrl !== "#" && (
            <div className="absolute top-3 right-3 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-gray-900 shadow-lg block"
                title="View Code"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-50">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2.5 py-1 bg-gray-50 text-gray-400 text-xs font-medium rounded-full border border-gray-100">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my work in AI, Full Stack Development, and Cloud
            Architecture
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white border-gray-900 shadow-lg transform scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Final Year Research Project - Full Width */}
        {displayedProjects.find((p) => p.isResearch) && (
          <div className="mb-16">
            <ProjectCard
              project={displayedProjects.find((p) => p.isResearch)!}
            />
          </div>
        )}

        {/* Other Projects Grid */}
        {displayedProjects.filter((p) => !p.isResearch).length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects
              .filter((p) => !p.isResearch)
              .map((project, index) => (
                <ProjectCard
                  key={`${activeCategory}-${index}`}
                  project={project}
                />
              ))}
          </div>
        )}

        {/* View More/Less Buttons */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full border border-gray-200 hover:border-gray-900 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
            >
              {showAll
                ? "Show Less"
                : `View All ${filteredProjects.length} Projects`}
              <ArrowTopRightOnSquareIcon
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-20 pt-10 border-t border-gray-100">
          <a
            href="https://github.com/WimukthiMadushan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors duration-300 font-medium group"
          >
            <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="border-b border-transparent group-hover:border-gray-900 transition-all duration-300">
              View full project archive on GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
