import { motion } from 'framer-motion';
import { HiOutlineHashtag } from 'react-icons/hi';

const About = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">Our Story</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Founded in 2019, Coffee Shop was born from a passion for blending the rich coffee traditions of Algeria with the elegant café culture of Paris. Located in the heart of Didouche Mourad, our space brings together the warmth of Algerian hospitality and the refined artistry of French pastry.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Every day, we source the finest local ingredients to create authentic Algerian mint tea, freshly baked pastries, and classic French dishes. Our menu is a journey through the streets of Algiers and the boulevards of Paris, offering a unique fusion that delights the senses.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-text-primary text-xs font-semibold leading-none">2019</span>
                </div>
                <div>
                  <p className="text-text-sm font-medium">Established</p>
                  <p className="text-text-secondary">2019</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-text-primary text-xs font-semibold leading-none">500+</span>
                </div>
                <div>
                  <p className="text-text-sm font-medium">Daily Guests</p>
                  <p className="text-text-secondary">500+</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-text-primary text-xs font-semibold leading-none">100%</span>
                </div>
                <div>
                  <p className="text-text-sm font-medium">Local Ingredients</p>
                  <p className="text-text-secondary">100%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative h-96 overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="/ourStory.jpg"
              alt="Our Story"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;