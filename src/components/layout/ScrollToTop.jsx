import { useState, useEffect } from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gold-accent/90 backdrop-blur-sm rounded-full hover:bg-gold-accent transition-all duration-300 transform hover:scale-110 hover:drop-shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FiArrowUpCircle size={24} className="text-background-primary" />
    </motion.button>
  );
};

export default ScrollToTop;
