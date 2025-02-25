import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const CTASection = () => {
    const navigate = useNavigate();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <motion.div
      className="bg-gray-50 py-16"
      initial={fadeIn.initial}
      whileInView={fadeIn.animate}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Experience Our Food?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers and discover why Cravey is the
          preferred choice for food delivery
        </p>
        <motion.button
          onClick={() => navigate("/shop")}
          className="bg-[#0393B7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0381A1] transition-colors duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CTASection;
