// components/AnimatedPageWrapper.js
"use client"; // This component uses Framer Motion, so it must be a client component.

import { motion } from 'framer-motion';

// Define animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-20vw", // Start slightly off-screen to the left
    // scale: 0.98, // Optional: slight scale down
  },
  in: {
    opacity: 1,
    x: 0, // Animate to center
    // scale: 1,
  },
  out: {
    opacity: 0,
    x: "20vw", // Animate slightly off-screen to the right
    // scale: 1.02, // Optional: slight scale up
  }
};

// Define transition properties for consistency
const pageTransition = {
  type: "tween", // Using tween for a smoother, more controlled animation
  ease: "anticipate", // Easing function for a slight "anticipation" effect, can also use "easeInOut"
  duration: 0.5 // Duration of the transition in seconds
};

// This component wraps the main content of each page to apply entry and exit animations.
// It will be used inside each `page.js` file.
const AnimatedPageWrapper = ({ children }) => {
  return (
    <motion.div
      key="page-wrapper" // A static key here is fine as AnimatePresence key is on the page component itself
      variants={pageVariants}
      initial="initial"       // Initial animation state
      animate="in"            // Animation state when component is mounted/visible
      exit="out"              // Animation state when component is unmounted/exiting
      transition={pageTransition} // Transition timing and easing
      style={{ position: 'relative', width: '100%' }} // Ensures proper layout during transitions
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
