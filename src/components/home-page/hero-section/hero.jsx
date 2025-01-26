import { motion, useTransform, useScroll } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import useMedia from "use-media";
import dynamic from "next/dynamic";
import slides  from "@/constants/slide-details";

// Dynamically imported components
const SlideArrow = dynamic(() => import("@/components/home-page/hero-section/slide-arrow"), { ssr: false });
const SlideText = dynamic(() => import("@/components/home-page/hero-section/slide-text"), { ssr: false });
const DotNavigation = dynamic(() => import("@/components/home-page/hero-section/dot-navigation"), { ssr: false });
const ContentOverlay = dynamic(() => import("@/components/home-page/hero-section/content-overlay"), { ssr: false });

const Hero = () => {
  const {scrollYProgress} = useScroll();
  const isSmallScreen = useMedia({ maxWidth: 400 });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["0%", "20vw"]);

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
          className={`absolute w-full md:h-full ${isSmallScreen ? "h-[39%]" : "h-1/3"} overflow-hidden`}
          initial={{ opacity: 0, borderRadius: "0vw" }}
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