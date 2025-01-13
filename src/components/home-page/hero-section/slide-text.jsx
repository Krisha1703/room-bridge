// components/SlideText.js
import { motion } from "motion/react";

const SlideText = ({ title, description }) => {
  return (
    <div className="text-white absolute bottom-20 md:left-20 left-5 flex justify-between items-center">
      {/* Vertical line */}
      <motion.div
        className="relative overflow-hidden cursor-pointer bg-primary md:p-1 p-2 lg:h-[20vh] md:h-[15vh] w-0.5"
        initial={{ backgroundColor: "#1E3A8A" }}
        whileHover="hover"
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-0 h-full w-0 bg-secondary z-0"
          variants={{
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div className="flex flex-col mx-3 gap-1">
        <motion.h2
          className="font-semibold text-xl rounded-sm bg-secondary text-primary p-2 lg:w-1/3 md:w-1/2 sm:w-2/3 cursor-pointer"
          whileHover={{ letterSpacing: "0.1rem" }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <p className="font-semibold text-md text-wrap md:w-1/2 w-full">{description}</p>
      </div>
    </div>
  );
};

export default SlideText;
