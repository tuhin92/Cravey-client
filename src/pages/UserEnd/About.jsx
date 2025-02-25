import { FaUtensils, FaUsers, FaLeaf, FaTruck, FaStar, FaHeart, FaAward, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import HelmetWrapper from "../../components/HelmetWrapper";
import { useNavigate } from 'react-router-dom';
import Hero from "../../components/About/Hero";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaUtensils className="h-8 w-8 text-[#0393B7]" />,
      title: "Culinary Excellence",
      description: "Creating unique, mouth-watering dishes with passion and precision."
    },
    {
      icon: <FaHeart className="h-8 w-8 text-[#0393B7]" />,
      title: "Made with Love",
      description: "Every dish is prepared with care and attention to detail."
    },
    {
      icon: <FaLeaf className="h-8 w-8 text-[#0393B7]" />,
      title: "Fresh Ingredients",
      description: "Using only the finest local and organic ingredients daily."
    },
    {
      icon: <FaTruck className="h-8 w-8 text-[#0393B7]" />,
      title: "Swift Delivery",
      description: "Hot and fresh food delivered right to your doorstep."
    },
    {
      icon: <FaAward className="h-8 w-8 text-[#0393B7]" />,
      title: "Best Quality",
      description: "Award-winning recipes and service excellence."
    },
    {
      icon: <FaClock className="h-8 w-8 text-[#0393B7]" />,
      title: "24/7 Service",
      description: "Always here to serve you, any time of day."
    }
  ];

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
    <>
      <HelmetWrapper title="Cravey | About Us" />
      
      {/* Hero Section with Parallax Effect */}
      <Hero />

      {/* Mission Statement */}
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

      {/* Features Grid with Animation */}
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
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section with Icons */}
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
                <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section with Image */}
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
                  Founded in 2020, Cravey emerged from a simple yet powerful vision: to revolutionize 
                  food delivery while maintaining restaurant-quality taste and freshness.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to serve thousands of customers, partnering with the best local 
                  restaurants and employing a team of dedicated food enthusiasts who share our passion 
                  for culinary excellence.
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

      {/* Enhanced CTA Section */}
      <motion.div 
        className="bg-gray-50 py-16"
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Food?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover why Cravey is the preferred choice for food delivery
          </p>
          <motion.button 
            onClick={() => navigate('/shop')}
            className="bg-[#0393B7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0381A1] transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default About;