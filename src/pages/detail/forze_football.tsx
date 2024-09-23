import { Link } from "react-router-dom";
import { BackgroundBeams } from "../../components/background/background";
import TechIcon from "../../components/tech/tech";

const ForzeFootball = () => {
  const project = {
    id: 2,
    name: "Forze Football",
    slug: "forze-football",
    tagline: "An innovative solution to modern problems.",
    description: `
      <p>This project is aimed at solving XYZ problems using ABC technologies.</p>
      <p>Key features include:</p>
      <ul>
        <li>Feature One</li>
        <li>Feature Two</li>
        <li>Feature Three</li>
      </ul>
    `,
    techStack: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Stripe",
      "Mapbox",
      "Vercel",
    ],
    headerImage: "/images/forze-one.png",
    galleryImages: ["/images/forze-one.png", "/images/forze-two.png"],
    liveDemoLink: "https://example.com/live-demo",
  };

  return (
    <div className="relative bg-neutral-900 min-h-screen z-10">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      <div className="relative top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-gradient-to-r from-gray-500 via-yellow-500 to-black-500 rounded-b-3xl h-[60vh] flex justify-center items-center z-10">
        <div className="font-bold text-5xl text-white text-center">
          FORZE FOOTBALL
        </div>
      </div>

      <div className="relative z-20 text-white left-1/2 -translate-x-1/2 max-w-4xl px-4 md:px-0 py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">FORZE FOOTBALL</h2>
        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row py-4 gap-8">
          <div className="text-white font-bold md:w-[15%]">DESCRIPTION</div>
          <div className="md:w-[85%]">
            This project serves as a portal for users to purchase slots in 5 or
            7 aside football matches that are schedule weekly. It also allows
            for match hosts to schedule and manage bookings. Payments are
            processed via Stripe.
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-4 gap-8">
          <div className="text-white font-bold md:w-[15%]">TECH STACK</div>
          <div className="md:w-[85%]">
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((tech, index) => (
                    <TechIcon key={index} tech={tech} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-4 gap-8">
          <div className="text-white font-bold md:w-[15%]">YEAR</div>
          <div className="md:w-[85%]">2022</div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-center text-2xl mb-4">
            GALLERY
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Brick Detective Screenshot ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <Link
          to="/projects"
          className="w-[20%] h-[10%] py-4 rounded-lg text-white font-bold flex justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:scale-105 hover:cursor-pointer transition-transform duration-300 mt-auto z-10 relative"
        >
          Return to projects
        </Link>
      </div>
    </div>
  );
};

export default ForzeFootball;
