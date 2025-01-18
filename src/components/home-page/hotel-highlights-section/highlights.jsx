import {useScroll, useTransform } from "motion/react";
import Cards from "./cards";
import Header from "./header";
import { useMedia } from "use-media";

const HighlightSection = () => {
  const { scrollYProgress } = useScroll();
  const isLargeScreen = useMedia({ minWidth: 768 });
  const isSmallScreen = useMedia({ maxWidth: 400 });
  const isSmallerScreen = useMedia({ maxWidth: 360 });

  // Transform animations for 3D tilt effect
  const rotateX = useTransform(scrollYProgress, [0, 0.1], isLargeScreen ? [60, 0] : [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1.05, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [50, -50]);

  return (
    <div className={`flex flex-col md:mt-0 ${isSmallScreen ? "-mt-[70vh]" : isSmallerScreen ? "-mt-[50vh]" : "-mt-[85vh]"}`}>
      <div className="md:h-[120vh] h-[250vh] flex items-center justify-center relative overflow-hidden">
        <div
          className="w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Header translateY={translateY} />
          <Cards rotateX={rotateX} scale={scale} translateY={translateY} />
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
