import React from "react";
import {useScroll, useTransform } from "framer-motion";
import Cards from "./Cards";
import Header from "./Header";

const HighlightSection = () => {
  const { scrollYProgress } = useScroll();

  // Transform animations for 3D tilt effect
  const rotateX = useTransform(scrollYProgress, [0, 0.1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1.05, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [50, -50]);

  return (
    <div className="flex flex-col">
      <div className="h-[120vh] flex items-center justify-center relative overflow-hidden">
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
