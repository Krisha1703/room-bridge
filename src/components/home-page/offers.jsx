import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const offers = [
  {
    title: "Weekend Getaway",
    description: "Enjoy a 20% discount on weekend stays.",
    image: "/images/weekend-getaway.jpg", // Replace with actual image URLs
  },
  {
    title: "Family Package",
    description: "Special deals for families with complimentary meals.",
    image: "/images/family-package.jpg",
  },
  {
    title: "Honeymoon Special",
    description: "Romantic setups and exclusive offers for couples.",
    image: "/images/honeymoon-special.jpg",
  },
  {
    title: "Early Bird Discount",
    description: "Book 30 days in advance and save 25%.",
    image: "/images/early-bird.jpg",
  },
];

const OffersSection = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="p-10 bg-gray-50 h-[200vh]">
      <h2 className="text-2xl font-bold text-center mb-8">Exclusive Offers & Packages</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {offers.map((offer, index) => {
          // Define scroll-trigger animations for each card
          const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]); // Slide up effect
          const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]); // Fade-in effect
          const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]); // Scale effect

          return (
            <motion.div
              key={index}
              className="relative w-[300px] h-[400px] bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ y, opacity, scale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-2/3 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OffersSection;
