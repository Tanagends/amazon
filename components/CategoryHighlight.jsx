// components/CategoryHighlight.js
"use client"; // Uses Framer Motion

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CategoryHighlight.module.css'; // Create this CSS Module
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';

const CategoryHighlight = ({ category, aosData = "zoom-in" }) => {
  if (!category) return null;

  const {
    slug = 'default-category',
    name = 'Category Name',
    imageUrl = `https://placehold.co/400x500/2ECC71/FFFFFF?text=${encodeURIComponent(name)}&font=Inter`,
    productCount = 0,
  } = category;

  return (
    <motion.div
      className={styles.categoryCard}
      data-aos={aosData}
      whileHover={{ y: -10, boxShadow: "var(--shadow-xl)" }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <Link href={`/categories/${slug}`} className={styles.categoryLink}> {/* Updated Link */}
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className={styles.categoryImage}
            onError={(e) => e.currentTarget.src = `https://placehold.co/400x500/CCCCCC/1A1A1A?text=Error&font=Inter`}
          />
          <div className={styles.overlay}></div> {/* Gradient overlay */}
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={styles.categoryName}>{name}</h3>
          {productCount > 0 && (
            <p className={styles.productCount}>{productCount} items</p>
          )}
          <div className={styles.exploreAction}>
            <span>Explore</span>
            <FiArrowRightCircle className={styles.exploreIcon} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryHighlight;
