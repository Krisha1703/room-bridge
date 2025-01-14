// src/components/HoverableShape.jsx
import React from "react";
import { motion } from "framer-motion"; // Assuming you're using Framer Motion
import TextOverlay from "./text-overlay";

const AnimatedMotionDiv = ({
  variants,
  initial = "hidden",
  whileInView = "visible",
  whileHover = {
    scale: 3.5,
    borderTopRightRadius: "1vw",
    borderBottomLeftRadius: "1vw",
  },
  transition = { duration: 1 },
  className,
  style,
  backgroundImage,
  title,
  subtitle,
}) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      whileHover={whileHover}
      transition={transition}
      className={`relative cursor-pointer text-center items-center justify-center rounded-md group overflow-hidden ${className}`}
      style={{
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "contain",
        ...style,
      }}
    >
      {/* Text Overlay */}
      <TextOverlay title={title} subtitle={subtitle} />
    </motion.div>
  );
};

export default AnimatedMotionDiv;
