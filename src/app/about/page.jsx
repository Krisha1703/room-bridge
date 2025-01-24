"use client"
import { memo } from "react";
import dynamic from "next/dynamic";

// Dynamically imported components
const Navbar = dynamic(() => import("@/components/navbar/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/about-us/hero"), { ssr: false });
const HighlightSection = dynamic(() => import("@/components/home-page/hotel-highlights-section/highlights"), { ssr: false });
const GallerySection = dynamic(() => import("@/components/home-page/photo-gallery-section/photo-gallery"), { ssr: false });
const TestimonialSection = dynamic(() => import("@/components/home-page/testimonial-section/testimonial-section"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer/footer"), { ssr: false });
const ScrollToTopButton = dynamic(() => import("@/components/scroll-top"), { ssr: false });

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HighlightSection />
      <TestimonialSection />
      <GallerySection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default memo(About);
