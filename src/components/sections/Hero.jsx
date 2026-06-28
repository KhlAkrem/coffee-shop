import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = ({ id }) => {
  const [timeOfDay, setTimeOfDay] = useState('day'); // day or night

  useEffect(() => {
    const updateTime = () => {
      const hour = new Date().getHours();
      setTimeOfDay(hour >= 6 && hour < 18 ? 'day' : 'night');
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Background */}
      <div id={id} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pb-8">
        {/* Gradient Background with Arabesque Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-primary to-background-secondary" />
          {/* Arabesque SVG Pattern */}
          <svg className="absolute inset-0 opacity-5" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="arabesque" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M10 0 L15 5 L20 0 L25 5 L30 0 L35 5 L40 0 L45 5 L50 0 L55 5 L60 0 L65 5 L70 0 L75 5 L80 0 L85 5 L90 0 L95 5 L100 10 L95 15 L90 10 L85 15 L80 10 L75 15 L70 10 L65 15 L60 10 L55 15 L50 10 L45 15 L40 10 L35 15 L30 10 L25 15 L20 10 L15 15 L10 10 L5 15 Z M0 10 L5 15 L0 20 L5 25 L0 30 L5 35 L0 40 L5 45 L0 50 L5 55 L0 60 L5 65 L0 70 L5 75 L0 80 L5 85 L0 90 L5 95 L0 100 L5 95 L0 90 L5 85 L0 80 L5 75 L0 70 L5 65 L0 60 L5 55 L0 50 L5 45 L0 40 L5 35 L0 30 L5 25 L0 20 L5 15 M10 30 L15 35 L20 30 L25 35 L30 30 L35 35 L40 30 L45 35 L50 30 L55 35 L60 30 L65 35 L70 30 L75 35 L80 30 L85 35 L90 30 L95 35 L100 40 L95 45 L90 40 L85 45 L80 40 L75 45 L70 40 L65 45 L60 40 L55 45 L50 40 L45 45 L40 40 L35 45 L30 40 L25 45 L20 40 L15 45 L10 40 L5 45 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arabesque)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-8 pb-10 text-center">
          {/* Animated Logo */}
          <motion.img
            src="/coffee_logo.svg"
            alt="Coffee Logo"
            className="h-36 w-48 mb-0"
            initial={{ y: -20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          />
          {/* Animated Headline */}
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            Every cup has a story.
          </motion.h1>
          <p className="text-text-secondary max-w-2xl mb-10">
            A fusion café experience in the heart of Algiers
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#menu"
              className="px-8 py-3 rounded-lg bg-gold-accent text-background-primary font-semibold hover:bg-gold-light transition-all duration-300 transform hover:scale-105 active:scale-95"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Explore Our Menu
            </motion.a>
            <motion.a
              href="#reservation"
              className="px-8 py-3 rounded-lg border-2 border-gold-accent text-gold-accent font-semibold hover:bg-gold-accent hover:text-background-primary transition-all duration-300 transform hover:scale-105 active:scale-95"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Reserve a Table
            </motion.a>
          </div>

          {/* Floating Cards */}
          <div className="relative mt-14 flex flex-wrap items-stretch justify-center gap-4 overflow-hidden">
            {/* Today's Special */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative w-full sm:w-auto flex-shrink-0 min-w-[280px] max-w-[320px] flex items-center space-x-3 bg-surface/50 backdrop-blur-sm rounded-xl p-4 border border-surface/20"
            >
              <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-gold-accent to-gold-light rounded-full flex items-center justify-center">
                <span className="text-text-primary font-bold">☕</span>
              </div>
              <div>
                <p className="text-text-sm font-medium">Today's Special</p>
                <p className="text-text-secondary">Algerian Mint Tea + Croissant</p>
              </div>
            </motion.div>

            {/* Opening Hours Today */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="relative flex-shrink-0 min-w-[280px] max-w-[320px] flex items-center space-x-3 bg-surface/50 backdrop-blur-sm rounded-xl p-4 border border-surface/20"
            >
              <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-gold-accent to-gold-light rounded-full flex items-center justify-center">
                <span className="text-text-primary font-bold">🕒</span>
              </div>
              <div>
                <p className="text-text-sm font-medium">Today's Hours</p>
                <p className="text-text-secondary">{timeOfDay === 'day' ? 'Open until 10:00 PM' : 'Closed - Opens 7:00 AM'}</p>
              </div>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="relative flex-shrink-0 min-w-[280px] max-w-[320px] flex items-center space-x-3 bg-surface/50 backdrop-blur-sm rounded-xl p-4 border border-surface/20"
            >
              <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-gold-accent to-gold-light rounded-full flex items-center justify-center">
                <span className="text-text-primary font-bold">⭐</span>
              </div>
              <div>
                <p className="text-text-sm font-medium">Customer Rating</p>
                <p className="text-text-secondary">4.9 ★</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;