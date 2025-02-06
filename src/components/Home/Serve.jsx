import React from "react";
import { motion } from "framer-motion";

const CircularImage = ({ src, alt, title, description, arcColors, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-64 p-4"
  >
    <motion.div 
      className="relative w-48 h-48 mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="white" className="drop-shadow-md" />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: index * 0.3 }}
          d={`M50,2 A48,48 0 0,1 98,50`}
          fill="none"
          stroke={arcColors[0]}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: index * 0.3 + 0.2 }}
          d={`M98,50 A48,48 0 0,1 50,98`}
          fill="none"
          stroke={arcColors[1]}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: index * 0.3 + 0.4 }}
          d={`M50,98 A48,48 0 0,1 2,50`}
          fill="none"
          stroke={arcColors[2]}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <motion.div 
        className="absolute inset-3 flex items-center justify-center bg-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-36 h-36 object-contain p-2"
        />
      </motion.div>
    </motion.div>
    <motion.div 
      className="mt-6 space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.3 + 0.6 }}
    >
      <h2 className="font-bold text-xl text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">{description}</p>
    </motion.div>
  </motion.div>
);

const Serve = () => {
  const services = [
    {
      src: "https://i.ibb.co.com/1ZyPjRL/paper-coffee-bag-mockup-58466-11147-removebg-preview.png",
      alt: "Paper coffee bag",
      title: "Automated Packaging",
      description: "100% environment friendly packaging with sustainable materials",
      arcColors: ["#FCD34D", "#10B981", "#EF4444"],
    },
    {
      src: "https://i.ibb.co.com/4jmVqL7/cake-box-removebg-preview.png",
      alt: "Cake box",
      title: "Packed with Love",
      description: "Carefully prepared and packaged for the best dining experience",
      arcColors: ["#EF4444", "#10B981", "#FCD34D"],
    },
    {
      src: "https://i.ibb.co.com/MhsdtBC/Chicken-box-removebg-preview.png",
      alt: "Chicken box",
      title: "Served Hot & Fresh",
      description: "Guaranteed delivery within 30 minutes or it's free",
      arcColors: ["#10B981", "#FCD34D", "#EF4444"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16 "
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        How We <span className="text-blue-500">Serve</span> You
      </motion.h2>
      <div className="flex flex-wrap justify-center items-start gap-8">
        {services.map((service, index) => (
          <CircularImage
            key={index}
            {...service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Serve;