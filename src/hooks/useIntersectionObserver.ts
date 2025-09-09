import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for intersection observer functionality
 * Provides visibility state and ref for scroll-triggered animations
 * 
 * @param threshold - Intersection ratio threshold (0-1)
 * @returns Object with isVisible state and ref to attach to element
 */
export const useIntersectionObserver = (threshold: number = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { isVisible, ref };
};
