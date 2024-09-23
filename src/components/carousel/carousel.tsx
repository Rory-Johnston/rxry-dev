import { useState } from "react";

const ImageCarousel = ({ images }: any) => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-100 rounded-xl">
      {images.map((image, index) => (
        <div
          className={
            index === current
              ? "opacity-100 transition-opacity duration-500 ease-in-out h-full w-full"
              : "opacity-0 transition-opacity duration-500 ease-in-out"
          }
          key={index}
        >
          {index === current && (
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fit rounded-lg"
            />
          )}
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={
              index === current
                ? "block w-3 h-3 bg-white rounded-full hover:cursor-pointer"
                : "block w-3 h-3 bg-gray-400 rounded-full hover:cursor-pointer"
            }
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
