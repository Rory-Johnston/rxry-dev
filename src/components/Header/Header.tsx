import { BackgroundBeams } from "../Background/Background";

const Header = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-gray-950 text-center overflow-visible">
      <div className="text-4xl font-medium mb-4">Rory Johnston</div>
      <div className="text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 leading-relaxed px-2">
        Full-stack engineer.
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Header;
