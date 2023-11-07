import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function useScrollAnimation(triggerPosition, resetPosition) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > triggerPosition) {
        setShouldAnimate(true);
      } else if (scrollPosition < resetPosition) {
        setShouldAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerPosition, resetPosition]);

  return shouldAnimate;
}

export default function WithScrollAnimation({
  children,
  triggerPosition,
  resetPosition,
}) {
  const shouldAnimate = useScrollAnimation(triggerPosition, resetPosition);

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
