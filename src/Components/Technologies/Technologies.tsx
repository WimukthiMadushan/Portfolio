import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaGitAlt,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDocker,
  SiFlask,
  SiFastapi,
  SiTensorflow,
  SiPostgresql,
  SiAngular,
  SiPytorch,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiOpencv,
} from "react-icons/si";
import {
  CodeBracketIcon,
  CpuChipIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

function Technologies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const techCategories = [
    {
      id: "all",
      name: "All Technologies",
      icon: CodeBracketIcon,
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: CodeBracketIcon,
    },
    {
      id: "backend",
      name: "Backend",
      icon: CpuChipIcon,
    },
    {
      id: "database",
      name: "Database",
      icon: CircleStackIcon,
    },
    {
      id: "ai",
      name: "AI & ML",
      icon: FaBrain,
    },
    {
      id: "tools",
      name: "DevOps & Tools",
      icon: CloudIcon,
    },
  ];

  const technologies = [
    // Frontend
    {
      name: "React",
      icon: FaReact,
      category: "frontend",
      color: "text-blue-400",
      level: 90,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "frontend",
      color: "text-black",
      level: 85,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "frontend",
      color: "text-blue-600",
      level: 80,
    },
    {
      name: "JavaScript",
      icon: FaJs,
      category: "frontend",
      color: "text-yellow-500",
      level: 95,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "frontend",
      color: "text-cyan-500",
      level: 90,
    },
    {
      name: "Angular",
      icon: SiAngular,
      category: "frontend",
      color: "text-red-600",
      level: 75,
    },

    // Backend
    {
      name: "Node.js",
      icon: FaNodeJs,
      category: "backend",
      color: "text-green-500",
      level: 88,
    },
    {
      name: "Express.js",
      icon: SiExpress,
      category: "backend",
      color: "text-gray-600",
      level: 85,
    },
    {
      name: "Python",
      icon: FaPython,
      category: "backend",
      color: "text-blue-500",
      level: 92,
    },
    {
      name: "Java",
      icon: FaJava,
      category: "backend",
      color: "text-orange-600",
      level: 80,
    },
    {
      name: "Flask",
      icon: SiFlask,
      category: "backend",
      color: "text-black",
      level: 85,
    },
    {
      name: "FastAPI",
      icon: SiFastapi,
      category: "backend",
      color: "text-green-600",
      level: 80,
    },

    // Database
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "database",
      color: "text-green-500",
      level: 85,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      category: "database",
      color: "text-blue-600",
      level: 80,
    },
    {
      name: "MySQL",
      icon: SiMysql,
      category: "database",
      color: "text-blue-500",
      level: 85,
    },

    // AI & ML
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      category: "ai",
      color: "text-orange-500",
      level: 85,
    },
    {
      name: "PyTorch",
      icon: SiPytorch,
      category: "ai",
      color: "text-red-500",
      level: 80,
    },
    {
      name: "Keras",
      icon: SiKeras,
      category: "ai",
      color: "text-red-600",
      level: 85,
    },
    {
      name: "NumPy",
      icon: SiNumpy,
      category: "ai",
      color: "text-blue-400",
      level: 90,
    },
    {
      name: "Pandas",
      icon: SiPandas,
      category: "ai",
      color: "text-purple-600",
      level: 88,
    },
    {
      name: "Jupyter",
      icon: SiJupyter,
      category: "ai",
      color: "text-orange-400",
      level: 85,
    },
    {
      name: "OpenCV",
      icon: SiOpencv,
      category: "ai",
      color: "text-green-600",
      level: 75,
    },

    // Tools
    {
      name: "Git",
      icon: FaGitAlt,
      category: "tools",
      color: "text-orange-500",
      level: 90,
    },
    {
      name: "Docker",
      icon: SiDocker,
      category: "tools",
      color: "text-blue-500",
      level: 75,
    },
  ];

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section id="technologies" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Technologies & Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern tools and technologies I use to build exceptional digital
            experiences
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {techCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Technologies Showcase */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          {/* Featured Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              {activeCategory === "all"
                ? "Core Technologies"
                : techCategories.find((cat) => cat.id === activeCategory)?.name}
            </h3>

            {/* Large Tech Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {filteredTechnologies.slice(0, 6).map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group relative bg-gray-50 hover:bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <IconComponent
                          className={`w-7 h-7 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      <h4 className="font-medium text-gray-900 text-sm group-hover:text-black transition-colors duration-300">
                        {tech.name}
                      </h4>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                );
              })}
            </div>

            {/* Additional Technologies */}
            {filteredTechnologies.length > 6 && (
              <div>
                <div className="flex flex-wrap justify-center gap-3">
                  {filteredTechnologies.slice(6).map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="group flex items-center gap-2 bg-gray-100 hover:bg-white px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md border border-gray-200"
                      >
                        <IconComponent
                          className={`w-4 h-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Always learning and exploring new technologies to stay at the
            cutting edge
          </p>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
