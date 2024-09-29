import { BackgroundBeams } from "../../components/background/background";

const about = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-white text-4xl font-bold relative z-10 text-center">
          About me
        </p>
        <div className="text-neutral-300 my-8 text-center">
          I’m a full-stack software engineer with over 3 years of industry
          experience. My passion for software development drives me to explore
          and develop a wide range of projects. While I enjoy experimenting with
          new technologies, I always aim to bring meaningful projects to
          fruition. This continuous learning helps me stay at the forefront of
          industry trends and refine my technical abilities.
        </div>
        <div className="my-4 text-neutral-300 text-center font-bold">
          Email: contact@rxry.dev
        </div>
        <div className="flex justify-center items-center relative z-10 gap-5">
          <a
            href="projects"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            See my projects
          </a>

          <a
            href="/"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Return
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default about;
