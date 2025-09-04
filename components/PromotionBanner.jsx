// components/PromotionBanner.jsx
"use client";

import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { motion } from 'framer-motion';
import styles from '../styles/PromotionBanner.module.css';

/**
 * @typedef {import("@prismicio/client").Content.PromotionBannerSlice} PromotionBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromotionBannerSlice>} PromotionBannerProps
 * @param {PromotionBannerProps}
 */
const PromotionBanner = ({ slice }) => {
  const { image, title, short_paragraph, link, offer } = slice.data;
  
  const buttonText = link.text || 'Explore Now';

  return (
    <div className={styles.bannerWrapper}>
      {/* 1. Offer Marquee (No changes to JSX here) */}
      {offer && (
        <div className={styles.offerStrip}>
          <div className={styles.offerText}>
            <span>{offer}</span>
            <span>{offer}</span>
            <span>{offer}</span>
            <span>{offer}</span>
          </div>
        </div>
      )}

      {/* 2. Main Two-Column Banner */}
      <section className={styles.bannerContainer}>
        {/* Left Column: Text Content */}
        <div className={styles.textColumn}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {title && <h1 className={styles.title}>{title}</h1>}
            {short_paragraph && <p className={styles.paragraph}>{short_paragraph}</p>}
            
            <PrismicNextLink field={link} className={styles.bannerButton}>
              {buttonText}
            </PrismicNextLink>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <div className={styles.imageColumn}>
            <PrismicNextImage 
              field={image} 
              className={styles.bannerImage} 
              alt={image.alt || ''}
              width={800} // These are max intrinsic dimensions, CSS will control visual size
              height={800}
            />
        </div>
      </section>
    </div>
  );
};

export default PromotionBanner;
