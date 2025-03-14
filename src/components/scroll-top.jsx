import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Check if the window is scrolled
  const checkScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true); 
    } else {
      setShowButton(false); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll); 
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-4 p-4 bg-primary hover:bg-secondary hover:text-primary font-semibold cursor-pointer text-xl text-white rounded-full shadow-lg transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
