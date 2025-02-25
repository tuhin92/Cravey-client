import { motion } from "framer-motion";
import HelmetWrapper from "../../components/HelmetWrapper";
import { useNavigate } from 'react-router-dom';
import Hero from "../../components/About/Hero";
import Features from "../../components/About/Features";
import Mission from "../../components/About/Mission";
import StatsSection from "../../components/About/StatsSection";

const About = () => {
  const navigate = useNavigate();


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
      <Mission />
      {/* Features Grid with Animation */}
      <Features />
      {/* Stats Section with Icons */}
      <StatsSection />

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