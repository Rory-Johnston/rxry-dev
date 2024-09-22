import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = ({ images }: any) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-100">
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </div>

      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
        onClick={nextSlide}
      >
        <FaChevronRight size={30} />
      </div>

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
                ? "block w-3 h-3 bg-white rounded-full"
                : "block w-3 h-3 bg-gray-400 rounded-full"
            }
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
