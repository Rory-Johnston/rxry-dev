const About = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Add a wrapper div with `w-full` and adjust text alignment to left */}
      <div className="max-w-[1300px] w-full text-left">
        <div className="text-gray-950 text-5xl font-medium mb-5">
          Get the highlights.
        </div>
      </div>
      <div className="md:rounded-3xl bg-black max-w-[1300px] w-full h-[500px]"></div>
    </div>
  );
};

export default About;
