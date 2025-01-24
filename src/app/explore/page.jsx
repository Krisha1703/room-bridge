"use client"
import { memo } from "react";
import dynamic from "next/dynamic";;

// Dynamically imported components
const Navbar = dynamic(() => import("@/components/navbar/navbar"), { ssr: false });
const ExploreRooms = dynamic(() => import("@/components/explore-rooms/explore-rooms"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer/footer"), { ssr: false });
const ScrollToTopButton = dynamic(() => import("@/components/scroll-top"), { ssr: false });

const Explore = () => {
  return (
    <>
      <Navbar />
      <ExploreRooms />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default memo(Explore);
