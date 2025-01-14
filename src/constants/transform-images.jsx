import {useTransform, useScroll } from "motion/react";

const TransformImages = () => {
    
    const { scrollYProgress } = useScroll(); // Get scroll progress
    
    // image 1 configuration
    const image1 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 275, 25, 275, 175, 225, 25, 75]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [150, 300, 450, 600, 750, 600, 450, 300, 150, 0, -150]),
        title: "Hotel Garden Oasis",
        subtitle: "A peaceful retreat surrounded by greenery, perfect for relaxation."
    };

    // image 2 configuration
    const image2 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [350, 400, 450, 500, 600, 350, 600, 500, 550, 450, 400]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [100, 250, 400, 550, 700, 550, 400, 250, 100, -50, -200]),
        title: "Relaxing Poolside",
        subtitle: "Lounge by the pool and soak in the tranquil surroundings."
    };

    // image 3 configuration
    const image3 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [250, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [100, 250, 400, 550, 700, 550, 400, 250, 100, -50, -200]),
        title: "Elegant Night Views",
        subtitle: "The hotel glows with elegance as night falls, providing a welcoming atmosphere."
    };

    // image 4 configuration
    const image4 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [50, 100, 150, 200, 300, 50, 300, 200, 250, 50, 100]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [50, 100, 150, 200, 250, 300, 350, 400, 450, 100, 200]),
        title: "Beachside Dining",
        subtitle: "Savor exquisite meals with an unbeatable view of the ocean."
    };
  
    // image 5 configuration
    const image5 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [175, 225, 175, 325, 425, 175, 425, 325, 375, 275, 225]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 225, 275, 325, 375, 425, 75, 175]),
        title: "Skyline Rooftop Bar",
        subtitle: "Enjoy stunning views and signature cocktails at our rooftop bar."
    };

    // image 6 configuration
    const image6 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [50, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 225, 275, 325, 375, 425, 75, 175]),
        title: "Oceanview Suite",
        subtitle: "Experience ultimate luxury with breathtaking views from your room."
    };

    // image 7 configuration
    const image7 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250]),
        title: "Budget-Friendly",
        subtitle: "Experience a remarkable budget-friendly stay with our cozy rooms"
    };

    // image 8 configuration
    const image8 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [25, 75, 125, 175, 275, 25, 275, 175, 225, 25, 75]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [300, 325, 350, 375, 400, 425, 450, 475, 500, 500, 400]),
        title: "Quiet Reading Corner",
        subtitle: "Unwind in our quiet corner with your favorite book and a cup of tea."
    };

    // image 9 configuration
    const image9 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [300, 350, 400, 450, 550, 300, 550, 450, 500, 400, 350]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [275, 300, 325, 350, 375, 400, 425, 450, 475, 475, 375]),
        title: "State-of-the-Art Gym",
        subtitle: "Stay fit and active in our fully-equipped fitness center."
    };

    // image 10 configuration
    const image10 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [300, 400, 450, 500, 550, 600, 450, 700, 750, 800, 850]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [250, 275, 300, 325, 350, 375, 400, 425, 450, 450, 350]),
        title: "Business Meeting Room",
        subtitle: "Perfect for corporate events and meetings, with all the facilities you need."
    };

    // image 11 configuration
    const image11 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-300, 0, 0, 100, 300, 500, 550, 100, 0, 300, 0]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [900, 1050, 1200, 1350, 1500, 1350, 1200, 1050, 900, 750, 600]),
        title: "Hotel Courtyard Fountain",
        subtitle: "A tranquil fountain in the courtyard adds a peaceful ambiance."
    };

    // image 12 configuration
    const image12 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-100, -50, 250, 450, 650, 450, 550, 450, 650, 850, 1050]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [800, 950, 1100, 1350, 1400, 1250, 1100, 950, 800, 650, 500]),
        title: "Firepit Lounge",
        subtitle: "Enjoy a relaxing evening by the firepit, perfect for chilly nights."
    };

    // image 13 configuration
    const image13 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [450, 600, 700, 900, 1000, 1150, 1000, 900, 700, 600, 450]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [900, 1050, 1200, 1350, 1500, 1350, 1200, 1050, 900, 750, 600]),
        title: "Luxury Spa Services",
        subtitle: "Rejuvenate and unwind with our indulgent spa treatments."
    };

    // image 14 configuration
    const image14 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-200, 200, 300, 400, 500, 600, 500, 400, 600, 800, 1000]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1000, 1150, 1300, 1450, 1500, 1450, 1300, 1150, 1000, 850, 700]),
        title: "Seasonal Lobby Decor",
        subtitle: "The lobby comes alive with beautiful seasonal decor, bringing a touch of nature indoors."
    };

     // image 15 configuration
     const image15 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [550, 700, 800, 1000, 1100, 1250, 1100, 1000, 800, 700, 550]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1100, 1250, 1400, 1550, 1600, 1550, 1400, 1250, 1100, 950, 800]),
        title: "Mountain View Balcony",
        subtitle: "Gaze at the majestic mountains from the comfort of your private balcony."
    };

     // image 16 configuration
     const image16 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-200, 0, 0, 350, 550, 750, 800, 350, 0, 550, 200]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1150, 1300, 1450, 1600, 1650, 1600, 1450, 1300, 1150, 1000, 850]),
        title: "Gourmet Dining Experience",
        subtitle: "Indulge in gourmet meals served in a chic, contemporary setting."
    };

     // image 17 configuration
     const image17 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [350, 450, 500, 550, 600, 650, 500, 750, 800, 850, 900]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1250, 1400, 1550, 1700, 1750, 1700, 1550, 1400, 1250, 1100, 950]),
        title: "Architectural Elegance",
        subtitle: "Admire the stunning modern architecture that sets our hotel apart."
    };

    // image 18 configuration
    const image18 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [525, 675, 775, 975, 1075, 1225, 1075, 975, 775, 675, 525]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1300, 1450, 1600, 1750, 1800, 1750, 1600, 1450, 1300, 1150, 1000]),
        title: "Comfortable Sleep",
        subtitle: "Experience a restful night sleep with our premium bedding."
    };

    // image 19 configuration
    const image19 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [250, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [150, 300, 450, 600, 750, 600, 450, 300, 150, 0, -150]),
        title: "Deluxe Jacuzzi Suite",
        subtitle: "Indulge in a luxurious stay with your own private jacuzzi and elegant room."
    };

    const image20 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [250, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [150, 300, 450, 600, 750, 600, 450, 300, 150, 0, -150]),
        title: "Modern Hallways",
        subtitle: "Walk through the hotel’s stylish corridors, decorated with contemporary art."
    };

    // image 14 configuration
    const image21 = {
        x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [-200, 200, 300, 400, 500, 600, 500, 400, 600, 800, 1000]),
        y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1000, 1150, 1300, 1450, 1500, 1450, 1300, 1150, 1000, 850, 700]),
        title: "Stylish Hotel Bar",
        subtitle: "Relax and sip on your favorite drink in a chic, cozy bar setting."
    };

    return { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21  }
}

export default TransformImages;