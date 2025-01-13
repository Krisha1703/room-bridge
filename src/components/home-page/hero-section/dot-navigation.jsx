// components/DotNavigation.js
const DotNavigation = ({ slides, currentIndex, handleDotClick }) => {
    return (
      <div className="absolute bottom-8 w-full flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-white"
            }`}
          />
        ))}
      </div>
    );
  };
  
  export default DotNavigation;
  