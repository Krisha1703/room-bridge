import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const rooms = [
  {
    image: "/popular-rooms/deluxe.jpg", // Replace with the actual image path
    name: "Deluxe Room",
    price: "$150 / night",
    rating: 4.8,
    description: "A perfect blend of luxury and comfort with a city view.",
  },
  {
    image: "/popular-rooms/suite.jpg", // Replace with the actual image path
    name: "Suite",
    price: "$250 / night",
    rating: 4.9,
    description: "Spacious and elegant, ideal for a luxurious experience.",
  },
  {
    image: "/popular-rooms/twin.jpg", // Replace with the actual image path
    name: "Family Room",
    price: "$180 / night",
    rating: 4.7,
    description: "Designed for families, featuring a cozy ambiance.",
  },
  {
    image: "/popular-rooms/honeymoon.jpg", // Replace with the actual image path
    name: "Honeymoon Suite",
    price: "$300 / night",
    rating: 5.0,
    description: "Romantic and elegant, perfect for couples.",
  },
];

const MostPopularRooms = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Most Popular & Trending Rooms
        </h2>
        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={500}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Room Image */}
              <div className="relative w-full h-48">
                <Image
                  src={room.image}
                  layout="fill"
                  objectFit="cover"
                  alt={room.name}
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

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button
                  className="bg-secondary text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Book Now
                </motion.button>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularRooms;
