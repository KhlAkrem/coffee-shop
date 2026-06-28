import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'menu', 'gallery', 'reviews', 'location', 'reservation']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
          isScrolled
            ? 'bg-background-secondary/80 backdrop-blur-sm border-b border-surface'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center space-x-3">
          <a href="#home" className="flex items-center space-x-2">
            <motion.img
              src="/coffee_logo.svg"
              alt="Coffee Logo"
              className="h-24 w-24"
              initial={{ y: -10, opacity: 0, scale: 0.85 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {/* Nav Links */}
          <a
            href="#home"
            className={`nav-link transition-colors hover:text-gold-accent ${
              activeSection === 'home' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link transition-colors hover:text-gold-accent ${
              activeSection === 'about' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
            }`}
          >
            About
          </a>
          <a
            href="#menu"
            className={`nav-link transition-colors hover:text-gold-accent ${
              activeSection === 'menu' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
            }`}
          >
            Menu
          </a>
          <a
            href="#gallery"
            className={`nav-link transition-colors hover:text-gold-accent ${
              activeSection === 'gallery' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
            }`}
          >
            Gallery
          </a>
          <a
            href="#reviews"
            className={`nav-link transition-colors hover:text-gold-accent ${
              activeSection === 'reviews' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
            }`}
          >
            Reviews
          </a>
          <a
            href="#location"
            className={`nav-link transition-colors hover:text-gold-accent ${
              activeSection === 'location' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
            }`}
          >
            Find Us
          </a>
          <a
            href="#reservation"
            className="inline-block px-4 py-2 rounded-full border-2 border-brand-mid text-brand-mid bg-transparent hover:bg-brand-mid hover:text-text-primary transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Reserve a Table
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-text-primary hover:text-gold-accent"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-8 w-8" />
            ) : (
              <FiMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background-secondary/95 backdrop-blur-sm"
          >
            <motion.ul
              className="flex flex-col space-y-6 text-center text-2xl font-display"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <a
                  href="#home"
                  className={`nav-link block py-2 ${
                    activeSection === 'home' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
                  }`}
                >
                  Home
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <a
                  href="#about"
                  className={`nav-link block py-2 ${
                    activeSection === 'about' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
                  }`}
                >
                  About
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <a
                  href="#menu"
                  className={`nav-link block py-2 ${
                    activeSection === 'menu' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
                  }`}
                >
                  Menu
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <a
                  href="#gallery"
                  className={`nav-link block py-2 ${
                    activeSection === 'gallery' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
                  }`}
                >
                  Gallery
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <a
                  href="#reviews"
                  className={`nav-link block py-2 ${
                    activeSection === 'reviews' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
                  }`}
                >
                  Reviews
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <a
                  href="#location"
                  className={`nav-link block py-2 ${
                    activeSection === 'location' ? 'border-b-2 border-gold-accent text-text-primary' : 'text-text-muted'
                  }`}
                >
                  Find Us
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <a
                  href="#reservation"
                  className={`block py-2 px-6 rounded-lg border-2 border-brand-mid text-brand-mid bg-transparent mx-4 transition-colors duration-150 hover:bg-brand-mid hover:text-text-primary ${
                    activeSection === 'reservation' ? 'ring-2 ring-brand-mid/30' : ''
                  }`}
                >
                  Reserve a Table
                </a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;