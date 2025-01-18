import { useState } from "react";
import useMedia from "use-media";
import Image from "next/image";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import SlideArrow from "../hero-section/slide-arrow";
import RoomsData from "@/constants/rooms-data";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

const MostPopularRooms = () => {
  const isLargeScreen = useMedia({ minWidth: 768 });
  const popularRooms = RoomsData.popular; 
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = isLargeScreen ? 4 : 1;

  const handleNext = () => {
    if (startIndex + itemsPerPage < popularRooms.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-0 px-6 relative md:-mt-20 -mt-40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="md:text-3xl text-2xl font-bold text-primary text-center mb-14">
          Most Popular & Trending Rooms
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Slide Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRooms.slice(startIndex, startIndex + itemsPerPage).map((room, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                transitionSpeed={500}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Room Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={room.image}
                    layout="fill"
                    objectFit="cover"
                    alt={room.name}
                    loading="lazy"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Room Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {room.name}
                  </h3>
                  <p className="text-sm text-gray-600">{room.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-primary font-bold">{room.price}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-gray-700 font-medium">
                        {room.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Book Now Button */}
                <motion.button
                  className="absolute top-2 right-2 bg-secondary text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Book Now
                </motion.button>
              </Tilt>
            ))}
          </div>

          {/* Arrows */}
          {startIndex > 0 && (
            <SlideArrow
              direction="left"
              onClick={handlePrev}
            />
          )}
          {startIndex + itemsPerPage < popularRooms.length && (
            <SlideArrow
              direction="right"
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MostPopularRooms;
