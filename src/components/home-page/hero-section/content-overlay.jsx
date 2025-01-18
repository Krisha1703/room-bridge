import { motion } from "motion/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const ContentOverlay = () => {
  return (
    <motion.div
      className="absolute md:top-1/4 top-10 left-10 sm:left-10 md:left-0  lg:mx-60 md:mx-40 sm:mx-5 flex md:flex-row flex-col gap-y-4 md:gap-y-0 justify-between lg:space-x-6 md:space-x-3 items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
    >
      <h1 className="text-white font-semibold z-10 lg:text-3xl md:text-2xl sm:text-xl text-[1.1rem] cursor-pointer">
        Find Your Perfect Stay with
        <span className="text-secondary ml-1">Room</span>
        <span className="text-primary">Bridge</span>
      </h1>

      <motion.button
        className="relative overflow-hidden md:bg-transparent bg-primary text-secondary border-2 border-primary border-solid md:px-8 md:py-2 p-2 px-6 rounded-lg font-semibold"
       
        whileHover="hover"
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full md:min-w-0 min-w-full bg-primary z-0"
          variants={{
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.5 }}
        />
        <SearchOutlinedIcon className="mr-1 relative z-10 text-secondary lg:text-3xl md:text-2xl text-xl" />
        <span className="relative z-10 md:text-xl text-md">Explore</span>
      </motion.button>
    </motion.div>
  );
};

export default ContentOverlay;
