import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ImageCarousel from "../../components/carousel/carousel";
import projects from "../../utils/projects";
import { BackgroundBeams } from "../../components/background/background";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-12">My Projects</h1>
        <div className="bg-neutral-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
          {/* Left Side: Project Details */}
          <div className="md:w-3/4 md:pr-6">
            {/* Image Carousel */}
            <ImageCarousel images={selectedProject.images} />

            {/* Project Description */}
            <div className="mt-6">
              <h2 className="text-3xl font-semibold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h3 className="text-xl font-medium mb-2">Tech Stack:</h3>
              <ul className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* External Links */}
            <div className="mt-6 flex space-x-4">
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              )}
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Right Side: Project List */}
          <div className="md:w-1/4 mt-6 md:mt-0">
            <h3 className="text-2xl font-medium mb-4">Projects</h3>
            <ul>
              {projects.map((project) => (
                <li
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer mb-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                    selectedProject.id === project.id
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
                      : "text-gray-300 hover:bg-neutral-700 hover:text-white"
                  }`}
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Projects;
