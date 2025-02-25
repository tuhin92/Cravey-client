import React from "react";
import { motion } from "framer-motion";
import { Carousel } from 'antd';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Hero = () => {
  const carouselImages = [
    {
      image: "https://res.cloudinary.com/dczruyxsx/image/upload/v1740495181/elegant-wooden-dining-room-with-modern-lighting-generated-by-ai_188544-29879_jfm7as.jpg",
      title: "About Cravey",
      subtitle: "Delivering Culinary Excellence Since 2020"
    },
    {
      image: "https://res.cloudinary.com/dczruyxsx/image/upload/v1740495393/restaurant-table-setting-with-cutlery-crockery_384344-5474_qkv1nc.jpg",
      title: "Our Story",
      subtitle: "Creating Memorable Dining Experiences"
    },
    {
      image: "https://res.cloudinary.com/dczruyxsx/image/upload/v1740495437/modern-elegant-living-room-with-comfortable-sofa-chair-generated-by-artificial-intelligence_188544-85062_cod3pp.jpg",
      title: "Our Mission",
      subtitle: "Bringing Quality Food to Your Doorstep"
    }
  ];

  return (
    <div className="relative h-[60vh] overflow-hidden">
      <Carousel autoplay className="h-full">
        {carouselImages.map((item, index) => (
          <div key={index} className="relative h-[60vh]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-[#0393B7] bg-opacity-70"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Content */}
            <motion.div
              className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={fadeIn.transition}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                {item.subtitle}
              </p>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
