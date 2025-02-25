import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUtensils,
  FaLeaf,
  FaTruck,
  FaHeart,
  FaAward,
  FaClock,
} from "react-icons/fa";
import { useState } from "react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <FaUtensils className="h-8 w-8 text-[#0393B7]" />,
      title: "Culinary Excellence",
      description:
        "Creating unique, mouth-watering dishes with passion and precision.",
    },
    {
      icon: <FaHeart className="h-8 w-8 text-[#0393B7]" />,
      title: "Made with Love",
      description: "Every dish is prepared with care and attention to detail.",
    },
    {
      icon: <FaLeaf className="h-8 w-8 text-[#0393B7]" />,
      title: "Fresh Ingredients",
      description: "Using only the finest local and organic ingredients daily.",
    },
    {
      icon: <FaTruck className="h-8 w-8 text-[#0393B7]" />,
      title: "Swift Delivery",
      description: "Hot and fresh food delivered right to your doorstep.",
    },
    {
      icon: <FaAward className="h-8 w-8 text-[#0393B7]" />,
      title: "Best Quality",
      description: "Award-winning recipes and service excellence.",
    },
    {
      icon: <FaClock className="h-8 w-8 text-[#0393B7]" />,
      title: "24/7 Service",
      description: "Always here to serve you, any time of day.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-[#0393B7]/5 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <motion.div
                className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent group-hover:border-[#0393B7]/20 relative z-20 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative z-50 p-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#0393B7]/10 rounded-full mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
