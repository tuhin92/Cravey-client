import React from "react";
import { motion } from "framer-motion";
import {
    FaUtensils,
    FaUsers,
    FaLeaf,
    FaStar,
  } from "react-icons/fa";

const StatsSection = () => {
    const stats = [
        { number: "25K+", label: "Happy Customers", icon: <FaUsers className="h-6 w-6" /> },
        { number: "100+", label: "Expert Chefs", icon: <FaUtensils className="h-6 w-6" /> },
        { number: "250+", label: "Menu Items", icon: <FaLeaf className="h-6 w-6" /> },
        { number: "4.9", label: "Customer Rating", icon: <FaStar className="h-6 w-6" /> }
      ];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };
  return (
    <div className="bg-[#0393B7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-3 text-white/90">
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </p>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
