// components/MarketingBanner.jsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/MarketingBanner.module.css';
import { FiArrowRight } from 'react-icons/fi';

const MarketingBanner = () => {

  // Staggered animation for the text content
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };
  
  // Animation for the graphic shapes
  const graphicItemVariants = {
     hidden: { scale: 0.5, opacity: 0, rotate: -30 },
     visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 80, damping: 10, delay: 0.3 },
    },
  }

  return (
    <section className={styles.bannerSection}>
      <div className={`container ${styles.bannerLayout}`}>
        
        {/* --- Left Column: Text Content --- */}
        <motion.div 
          className={styles.textContainer}
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1 className={styles.title} variants={textItemVariants}>
            Shop Great At <span className={styles.titleAccent}>FlipKart</span>.
          </motion.h1>

          <motion.p className={styles.subtitle} variants={textItemVariants}>
            Discover unbeatable deals and endless variety from your favorite brands. Quality, value, and convenience—all in one place.
          </motion.p>

          <motion.div variants={textItemVariants}>
            <Link href="https://fktr.in/eAR2iJM" className={styles.ctaButton}>
              Explore Our Flipkart Store
              <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Geometric Visual --- */}
        <div className={styles.graphicContainer}>
           <motion.div 
              className={styles.graphicComposition}
              variants={graphicItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={`${styles.shape} ${styles.shapeGreen}`}></div>
              <div className={`${styles.shape} ${styles.shapeYellow}`}></div>
              <div className={`${styles.shape} ${styles.shapeBlack}`}></div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MarketingBanner;
