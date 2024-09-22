import { BackgroundBeams } from "../background/background";

const Header = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-white text-4xl font-bold relative z-10 text-center">
          Rory Johnston
        </p>
        <div className="text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 leading-relaxed px-2 text-center">
          Full-stack engineer
        </div>
        <p></p>
        <div className="flex justify-center items-center relative z-10 gap-5">
          <a
            href="#projects"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            See my projects
          </a>

          <a
            href="#about"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Learn more
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Header;
