// components/ProductCard.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/ProductCard.module.css';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

const ProductCard = ({ product, isDeal = false }) => {
  if (!product) {
    return <div className={styles.cardSkeleton}>Loading...</div>;
  }

  // Destructure with defaults, now including the price string from Amazon
  const {
    id = 'default-id',
    name = 'Product Name Placeholder',
    category = 'Category',
    price = 'On Sale', // Expecting a formatted string like "₹1,299.00"
    imageUrl = `https://placehold.co/600x400/2ECC71/1A1A1A?text=${encodeURIComponent(name)}&font=Inter`,
    amazonLink = '#',
    rating = 0,
    reviewCount = 0,
  } = product;

  const cardVariants = {
    rest: { y: 0, boxShadow: "var(--shadow-md)" },
    hover: { y: -6, scale: 1.03, boxShadow: "var(--shadow-lg)", transition: { type: "spring", stiffness: 300, damping: 15 } }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.08 }
  };

  return (
    <motion.div
      className={`${styles.card} ${isDeal ? styles.dealCard : ''}`}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      layout // Add layout prop for smoother re-ordering animations
    >
      {/* The product card is not a link itself anymore to allow the Amazon button to work easily */}
      <div className={styles.cardLinkWrapper}>
        <motion.div className={styles.imageWrapper} variants={imageVariants}>
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={300}
            style={{ objectFit: 'cover' }}
            className={styles.productImage}
            onError={(e) => e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/1A1A1A?text=Error&font=Inter`}
          />
          {isDeal && <span className={styles.dealTag}>DEAL!</span>}
          <div className={styles.quickActions}>
            <button aria-label="Add to wishlist" className={styles.actionButton}><FiHeart /></button>
          </div>
        </motion.div>
        <div className={styles.cardContent}>
          <p className={styles.productCategory}>{category}</p>
          <h3 className={styles.productName}>{name}</h3>
          <div className={styles.ratingContainer}>
            {rating > 0 && [...Array(5)].map((_, i) => (
              <FiStar key={i} className={i < Math.round(rating) ? styles.starFilled : styles.starEmpty} />
            ))}
            {reviewCount > 0 && <span className={styles.reviewCount}>({reviewCount})</span>}
          </div>
          {/* --- THIS IS THE UPDATED PRICE SECTION --- */}
          <div className={styles.priceContainer}>
            { price != 0 && <span className={styles.currentPrice}>{price}</span> }
            { price == 0 && <span className={styles.currentPrice}>On Sale</span> }
            {/* oldPrice can be added later if API provides it */}
          </div>
        </div>
      </div>
      <motion.a
        href={amazonLink}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`btn ${isDeal ? 'btn-secondary' : 'btn-primary'} ${styles.amazonButton}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDeal ? "Grab Deal" : "View on Amazon"} <FiShoppingCart style={{ marginLeft: '0.5em' }} />
      </motion.a>
    </motion.div>
  );
};

export default ProductCard;

