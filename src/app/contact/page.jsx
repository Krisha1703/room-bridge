"use client"
import { memo } from "react";
import dynamic from "next/dynamic";;

// Dynamically imported components
const Navbar = dynamic(() => import("@/components/navbar/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/contact-us/hero"), { ssr: false });
const ContactDetails = dynamic(() => import("@/components/contact-us/contact-details"), {ssr: false});
const ContactForm = dynamic(() => import("@/components/contact-us/contact-form"), {ssr: false});
const Footer = dynamic(() => import("@/components/footer/footer"), { ssr: false });
const ScrollToTopButton = dynamic(() => import("@/components/scroll-top"), { ssr: false });

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ContactDetails />
        <ContactForm />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default memo(Contact);
