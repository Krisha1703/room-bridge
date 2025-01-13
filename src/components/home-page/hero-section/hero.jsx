import { motion, useTransform, useScroll } from "motion/react";
import SlideArrow from "@/components/home-page/hero-section/slide-arrow";
import SlideText from "@/components/home-page/hero-section/slide-text";
import DotNavigation from "@/components/home-page/hero-section/dot-navigation";
import ContentOverlay from "@/components/home-page/hero-section/content-overlay";
import slides  from "@/constants/slide-details";

import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const {scrollYProgress} = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["0%", "10%"]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative w-full h-screen">
        <div className="relative w-full h-screen overflow-hidden">
            <motion.div
            key={currentIndex}
            className="absolute w-full h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{scale, borderRadius}}
            >
            <Image
                src={slides[currentIndex].image}
                layout="fill"
                objectFit="cover"
                alt={`Slide ${currentIndex + 1}`}
                loading="lazy"
                className="w-full h-full"
            />
            </motion.div>

            {/* Arrow Buttons */}
            <SlideArrow direction="left" onClick={handlePrev} />
            <SlideArrow direction="right" onClick={handleNext} />

            {/* Slide Text */}
            <SlideText title={slides[currentIndex].title} description={slides[currentIndex].description} />

            {/* Dot Navigation */}
            <DotNavigation slides={slides} currentIndex={currentIndex} handleDotClick={handleDotClick} />
        </div>

        {/* Main Content Overlay */}
        <ContentOverlay />
    </div>
  )
}

export default Hero