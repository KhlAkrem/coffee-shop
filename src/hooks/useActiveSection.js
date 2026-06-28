import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sections, threshold = 0.3) => {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { threshold, rootMargin: '-100px 0px -80% 0px' }
    );

    // Observe each section
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        sectionRefs.current[id] = element;
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [sections, threshold]);

  return activeSection;
};
