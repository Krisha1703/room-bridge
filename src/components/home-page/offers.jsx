import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PromotionalOffers } from "@/constants/promotional-offers"; // Import the offers data

const OffersSection = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="p-4 bg-white h-[200vh]">
      <h2 className="text-3xl font-bold text-center my-12 text-primary">Exclusive Offers & Packages</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {PromotionalOffers.map((offer, index) => {
          // Define scroll-trigger animations for each card
          const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]); // Slide up effect
          const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]); // Fade-in effect
          const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]); // Scale effect

          return (
            <motion.div
              key={offer.id}
              className="relative w-full h-[90vh] md:w-1/3 lg:w-1/4 bg-secondary rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{ y, opacity, scale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={500} // Adjust width
                height={300} // Adjust height
                className="w-full h-3/5 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-primary mb-3">{offer.title}</h3>
                <h4 className="text-lg text-white font-semibold mb-2">{offer.subtitle}</h4>

                <motion.button
                  className="relative overflow-hidden text-primary hover:text-white border-2 border-primary border-solid px-4 py-1 rounded-lg font-semibold"
                  initial={{ background: "transparent" }}
                  whileHover="hover"
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 h-full w-0 bg-primary z-0"
                    variants={{
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 md:text-md text-md">Book Now</span>
                </motion.button>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OffersSection;
