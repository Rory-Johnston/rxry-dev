import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../utils/projects";
import { BackgroundBeams } from "../../components/background/background";
import TechIcon from "../../components/tech/tech";
import { FaArrowRight } from "react-icons/fa";

const ProjectsOverview = () => {
  const [hoveredProject, setHoveredProject] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:flex-1 bg-black flex items-center justify-center relative z-10">
        {hoveredProject ? (
          <div className="flex flex-col">
            <img
              src={hoveredProject.headerImage}
              alt={hoveredProject.name}
              className="max-w-4xl max-h-full object-contain transition-opacity duration-300 rounded-xl z-10"
            />
            <div>
              {hoveredProject.techStack &&
                hoveredProject.techStack.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {hoveredProject.techStack.map(
                        (tech: any, index: number) => (
                          <TechIcon key={index} tech={tech} />
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        ) : (
          <div className="text-white text-xl md:block hidden">
            Hover over a project to preview, click to see more.
          </div>
        )}
        <BackgroundBeams />
      </div>

      <div className="w-full md:w-1/3 bg-neutral-900 text-white p-6 flex flex-col justify-between h-screen">
        <div>
          <h1 className="text-4xl font-bold mb-8">PROJECTS</h1>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="mb-4">
                <Link
                  to={`/projects/${project.slug}`}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group px-6 py-2 bg-neutral-800 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-between"
                >
                  <span>{project.name}</span>
                  <FaArrowRight
                    className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/"
          className="w-full h-[10%] rounded-lg text-white font-bold flex justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:scale-105 hover:cursor-pointer transition-transform duration-300 mt-auto"
        >
          Return
        </Link>
      </div>
    </div>
  );
};

export default ProjectsOverview;
