import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const skillLogos = {
  HTML:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",

  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",

  "React JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",

  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",

  Java:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",

  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",

  Hibernate:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",

  JPA:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",

  "REST API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",

  "Node JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

  "Express JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",

  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",

  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",

  C:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",

  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",

  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",

  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",

  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",

  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-[5vw] md:px-[7vw] lg:px-[10vw]"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          SKILLS
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>

        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Technologies and tools I use to build modern web applications
          and scalable backend systems.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-6 py-5 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="
              bg-gray-900/80
              backdrop-blur-md
              px-5 sm:px-8
              py-7
              w-full
              md:w-[48%]
              rounded-2xl
              border border-gray-700
              shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
              hover:shadow-[0_0_30px_1px_rgba(130,69,236,0.4)]
              transition-all
              duration-300
            "
          >
            {/* Category Title */}
            <h3
              className="
                text-2xl
                sm:text-3xl
                font-semibold
                text-gray-300
                mb-6
                text-center
              "
            >
              {category.title}
            </h3>

            {/* Skills */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-gray-800/40
                      border
                      border-gray-700
                      rounded-2xl
                      py-3
                      px-2
                      text-center
                      hover:border-purple-500
                      hover:bg-purple-500/10
                      transition-all
                      duration-300
                    "
                  >
                    <img
                      src={skillLogos[skill.name]}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                    />

                    <span className="text-xs sm:text-sm text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;