import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { reviewsData } from '../../data/reviewsData';

const Reviews = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % reviewsData.length);
      }, 10000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isHovered]);

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-4xl md:text-5xl text-center text-text-primary mb-16">
          What Our Guests Say
        </h2>

        {/* Carousel Track */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-96 overflow-hidden"
        >
          <motion.div
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            className="flex transition-transform duration-1000 ease-in-out"
          >
            {reviewsData.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-full flex flex-col items-center p-8 bg-surface/50 backdrop-blur-sm rounded-2xl border border-surface/20"
              >
                <div className="text-5xl mb-6 text-text-secondary">"</div>
                <p className="text-text-secondary text-lg mb-6 max-w-xl text-center italic line-clamp-4">
                  {review.text}
                </p>
                <div className="flex items-center space-x-4 text-text-primary">
                  <div className="flex h-10 w-10 items-center justify-center bg-gold-accent/20 text-gold-accent rounded-full text-sm font-medium">
                    {review.avatar}
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="font-medium">{review.reviewer}</h3>
                    <p className="text-text-sm">{review.type}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className="text-gold-accent">
                      {star <= review.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? 'bg-brand-mid'
                  : 'bg-brand-mid/30'
              } hover:bg-brand-mid/50 transition-colors`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;