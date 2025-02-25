import { motion } from "framer-motion";
import {
  FaTruck,
  FaUtensils,
  FaRegClock,
  FaUserFriends,
  FaHeadset,
  FaGift,
} from "react-icons/fa";

const ServiceGrid = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <FaTruck className="w-12 h-12 text-[#0393B7]" />,
      title: "Fast Delivery",
      description: "Swift doorstep delivery within 30 minutes in your area",
    },
    {
      icon: <FaUtensils className="w-12 h-12 text-[#0393B7]" />,
      title: "Quality Food",
      description: "Fresh ingredients and expert chefs ensure top-quality meals",
    },
    {
      icon: <FaRegClock className="w-12 h-12 text-[#0393B7]" />,
      title: "24/7 Service",
      description: "Round-the-clock service to satisfy your cravings anytime",
    },
    {
      icon: <FaUserFriends className="w-12 h-12 text-[#0393B7]" />,
      title: "Group Orders",
      description: "Special handling for large groups and corporate orders",
    },
    {
      icon: <FaHeadset className="w-12 h-12 text-[#0393B7]" />,
      title: "Live Support",
      description: "Dedicated customer service team at your service",
    },
    {
      icon: <FaGift className="w-12 h-12 text-[#0393B7]" />,
      title: "Special Offers",
      description: "Regular promotions and loyalty rewards for our customers",
    }
  ];

  return (
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
  );
};

export default ServiceGrid;