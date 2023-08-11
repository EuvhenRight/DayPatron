import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTextWord = ({ text }) => {
  const words = text.split(' ');

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.55, delayChildren: 0.5 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      y: 22,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 5,
        stiffness: 10, // Reduced stiffness for slower animation
        duration: 0, // Longer duration for slower animation
      },
    },
    hidden: {
      opacity: 0,
      y: 100, // Change y value for bottom to top effect
      scale: 0.8,
      transition: {
        type: 'spring',
        damping: 1,
        stiffness: 10,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '4rem',
        flexWrap: 'wrap',
        fontWeight: '600',
        justifyContent: 'center',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{
            display: 'inline-block',
            marginBottom: '15px',
            padding: '0 5px',
          }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
