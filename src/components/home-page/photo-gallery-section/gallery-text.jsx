import { motion } from "framer-motion";

const GalleryText = ({ words, className }) => {
    // Framer Motion animation variants for words
const wordAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  
  const headingAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between words
      },
    },
  };

  return (
    <motion.h1
        className={`absolute  z-10 cursor-pointer  text-white font-bold text-4xl ${className}`}
        variants={headingAnimation}
        initial="hidden"
        whileInView="visible"
    >
        {words.map((word, index) => (
        <motion.span
            key={index}
            className="inline-block mr-2"
            variants={wordAnimation}
            whileHover={{ color: "#FFC107" }}
        >
            {word}
        </motion.span>
        ))}
    </motion.h1>
  )
}

export default GalleryText