import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTv } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface/50 mt-20">
      <div className="px-6 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
          <div className="flex items-center space-x-3 mb-6 lg:mb-0">
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
          <p className="text-text-sm">A fusion café experience in the heart of Algiers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 lg:pt-0">
          <div>
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-text-muted hover:text-text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-text-muted hover:text-text-primary transition-colors">About</a></li>
              <li><a href="#menu" className="text-text-muted hover:text-text-primary transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-text-muted hover:text-text-primary transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-text-muted hover:text-text-primary transition-colors">Reviews</a></li>
              <li><a href="#location" className="text-text-muted hover:text-text-primary transition-colors">Find Us</a></li>
              <li><a href="#reservation" className="text-text-muted hover:text-text-primary transition-colors">Reserve a Table</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-text-muted">Monday–Friday:</span>
                <span className="text-text-primary">7:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-text-muted">Saturday:</span>
                <span className="text-text-primary">8:00 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-text-muted">Sunday:</span>
                <span className="text-text-primary">9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FiMapPin className="h-4 w-4 text-gold-accent" />
                <span>Didouche Mourad Street, Algiers, Algeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="h-4 w-4 text-gold-accent" />
                <span>+213 21 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="h-4 w-4 text-gold-accent" />
                <a href="mailto:contact@Coffee.dz" className="text-text-muted hover:text-text-primary transition-colors">contact@Coffee.dz</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full px-6 lg:px-12 text-center text-text-sm">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <FiInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <FiFacebook className="h-5 w-5" />
            </a>
            
            <a href="https://maps.app.goo.gl/rYRTTWvTnn7iYd856" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <FiMapPin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-text-sm">© {currentYear} Coffee — Crafted in Algiers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;