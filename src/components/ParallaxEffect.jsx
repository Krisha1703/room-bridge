import { motion, useTransform, useScroll } from "motion/react";
import commonVariants from "@/components/home-page/photo-gallery-section/common-variants";
import TextOverlay from "@/components/home-page/photo-gallery-section/text-overlay";

const GallerySection = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress

  // Adjust transformation ranges for each shape with spacing in both X and Y directions
  const x1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 275, 25, 275, 175, 225, 25, 75]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [150, 300, 450, 600, 750, 600, 450, 300, 150, 0, -150]);

  const x2 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [350, 400, 450, 500, 600, 350, 600, 500, 550, 450, 400]);
  const y2 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [100, 250, 400, 550, 700, 550, 400, 250, 100, -50, -200]);

  const x3 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [250, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800]);
  const y3 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [100, 250, 400, 550, 700, 550, 400, 250, 100, -50, -200]);

  const x4 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [50, 100, 150, 200, 300, 50, 300, 200, 250, 50, 100]);
  const y4 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [50, 100, 150, 200, 250, 300, 350, 400, 450, 100, 200]);

  const x5 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [175, 225, 175, 325, 425, 175, 425, 325, 375, 275, 225]);
  const y5 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 225, 275, 325, 375, 425, 75, 175]);

  const x6 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [50, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600]);
const y6 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 225, 275, 325, 375, 425, 75, 175]);

  const x7 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100]);
  const y7 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250]);

  const x8 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 275, 25, 275, 175, 225, 25, 75]);
  const y8 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [300, 325, 350, 375, 400, 425, 450, 475, 500, 500, 400]);

const x9 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [300, 350, 400, 450, 550, 300, 550, 450, 500, 400, 350]); // Further left
const y9 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [275, 300, 325, 350, 375, 400, 425, 450, 475, 475, 375]);

const x10 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [300, 400, 450, 500, 550, 600, 450, 700, 750, 800, 850]); // Farther left
const y10 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [250, 275, 300, 325, 350, 375, 400, 425, 450, 450, 350]);

const x11 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-300, 0, 0, 100, 300, 500, 550, 100, 0, 300, 0]); // Farther right
const y11 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [900, 1050, 1200, 1350, 1500, 1350, 1200, 1050, 900, 750, 600]);

