import Image from "next/image";
import highlights from "@/constants/hotel-highlights";
import { motion } from "motion/react";

const Cards = ({ rotateX, scale, translateY }) => {
    return (
      <motion.div
        style={{
          rotateX,
          scale,
        }}
        className="mx-auto h-auto w-5/6 rounded-md cursor-pointer"
      >
        <div className="h-auto w-full rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 pt-10 pb-0">
          {highlights.map((highlight, index) => (
            <motion.div
              key={`highlight-${index}`}
              style={{ translateY }}
              className="relative rounded-md shadow-md overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
            >
              {/* Image Section with Title */}
              <div className="relative w-full h-48 ">
                <Image
                  src={highlight.image}
                  layout="fill"
                  objectFit="cover"
                  alt={highlight.title}
                  loading="lazy"
                  className="transition-allbg-black duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                </div>
              </div>
  
              {/* Hover Overlay with Subtitle */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-center font-medium text-wrap max-w-[200px]">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  export default Cards;