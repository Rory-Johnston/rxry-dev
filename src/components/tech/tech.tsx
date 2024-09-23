import techIcons from "../../utils/techs";

const TechIcon = ({ tech }: any) => {
  const IconComponent = techIcons[tech];
  return (
    <div className="flex flex-col items-center">
      {IconComponent ? (
        <IconComponent size={20} className="text-white" title={tech} />
      ) : (
        <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
      )}
      <span className="mt-2 text-sm text-white">{tech}</span>
    </div>
  );
};

export default TechIcon;
