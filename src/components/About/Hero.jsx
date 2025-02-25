import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Hero = () => {
  return (
    <div className="relative h-[60vh] bg-[#0393B7] overflow-hidden">
      <div className="absolute" /> {/* Note: This empty div can be removed if not used */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About Cravey
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
          Delivering Culinary Excellence Since 2020
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
