import React from 'react';
import './wave.css';
import { motion } from 'framer-motion';

const WaterRoundContainer = () => {
  const waveContainerVariant = {
    initial: {
      y: '-100vh', // Move the container 100 viewport heights above the screen
      opacity: 0,
      rotateX: 180, // Flip the container vertically
    },
    animate: {
      y: 0, // Move the container back to its original position
      opacity: 1,
      rotateX: 180, // Flip the container back to its original rotation
      transition: { duration: 1.5, delay: 1 }, // Adjust the duration and initial delay as needed
      staggerChildren: 2, // Add stagger for children animation
    },
  };
  const waveContainerVariant2 = {
    initial: {
      y: '100vh', // Move the container 100 viewport heights above the screen
      opacity: 0,
      rotateX: 90, // Flip the container vertically
    },
    animate: {
      y: 0, // Move the container back to its original position
      opacity: 1,
      rotateX: 0, // Flip the container back to its original rotation
      transition: { duration: 1.5, delay: 1 }, // Adjust the duration and initial delay as needed
      staggerChildren: 2, // Add stagger for children animation
    },
  };

  const waveItemVariants = {
    initial: {
      y: '-100vh', // Move the water wave 100 viewport heights above the screen
    },
    animate: {
      y: 0, // Move the water wave back to its original position
    },
  };

  const waveItems = ['water-wave1', 'water-wave2', 'water-wave3', 'water-wave4', 'water-wave5', 'water-wave6'];

  return (
    <>
      <motion.div
        className="water-round-container"
        variants={waveContainerVariant}
        initial="initial"
        animate="animate"
      >
        {waveItems.map((waveItem, index) => (
          <motion.div
            key={index}
            className={waveItem}
            variants={waveItemVariants} // Apply individual animation variants for each water wave
          ></motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="water-round-container2"
        variants={waveContainerVariant2}
        initial="initial"
        animate="animate"
      >
        {waveItems.map((waveItem, index) => (
          <motion.div
            key={index}
            className={waveItem}
            variants={waveItemVariants} // Apply individual animation variants for each water wave
          ></motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default WaterRoundContainer;
