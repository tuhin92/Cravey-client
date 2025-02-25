import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Founded in 2020, Cravey emerged from a simple yet powerful
                vision: to revolutionize food delivery while maintaining
                restaurant-quality taste and freshness.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of customers, partnering
                with the best local restaurants and employing a team of
                dedicated food enthusiasts who share our passion for culinary
                excellence.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3"
              alt="Restaurant kitchen"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
