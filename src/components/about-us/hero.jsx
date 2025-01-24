import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/photo-gallery/welcoming.jpg" 
          alt="Hotel Lobby"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
          quality={100}
        />
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-secondary">Room</span><span className="text-primary">Bridge</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover seamless hotel bookings and unmatched experiences. Let us
          redefine your travel journey.
        </p>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;
