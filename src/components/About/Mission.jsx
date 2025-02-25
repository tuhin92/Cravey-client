import React from 'react';
import { motion } from "framer-motion";

const Mission = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };
    return (
        <motion.div 
        className="py-16 bg-white"
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Cravey, we're passionate about delivering not just food, but experiences. 
            Every dish we prepare is a testament to our commitment to quality, freshness, and taste.
          </p>
        </div>
      </motion.div>
    );
};

export default Mission;