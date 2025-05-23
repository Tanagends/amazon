// components/AnimatedPageWrapper.js
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Slide in from left
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw", // Slide out to right
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

const AnimatedPageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'relative', width: '100%' }} // Ensures proper layout during transitions
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
