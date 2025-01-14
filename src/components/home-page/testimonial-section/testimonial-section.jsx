import { useState, useEffect } from "react";
import TestimonialCard from "./testimonial-card";
import testimonials from "@/constants/guest-testimonials";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const TestimonialSection = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const [activeIndex, setActiveIndex] = useState(0); // Track the active testimonial index

 

  // Automatic carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length); // Loop back to the first card
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [testimonials.length]);


  return (
    <section className="p-10 my-20 h-[75vh] overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">What Our Guests Say?</h2>
      {/* Horizontal scroll section */}
      <motion.div
        className="flex gap-4"

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
