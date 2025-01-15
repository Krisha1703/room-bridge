import TestimonialCard from "./testimonial-card";
import testimonials from "@/constants/guest-testimonials";
import { motion } from "framer-motion";

const TestimonialSection = () => {

  return (
    <section className="p-10 justify-items-center items-center justify-center  overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-10 text-primary">What Our Guests Say?</h2>
      
      <div className="flex gap-6 mb-10">
        
          <TestimonialCard 
            userName={testimonials[0].userName}
            userImage={testimonials[0].userImage}
            rating={testimonials[0].rating}
            review={testimonials[0].review}
          />


        <TestimonialCard 
          userName={testimonials[1].userName}
          userImage={testimonials[1].userImage}
          rating={testimonials[1].rating}
          review={testimonials[1].review}
        />

        <TestimonialCard 
          userName={testimonials[2].userName}
          userImage={testimonials[2].userImage}
          rating={testimonials[2].rating}
          review={testimonials[2].review}
        />
      </div>

      <div className="flex gap-6">
        <TestimonialCard 
          userName={testimonials[3].userName}
          userImage={testimonials[3].userImage}
          rating={testimonials[3].rating}
          review={testimonials[3].review}
        />

        <TestimonialCard 
          userName={testimonials[4].userName}
          userImage={testimonials[4].userImage}
          rating={testimonials[4].rating}
          review={testimonials[4].review}
        />

        <TestimonialCard 
          userName={testimonials[5].userName}
          userImage={testimonials[5].userImage}
          rating={testimonials[5].rating}
          review={testimonials[5].review}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
