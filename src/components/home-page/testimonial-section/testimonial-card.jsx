import Image from 'next/image'; // Assuming you're using Next.js Image component

const TestimonialCard = ({ userImage, userName, review, rating }) => {
  const starRating = Array(rating).fill('★').join(''); // Generate the star rating
  
  return (
    <div className=" shadow-lg rounded-lg p-6 w-12/12 h-3/4 mx-auto">
      <div className="flex items-center space-x-4">
        {/* User profile image */}
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image src={userImage} alt={`${userName}'s profile`} width={64} height={64} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{userName}</h3>
          <div className="text-yellow-500">{starRating}</div>
        </div>
      </div>
      
      {/* Review text */}
      <p className="mt-4 text-gray-700 italic">&ldquo;{review}&rdquo;</p>
    </div>
  );
};

export default TestimonialCard;
