import { useState, useEffect } from "react";

export const useScrollTransition = (targetColor: string = "#BDDBDA") => {
  const [transition, setTransition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate how far we've scrolled as a percentage
      const scrollPercent = Math.min(
        scrollTop / (documentHeight - windowHeight),
        1
      );

      // Apply easing function for smoother transition
      const easedTransition = scrollPercent * scrollPercent;

      setTransition(easedTransition);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetColor]);

  return transition;
};

// Keep the old hook for backward compatibility
export const useScrollDarken = (maxDarkness: number = 0.7) => {
  const [darkness, setDarkness] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate how far we've scrolled as a percentage
      const scrollPercent = Math.min(
        scrollTop / (documentHeight - windowHeight),
        1
      );

      // Apply easing function for smoother transition
      const easedDarkness = scrollPercent * scrollPercent * maxDarkness;

      setDarkness(easedDarkness);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxDarkness]);

  return darkness;
};
