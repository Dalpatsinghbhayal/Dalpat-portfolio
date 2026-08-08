import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // <section id="work" className="py-20"></section>

  return (
    <section
      id="work"
      className="py-20 px-[5vw] md:px-[7vw] lg:px-[10vw]"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          PROJECTS
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>

        <p className="text-gray-400 mt-4 text-sm md:text-base">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Project Header */}
            <div className="h-40 flex items-center justify-center bg-gradient-to-br from-purple-900/50 via-gray-900 to-pink-900/30">
              <div className="text-center px-5">
                <div className="text-4xl mb-3">💻</div>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-purple-400 text-xs mt-2">
                  Project #{project.id + 1}
                </p>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>

                {/* Details */}
                <button
                  onClick={() => handleOpenModal(project)}
                  className="flex-1 flex items-center justify-center gap-2 border border-purple-500 text-purple-400 py-2.5 rounded-xl font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  <i className="fa-solid fa-circle-info"></i>
                  Details
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-2xl shadow-2xl w-[95%] max-w-2xl border border-gray-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-3xl transition"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <h4 className="text-white font-semibold mb-3">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-2 mb-7">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Modal Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* GitHub Button */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                  View GitHub
                </a>

                {/* Live Demo Button */}
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-purple-500 text-purple-400 py-3 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;