const x12 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-100, -50, 250, 450, 650, 450, 550, 450, 650, 850, 1050]); // Even farther right
const y12 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [800, 950, 1100, 1350, 1400, 1250, 1100, 950, 800, 650, 500]);


  const x13 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [450, 600, 700, 900, 1000, 1150, 1000, 900, 700, 600, 450]);
  const y13 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [900, 1050, 1200, 1350, 1500, 1350, 1200, 1050, 900, 750, 600]);

  const x14 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-200, 200, 300, 400, 500, 600, 500, 400, 600, 800, 1000]);
  const y14 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1000, 1150, 1300, 1450, 1500, 1450, 1300, 1150, 1000, 850, 700]);

  const x15 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [550, 700, 800, 1000, 1100, 1250, 1100, 1000, 800, 700, 550]);
  const y15 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1100, 1250, 1400, 1550, 1600, 1550, 1400, 1250, 1100, 950, 800]);

  const x16 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-200, 0, 0, 350, 550, 750, 800, 350, 0, 550, 200]);
  const y16 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1150, 1300, 1450, 1600, 1650, 1600, 1450, 1300, 1150, 1000, 850]);

  const x17 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [350, 450, 500, 550, 600, 650, 500, 750, 800, 850, 900]);
  const y17 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1250, 1400, 1550, 1700, 1750, 1700, 1550, 1400, 1250, 1100, 950]);

  const x18 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [525, 675, 775, 975, 1075, 1225, 1075, 975, 775, 675, 525]);
  const y18 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1300, 1450, 1600, 1750, 1800, 1750, 1600, 1450, 1300, 1150, 1000]);

  return (
    <div className="bg-black relative p-4 w-full h-[200vh] overflow-hidden"> {/* Increased height to ensure scrolling */}
    {/* Shape 1 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        scale: 3.5,
        borderTopRightRadius: "2vw",
        borderBottomLeftRadius: "2vw",
      }}
      transition={{ duration: 1 }}
      className="relative cursor-pointer text-center items-center justify-center top-0 left-0 w-[100px] h-[100px] rounded-md group overflow-hidden"
      style={{
        background: `url('/photo-gallery/hotel-garden.jpg') no-repeat center center`,
        backgroundSize: "contain",
        x: x1,
        y: y1,
        scale: 3,
      }}
    >
      {/* Text Overlay */}
      <TextOverlay title="Hotel Garden Oasis" subtitle="A peaceful retreat surrounded by greenery, perfect for relaxation." />
    </motion.div>

       {/* Shape 2 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-0 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/hotel-poolside.jpeg') no-repeat center center`, backgroundSize: 'contain',  x: x2, y: y2, scale: 3 }}
    >2</motion.div>

    {/* Shape 3 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute  text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-40 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/hotel-exterior.avif') no-repeat center center`, backgroundSize: 'contain',  x: x3, y: y3, scale: 3}}
    >3</motion.div>

    {/* Shape 4 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute  text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-0 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/beach-dinning.jpeg') no-repeat center center`, backgroundSize: 'contain',  x: x4, y: y4, scale: 3}}
    >4</motion.div>

    {/* Shape 5 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-40 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/rooftop-bar.jpg') no-repeat center center`, backgroundSize: 'contain',  x: x5, y: y5, scale: 3}}
    >5</motion.div>

    {/* Shape 6 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-80 w-[90px] h-[90px] rounded-md"
      style={{ background: `url('/photo-gallery/ocean-suite.jpg') no-repeat center center`, backgroundSize: 'contain',  x: x6, y: y6, scale: 3}}
    >6</motion.div>

    {/* Shape 7 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 right-[6vw] w-[60px] h-[120px] rounded-md"
      style={{ background: `url('/photo-gallery/simple-room.jpg') no-repeat center center`, backgroundSize: 'contain', y: y7, scale: 3}}
    >7</motion.div>

    {/* Shape 8 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/reading-corner.jpeg') no-repeat center center`, backgroundSize: 'contain',  x: x8, y: y8, scale: 3}}
    >8</motion.div>

    {/* Shape 9 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/gym-facility.jpg') no-repeat center center`, backgroundSize: 'contain', x: x9, y: y9, scale: 3}}
    >9</motion.div>

    {/* Shape 10 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[110px] h-[110px] rounded-md"
      style={{ background: `url('/photo-gallery/business-meeting.webp') no-repeat center center`, backgroundSize: 'contain',  x: x10, y: y10, scale: 3}}
    >10</motion.div>

    {/* Shape 11 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/hotel-fountain.jpeg') no-repeat center center`, backgroundSize: 'contain',  x: x11, y: y11, scale: 3}}
    >11</motion.div>

    {/* Shape 12 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/firepit.webp') no-repeat center center`, backgroundSize: 'contain',  x: x12, y: y12, scale: 3}}
    >12</motion.div>

    {/* Shape 13 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[100px] rounded-md"
      style={{ background: `url('/photo-gallery/luxury-spa.png') no-repeat center center`, backgroundSize: 'contain',  x: x13, y: y13, scale: 3}}
    >13</motion.div>

    {/* Shape 14 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[120px] rounded-md"
      style={{ background: `url('/photo-gallery/hotel-lobby.jpeg') no-repeat center center`, backgroundSize: 'contain',  x: x14, y: y14, scale: 3}}
    >14</motion.div>

    {/* Shape 15 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[120px] rounded-md"
      style={{ background: `url('/photo-gallery/mountain-view.jpg') no-repeat center center`, backgroundSize: 'contain',  x: x15, y: y15, scale: 3}}
    >15</motion.div>

     {/* Shape 16 */}
     <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[120px] rounded-md"
      style={{ background: `url('/photo-gallery/dinning.jpg') no-repeat center center`, backgroundSize: 'contain',  x: x16, y: y16, scale: 3}}
    >16</motion.div>

    {/* Shape 17 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[120px] rounded-md"
      style={{ background: `url('/photo-gallery/hotel-architecture.jpg') no-repeat center center`, backgroundSize: 'contain',  x: x17, y: y17, scale: 3}}
    >17</motion.div>

    {/* Shape 18 */}
    <motion.div
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      className="absolute text-white font-bold text-2xl text-center items-center justify-center top-1/5 left-20 w-[100px] h-[120px] rounded-md"
      style={{ background: `url('/photo-gallery/hotel-sleep.avif') no-repeat center center`, backgroundSize: 'contain',  x: x18, y: y18, scale: 3}}
    >18</motion.div>

  </div>
  );
};

export default GallerySection;
