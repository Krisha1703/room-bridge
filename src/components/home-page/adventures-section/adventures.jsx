import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import SlideArrow from "../hero-section/slide-arrow";
import AdventuresData from "@/constants/adventures-data";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

const Adventures = () => {
  const adventures = AdventuresData;
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < adventures.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-0 px-6 relative mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-primary text-center mb-14">
          Embark on Unforgettable Adventures
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Slide Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adventures.slice(startIndex, startIndex + itemsPerPage).map((adventure, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                transitionSpeed={500}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Adventure Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={adventure.image}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    alt={adventure.name}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Adventure Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{adventure.name}</h3>
                  <p className="text-sm text-gray-600">{adventure.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-primary font-bold">{adventure.price}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-gray-700 font-medium">{adventure.rating}</span>
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
          {startIndex + itemsPerPage < adventures.length && (
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

export default Adventures;
