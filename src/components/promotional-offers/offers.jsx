import Image from "next/image";
import { PromotionalOffers } from "@/constants/promotional-offers";
import { motion, useScroll, useTransform } from "motion/react";

const OffersSection = () => {
  const { scrollYProgress } = useScroll();

  const slideDirection = (id, scrollProgress) => {
    if (id === 1) {
      return { x: useTransform(scrollProgress, [0, 0.1, 0.2, 0.3, 0.4], ["-100%", "-75%", "-50%", "-25%", "0%"]) }; // Slide from left
    } else if (id === 2) {
      return { y: useTransform(scrollProgress, [0, 0.1, 0.2, 0.3, 0.4], ["100%", "75%", "50%", "25%", "0%"]) }; // Slide from bottom
    } else if (id === 3) {
      return { x: useTransform(scrollProgress, [0, 0.1, 0.2, 0.3, 0.4], ["100%", "75%", "50%", "25%", "0%"]) }; // Slide from right
    }
    return {};
  };

  return (
    <section className="p-4 bg-white">
      <h2 className="text-3xl font-bold text-center mt-12 text-primary">
        Exclusive Offers & Packages
      </h2>
      <div className="flex flex-wrap justify-center gap-4 scale-[80%]">
        {PromotionalOffers.map((offer, index) => {
          // Animation effect based on the scroll position and offer id
          const slideEffect = slideDirection(offer.id, scrollYProgress);

          return (
            <motion.div
              key={offer.id}
              className="relative w-full h-[90vh] md:w-1/3 lg:w-1/4 bg-secondary rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={slideEffect} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={500} 
                height={300} 
                loading="lazy"
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
