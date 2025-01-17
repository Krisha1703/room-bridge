"use client";
import { memo } from "react";
import dynamic from "next/dynamic";;

// Dynamically imported components
const Navbar = dynamic(() => import("@/components/navbar/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/home-page/hero-section/hero"), { ssr: false });
const HighlightSection = dynamic(() => import("@/components/home-page/hotel-highlights-section/highlights"), { ssr: false });
const MostPopularRooms = dynamic(() => import("@/components/home-page/popular-rooms/popular-rooms"), { ssr: false });
const Adventures = dynamic(() => import("@/components/home-page/adventures-section/adventures"), { ssr: false });
const Activities = dynamic(() => import("@/components/home-page/activities-section/activities"), { ssr: false });
const OffersSection = dynamic(() => import("@/components/promotional-offers/offers"), { ssr: false });
const GallerySection = dynamic(() => import("@/components/home-page/photo-gallery-section/photo-gallery"), { ssr: false });
const TestimonialSection = dynamic(() => import("@/components/home-page/testimonial-section/testimonial-section"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer/footer"), { ssr: false });
const ScrollToTopButton = dynamic(() => import("@/components/scroll-top"), { ssr: false });

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HighlightSection />
      <MostPopularRooms />
      <Adventures />
      <Activities />
      <OffersSection />
      <TestimonialSection />
      <GallerySection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default memo(HomePage);
