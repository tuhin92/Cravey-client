import React from 'react';
import { FaTruck, FaUtensils, FaRegClock, FaUserFriends, FaHeadset, FaGift } from 'react-icons/fa';
import HelmetWrapper from '../../components/HelmetWrapper';

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="w-12 h-12 text-[#0393B7]" />,
      title: "Fast Delivery",
      description: "Swift doorstep delivery within 30 minutes in your area"
    },
    {
      icon: <FaUtensils className="w-12 h-12 text-[#0393B7]" />,
      title: "Fresh Food",
      description: "We ensure high-quality, fresh ingredients in every meal"
    },
    {
      icon: <FaRegClock className="w-12 h-12 text-[#0393B7]" />,
      title: "24/7 Service",
      description: "Order anytime, we're here to serve you round the clock"
    },
    {
      icon: <FaUserFriends className="w-12 h-12 text-[#0393B7]" />,
      title: "Party Orders",
      description: "Special catering services for events and gatherings"
    },
    {
      icon: <FaHeadset className="w-12 h-12 text-[#0393B7]" />,
      title: "Customer Support",
      description: "Dedicated support team for your queries and feedback"
    },
    {
      icon: <FaGift className="w-12 h-12 text-[#0393B7]" />,
      title: "Loyalty Rewards",
      description: "Earn points with every order and get exciting rewards"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HelmetWrapper title="Cravey | Services" />
      
      {/* Hero Section */}
      <div className="bg-[#0393B7] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Experience the best food delivery service with our premium features and dedicated support
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Cravey for their food delivery needs
          </p>
          <button className="bg-[#0393B7] text-white px-8 py-3 rounded-lg hover:bg-[#0381A1] transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;