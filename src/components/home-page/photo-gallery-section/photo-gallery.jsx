import dynamic from "next/dynamic";
import TransformImages from "@/constants/transform-images";

// Dynamically imported components
const commonVariants = dynamic(() => import("./common-variants"), { ssr: false });
const AnimatedMotionDiv = dynamic(() => import("./animated-motion-div"), { ssr: false });
const TextOutline = dynamic(() => import("./text-outline"), { ssr: false });
const GalleryText = dynamic(() => import("./gallery-text"), { ssr: false });

const GallerySection = () => {

  const { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21  } = TransformImages(); // Get the shapes

  return (
    <div className="bg-primary relative p-4 w-full h-[500vh] overflow-hidden"> {/* Increased height to ensure scrolling */}
      
      <GalleryText 
        words= {["Explore", "Our", "Stunning", "Gallery"]}
        className="top-10 right-20"
      />

     {/* Shape 1 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-0 left-0 w-[100px] h-[100px]"
        style={{
          x: image1.x,
          y: image1.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-garden.jpg"
        title={image1.title}
        subtitle={image1.subtitle}
      />

     {/* Shape 2 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-0 w-[100px] h-[100px]"
        style={{
          x: image2.x,
          y: image2.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-poolside.jpeg"
        title={image2.title}
        subtitle={image2.subtitle}
      />

      {/* Shape 3 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-80 w-[100px] h-[100px]"
        style={{
          x: image3.x,
          y: image3.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-exterior.avif"
        title={image3.title}
        subtitle={image3.subtitle}
      />

       {/* Shape 4 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-0 w-[100px] h-[100px]"
        style={{
          x: image4.x,
          y: image4.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/beach-dinning.jpeg"
        title={image4.title}
        subtitle={image4.subtitle}
      />

      {/* Shape 5 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-60 w-[100px] h-[100px]"
        style={{
          x: image5.x,
          y: image5.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/rooftop-bar.jpg"
        title={image5.title}
        subtitle={image5.subtitle}
      />

       {/* Shape 6 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-[40vw] w-[100px] h-[100px]"
        style={{
          x: image6.x,
          y: image6.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/ocean-suite.jpg"
        title={image6.title}
        subtitle={image6.subtitle}
      />

       {/* Shape 7 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-[-100vh] left-40 w-[100px] h-[100px]"
        style={{
          y: image7.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/simple.jpg"
        title={image7.title}
        subtitle={image7.subtitle}
      />

      <GalleryText 
        words= {["Discover", "Our", "Exceptional", "Amenities"]}
        className="top-[180vh]  left-20"
      />

       {/* Shape 8 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-0 w-[100px] h-[100px]"
        style={{
          x: image8.x,
          y: image8.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/reading-corner.jpeg"
        title={image8.title}
        subtitle={image8.subtitle}
      />

       {/* Shape 9 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[100px]"
        style={{
          x: image9.x,
          y: image9.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/gym-facility.jpg"
        title={image9.title}
        subtitle={image9.subtitle}
      />

       {/* Shape 10 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-40 w-[110px] h-[110px]"
        style={{
          x: image10.x,
          y: image10.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/business-meeting.webp"
        title={image10.title}
        subtitle={image10.subtitle}
      /> 

      <GalleryText 
        words= {["Experience", "Serenity", "Like", "Never", "Before"]}
        className="top-[270vh]  right-20"
      />    

        {/* Shape 11 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[100px]"
        style={{
          x: image11.x,
          y: image11.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-fountain.jpeg"
        title={image11.title}
        subtitle={image11.subtitle}
      />

      {/* Shape 12 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[100px]"
        style={{
          x: image12.x,
          y: image12.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/firepit.webp"
        title={image12.title}
        subtitle={image12.subtitle}
      />

      <GalleryText 
        words= {["Create", "Memories", "That", "Last", "Forever"]}
        className="top-[350vh] left-20 max-w-[30vw] leading-snug text-wrap"
      />  

      {/* Shape 13 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[100px]"
        style={{
          x: image13.x,
          y: image13.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/luxury-spa.png"
        title={image13.title}
        subtitle={image13.subtitle}
      />

      {/* Shape 14 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[120px]"
        style={{
          x: image14.x,
          y: image14.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-lobby.jpeg"
        title={image14.title}
        subtitle={image14.subtitle}
      />

       {/* Shape 15 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[120px]"
        style={{
          x: image15.x,
          y: image15.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/mountain-view.jpg"
        title={image15.title}
        subtitle={image15.subtitle}
      />

       {/* Shape 16 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[120px]"
        style={{
          x: image16.x,
          y: image16.y,
          scale: 3,
        }}
        backgroundImage="/hotel-highlights/dinning.jpg"
        title={image16.title}
        subtitle={image16.subtitle}
      />

      <GalleryText 
        words= {["Relax,", "Refresh,", "Reconnect"]}
        className="top-[425vh] right-20"
      /> 

       {/* Shape 17 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-1/5 left-20 w-[100px] h-[120px]"
        style={{
          x: image17.x,
          y: image17.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-architecture.jpg"
        title={image17.title}
        subtitle={image17.subtitle}
      />

       {/* Shape 18 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-[-15vh] left-20 w-[100px] h-[120px]"
        style={{
          x: image18.x,
          y: image18.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-sleep.avif"
        title={image18.title}
        subtitle={image18.subtitle}
      />

      {/* Shape 19 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-[-380vh] left-0 w-[100px] h-[100px]"
        style={{
          x: image19.x,
          y: image19.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/deluxe-jacuzzi.jpg"
        title={image19.title}
        subtitle={image19.subtitle}
      />

       {/* Shape 20 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-[-370vh] left-80 w-[100px] h-[100px]"
        style={{
          x: image20.x,
          y: image20.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/modern-hallway.jpg"
        title={image20.title}
        subtitle={image20.subtitle}
      />

      {/* Shape 21 */}
     <AnimatedMotionDiv
        variants={commonVariants}
        className="top-[-120vh] left-[-50vw] w-[100px] h-[100px]"
        style={{
          x: image21.x,
          y: image21.y,
          scale: 3,
        }}
        backgroundImage="/photo-gallery/hotel-bar.jpg"
        title={image21.title}
        subtitle={image21.subtitle}
      />

      <TextOutline />

  </div>
  );
};

export default GallerySection;
