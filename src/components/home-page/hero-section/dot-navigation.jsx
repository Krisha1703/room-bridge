import useMedia
 from "use-media";
const DotNavigation = ({ slides, currentIndex, handleDotClick }) => {
  const isSmallScreen = useMedia({ maxWidth: 400 });
    return (
      <div className={`absolute  md:top-[80vh]  ${isSmallScreen ? "top-[36vh]" : "top-[30vh]"}   w-full flex justify-center space-x-2 z-20`}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`md:w-3 md:h-3 w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-white"
            }`}
          />
        ))}
      </div>
    );
  };
  
  export default DotNavigation;
  