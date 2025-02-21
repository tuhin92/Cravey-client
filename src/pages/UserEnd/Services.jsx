import React from "react";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaUtensils,
  FaRegClock,
  FaUserFriends,
  FaHeadset,
  FaGift,
} from "react-icons/fa";
import HelmetWrapper from "../../components/HelmetWrapper";
import { Button } from "../../components/ui/moving-border";
import { Link } from "react-router-dom";

const Services = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FaTruck className="w-12 h-12 text-[#0393B7]" />,
      title: "Fast Delivery",
      description: "Swift doorstep delivery within 30 minutes in your area",
    },
    {
      icon: <FaUtensils className="w-12 h-12 text-[#0393B7]" />,
      title: "Fresh Food",
      description: "We ensure high-quality, fresh ingredients in every meal",
    },
    {
      icon: <FaRegClock className="w-12 h-12 text-[#0393B7]" />,
      title: "24/7 Service",
      description: "Order anytime, we're here to serve you round the clock",
    },
    {
      icon: <FaUserFriends className="w-12 h-12 text-[#0393B7]" />,
      title: "Party Orders",
      description: "Special catering services for events and gatherings",
    },
    {
      icon: <FaHeadset className="w-12 h-12 text-[#0393B7]" />,
      title: "Customer Support",
      description: "Dedicated support team for your queries and feedback",
    },
    {
      icon: <FaGift className="w-12 h-12 text-[#0393B7]" />,
      title: "Loyalty Rewards",
      description: "Earn points with every order and get exciting rewards",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HelmetWrapper title="Cravey | Services" />

      {/* Hero Section with Animation */}
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

      {/* Services Grid with Stagger Animation */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-[#0393B7]/10 p-4 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action with Animation */}
      <motion.div 
        className="bg-gray-100 py-16"
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Cravey for their
            food delivery needs
          </p>
          <Link to="/shop">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                borderRadius="1.75rem"
                className="text-[#0393B7] bg-slate-200 font-bold hover:bg-[#0393B7] hover:text-white transition-colors duration-300"
              >
                Order Now
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
