import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/moving-border";

const CallToAction = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
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
  );
};

export default CallToAction;