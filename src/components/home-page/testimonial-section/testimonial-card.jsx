import Image from 'next/image'; // Assuming you're using Next.js Image component
import { motion } from 'framer-motion'; // Correcting the import for Framer Motion

const TestimonialCard = ({ userImage, userName, review, rating }) => {
  // Generate stars with appropriate fill levels based on the decimal rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        // Full star
        stars.push(
          <div key={i} className="relative w-4 h-4 text-yellow-500 inline-block">
            <span>★</span>
          </div>
        );
      } else if (rating > i && rating < i + 1) {
        // Partial star (based on the decimal part)
        const fillPercentage = (rating - i) * 100; // Calculate fill percentage
        stars.push(
          <div
            key={i}
            className="relative w-4 h-4 inline-block text-gray-300"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            {/* Empty star as background */}
            <span>★</span>
            {/* Overlay the filled part */}
            <div
              className="absolute top-0 left-0 h-full text-yellow-500"
              style={{
                width: `${fillPercentage}%`,
                overflow: 'hidden',
              }}
            >
              <span>★</span>
            </div>
          </div>
        );
      } else {
        // Empty star
        stars.push(
          <div key={i} className="relative w-4 h-4 text-gray-300 inline-block">
            <span>★</span>
          </div>
        );
      }
    }
    return stars;
  };

  return (
    <motion.div
      className="shadow-lg rounded-lg p-6 w-1/3 h-1/1 mx-auto "
      whileHover={{ backgroundColor: '#1E3A8A', color: 'white', borderTopRightRadius: "2vw", borderBottomLeftRadius: "2vw" }} transition={{duration: 0.5, ease: "easeInOut"}} // Use the primary color for the background and white for the text on hover
    >
      <div className="flex items-center space-x-4">
        {/* User profile image */}
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image src={userImage} alt={`${userName}'s profile`} width={64} height={64} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{userName}</h3>
          <div className="flex space-x-0.5 scale-150 mx-6">{renderStars()}</div>
        </div>
      </div>

      {/* Review text */}
      <p className="mt-4 italic">&ldquo;{review}&rdquo;</p>
    </motion.div>
  );
};

export default TestimonialCard;
