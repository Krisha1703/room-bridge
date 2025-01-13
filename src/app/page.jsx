// pages/index.js (HomePage)
"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/home-page/hero-section/hero";
import HighlightSection from "@/components/home-page/hotel-highlights-section/highlights";
import MostPopularRooms from "@/components/home-page/popular-rooms";
import GallerySection from "@/components/home-page/photo-gallery-section/photo-gallery";
import TestimonialSection from "@/components/home-page/testimonial-section/testimonial-section";
import OffersSection from "@/components/home-page/offers";

const HomePage = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <HighlightSection />
      <MostPopularRooms />
      <OffersSection />
      <TestimonialSection />
      <GallerySection />
    </>
      
  );
};

export default HomePage;


