import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../utils/projects";
import { BackgroundBeams } from "../../components/background/background";
import TechIcon from "../../components/tech/tech";

const ProjectsOverview = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Hover Preview */}
      <div className="flex-1 bg-black flex items-center justify-center relative z-10">
        {hoveredProject ? (
          <div className="flex flex-col">
            <img
              src={hoveredProject.headerImage}
              alt={hoveredProject.name}
              className="max-w-4xl max-h-full object-contain transition-opacity duration-300 rounded-xl z-10"
            />
            <div>
              {" "}
              {hoveredProject.techStack &&
                hoveredProject.techStack.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {hoveredProject.techStack.map((tech, index) => (
                        <TechIcon key={index} tech={tech} />
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        ) : (
          <div className="text-white text-xl">
            Hover over a project to preview
          </div>
        )}
        <BackgroundBeams />
      </div>

      {/* Right Side: Projects List */}
      <div className="w-full md:w-1/3 bg-neutral-900 text-white p-6">
        <h1 className="text-4xl font-bold mb-8">PROJECTS</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-4">
              <Link
                to={`/projects/${project.slug}`}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="px-6 py-2 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsOverview;
