import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ImageCarousel from "../../components/carousel/carousel";
import projects from "../../utils/projects";
import techIcons from "../../utils/techs";
import { BackgroundBeams } from "../../components/background/background";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-neutral-900 rounded-xl p-6 flex flex-col md:flex-row">
          <section className="md:w-3/4 md:pr-6">
            <ImageCarousel images={selectedProject.images} />
            <div className="mt-6">
              <h2 className="text-white text-3xl font-bold relative z-10 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>

            <div className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, index) => {
                  const IconComponent = techIcons[tech];
                  if (!IconComponent) {
                    console.warn(`No icon found for technology: "${tech}"`);
                  }
                  return (
                    <li
                      key={index}
                      className="flex items-center space-x-2 bg-black rounded-lg px-4 py-2"
                      title={tech}
                    >
                      {IconComponent ? (
                        <IconComponent
                          size={18}
                          className="text-white"
                          aria-label={tech}
                        />
                      ) : (
                        <span className="text-gray-400">⚙️</span> // Fallback icon
                      )}
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* External Links */}
            <div className="mt-6 flex space-x-4">
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              )}
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </section>

          {/* Right Side: Project List */}
          <aside className="md:w-1/4 mt-6 md:mt-0">
            <ul>
              {projects.map((project) => (
                <li
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer mb-2 px-3 py-2 rounded-lg text-md transition-colors duration-300 flex items-center ${
                    selectedProject.id === project.id
                      ? "py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg"
                      : "text-gray-300 hover:bg-neutral-700 hover:text-white"
                  }`}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedProject(project);
                    }
                  }}
                  aria-pressed={selectedProject.id === project.id}
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Projects;
