import { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../../data/galleryData';
import Lightbox from './Lightbox';

const Gallery = ({ id }) => {
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (index) => {
    setCurrentImage(index);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-4xl md:text-5xl text-center text-text-primary mb-16">
          Gallery
        </h2>

        {/* Grid */}
        <div className="grid gap-6">
          {/* We'll create an asymmetric layout using column spans */}
          {/* For simplicity, we'll use a basic grid and adjust with item styles */}
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group cursor-pointer rounded-xl overflow-hidden border border-surface/20 hover:border-gold-accent/50 transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-48 overflow-hidden bg-surface/30"
                style={{
                  '--color-from': item.colorFrom,
                  '--color-to': item.colorTo
                }}
              >
                {item.images?.length ? (
                  <img
                    src={item.images[0]}
                    alt={item.label}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-from)] to-[var(--color-to)]" />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-text-primary font-medium">{item.label}</span>
                    <svg className="h-5 w-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-text-primary">{item.label}</h3>
                <p className="text-text-sm text-text-muted mt-1">Explore our gallery</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {currentImage !== null && (
          <Lightbox
            index={currentImage}
            onClose={closeLightbox}
            galleryData={galleryData}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;