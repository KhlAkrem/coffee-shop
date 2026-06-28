import { useState } from 'react';
import { motion } from 'framer-motion';

const Lightbox = ({ index, onClose, galleryData }) => {
  const item = galleryData[index];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = item?.images?.length ? item.images : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-background-secondary/90 backdrop-blur-sm"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Background */}
        {images.length ? (
          <div className="relative h-80 overflow-hidden bg-background-secondary">
            <img
              src={images[activeImageIndex]}
              alt={item.label}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="relative h-64 bg-gradient-to-tr from-[var(--color-from)] to-[var(--color-to)]"
            style={{
              '--color-from': item.colorFrom,
              '--color-to': item.colorTo
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-text-primary text-2xl">
              {item.label}
            </div>
          </div>
        )}

        {/* Image Info */}
        <div className="p-6">
          <h3 className="font-medium text-text-primary mb-2">{item.label}</h3>
          <p className="text-text-muted mb-4">Explore our gallery</p>
          {images.length > 1 && (
            <div className="flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`h-3 w-3 rounded-full transition-colors ${i === activeImageIndex ? 'bg-gold-accent' : 'bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;