// components/PromotionBanner.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/PromotionBanner.module.css';
import { motion } from 'framer-motion';

const PromotionBanner = ({ title, subtitle, buttonText, buttonLink, imageUrl, aosData }) => {
  return (
    <div className={styles.bannerContainer} data-aos={aosData || "fade-in"}>
      <div className={styles.bannerImageWrapper}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title || "Promotion"}
            layout="fill"
            objectFit="cover"
            priority // If it's above the fold or important
          />
        )}
        <div className={styles.bannerOverlay}></div> {/* Optional overlay for text contrast */}
      </div>
      <div className={styles.bannerContent}>
        <motion.h2
          className={styles.bannerTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title || 'Special Promotion!'}
        </motion.h2>
        {subtitle && (
          <motion.p
            className={styles.bannerSubtitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
        {buttonText && buttonLink && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href={buttonLink} legacyBehavior>
              <a className={`btn btn-primary ${styles.bannerButton}`}>{buttonText}</a>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PromotionBanner;
