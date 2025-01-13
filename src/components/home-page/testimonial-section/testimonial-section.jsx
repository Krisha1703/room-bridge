import { useState, useEffect } from "react";
import TestimonialCard from "./testimonial-card";
import testimonials from "@/constants/guest-testimonials";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const TestimonialSection = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const [activeIndex, setActiveIndex] = useState(0); // Track the active testimonial index

  // Smooth scrolling effect using useSpring
  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1], // Full scroll range
      [0, -300 * (testimonials.length - 1)] // Moves cards left as user scrolls
    ),
    { stiffness: 100, damping: 30 }
  );

  // Automatic carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length); // Loop back to the first card
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [testimonials.length]);

  useEffect(() => {
    // If no user scroll, smoothly slide to the active index
    const targetX = -300 * activeIndex; // Calculate target x position
    x.set(targetX);
  }, [activeIndex, x]);

  return (
    <section className="p-10 bg-gray-100 h-[75vh] overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">What Our Guests Say?</h2>
      {/* Horizontal scroll section */}
      <motion.div
        className="flex gap-4"
        style={{
          x,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[300px] h-[400px]" // Fixed card dimensions
          >
            <TestimonialCard
              userImage={testimonial.userImage}
              userName={testimonial.userName}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
