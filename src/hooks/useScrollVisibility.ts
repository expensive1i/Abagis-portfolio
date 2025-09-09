import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll-based visibility
 * Shows/hides element based on scroll position
 * 
 * @param threshold - Scroll position threshold in pixels
 * @returns Object with isVisible state
 */
export const useScrollVisibility = (threshold: number = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [threshold]);

  return { isVisible };
};
