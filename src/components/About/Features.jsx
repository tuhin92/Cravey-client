import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaLeaf,
  FaTruck,
  FaHeart,
  FaAward,
  FaClock,
} from "react-icons/fa";

const Features = () => {
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#0393B7]/10 rounded-full mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
