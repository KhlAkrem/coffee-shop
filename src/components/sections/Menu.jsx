import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../../data/menuData';
import Badge from '../ui/Badge';

const Menu = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(menuData.map(item => item.category))];

  const filteredItems = menuData.filter(item =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-4xl md:text-5xl text-center text-text-primary mb-12">
          Our Menu
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-base font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'border-b-2 border-gold-accent text-text-primary'
                  : 'border-b-2 border-transparent text-text-muted hover:border-gold-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface/20 hover:border-gold-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Emoji/Icon Placeholder */}
                  <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-gold-accent to-gold-light rounded-lg flex items-center justify-center text-text-primary">
                    {item.emoji}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-text-primary">{item.name}</h3>
                      <span className="badge badge-outline">{item.price}</span>
                    </div>
                    <p className="text-text-secondary line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant={
                            tag === '🌱 Vegan' ? 'vegan' :
                            tag === '⭐ Best Seller' ? 'bestseller' :
                            'default'
                          }
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;