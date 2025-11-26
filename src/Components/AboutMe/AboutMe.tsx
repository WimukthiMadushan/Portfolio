import { useState, useEffect } from "react";
import {
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-me");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: AcademicCapIcon,
      title: "University Student",
      description: "Computer Science & Engineering at University of Moratuwa",
    },
    {
      icon: BriefcaseIcon,
      title: "Professional Experience",
      description: "Internship completed at Scienter Technologies (Pvt) Ltd",
    },
    {
      icon: CodeBracketIcon,
      title: "Full-Stack Developer",
      description: "Passionate about building end-to-end solutions",
    },
  ];

  const goals = [
    {
      icon: RocketLaunchIcon,
      title: "Career Growth",
      description:
        "Become a skilled software engineer contributing to innovative projects",
    },
    {
      icon: LightBulbIcon,
      title: "Innovation Focus",
      description:
        "Explore AI and machine learning to create smarter solutions",
    },
    {
      icon: UserIcon,
      title: "Continuous Learning",
      description:
        "Stay updated with cutting-edge technologies and best practices",
    },
  ];

  return (
    <section
      id="about-me"
      className="relative w-full py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gray-100 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-15 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
            <UserIcon className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Me Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <div className="w-2 h-8 bg-black rounded-full mr-4"></div>
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                I'm a passionate Computer Science and Engineering student at the
                University of Moratuwa, driven by the endless possibilities of
                technology. Having recently completed my internship at Scienter
                Technologies (Pvt) Ltd, I've gained valuable real-world
                experience in software development.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                My expertise spans full-stack web development, with a keen
                interest in building dynamic, scalable applications. I'm
                particularly fascinated by artificial intelligence and how
                machine learning can create smarter, more intuitive solutions
                that make a real difference in people's lives.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 delay-${
                    index * 100
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-black text-lg mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Goals Section */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Goals Header */}
            <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-2 h-8 bg-white rounded-full mr-4"></div>
                My Goals & Vision
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                I'm committed to becoming a versatile software engineer who
                contributes to innovative and impactful projects. My vision
                extends beyond just coding – I want to create solutions that
                solve real problems and make technology more accessible.
              </p>
            </div>

            {/* Goals Cards */}
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:bg-gray-50 transition-all duration-300 delay-${
                    index * 150
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center transition-colors duration-300">
                        <goal.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-black text-lg mb-2 group-hover:text-gray-800 transition-colors duration-300">
                        {goal.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-bold text-black mb-4">
                  Let's Connect!
                </h4>
                <p className="text-gray-700 mb-6">
                  I'm always excited to discuss new opportunities, innovative
                  projects, or simply connect with fellow tech enthusiasts.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="w-1 h-20 bg-gradient-to-b from-black to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
