import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative bg-[#0393B7] text-white py-16 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Services
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          Experience the best food delivery service with our premium features
          and dedicated support
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;