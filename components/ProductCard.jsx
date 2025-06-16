// components/ProductCard.js
"use client"; // Uses Framer Motion for hover effects

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/ProductCard.module.css'; // Create this CSS Module
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

const ProductCard = ({ product, isDeal = false }) => {
  if (!product) {
    return <div className={styles.cardSkeleton}>Loading...</div>; // Basic skeleton
  }

  const {
    slug = 'default-product',
    name = 'Product Name Placeholder',
    category = 'Category',
    price = '0.00',
    oldPrice,
    imageUrl = `https://placehold.co/600x400/${isDeal ? 'F1C40F' : '2ECC71'}/1A1A1A?text=${encodeURIComponent(name)}&font=Inter`,
    amazonLink = '#',
    rating = 4.5,
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
      data-aos="fade-up"
    >
      <Link href={`/products/${slug}`} className={styles.cardLinkWrapper}> {/* Updated Link */}
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
          {!isDeal && product.onPromotion && <span className={styles.promoTag}>Offer</span>}
          <div className={styles.quickActions}>
            <button aria-label="Add to wishlist" className={styles.actionButton}><FiHeart /></button>
          </div>
        </motion.div>
        <div className={styles.cardContent}>
          <p className={styles.productCategory}>{category}</p>
          <h3 className={styles.productName}>{name}</h3>
          <div className={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className={i < Math.round(rating) ? styles.starFilled : styles.starEmpty} />
            ))}
            {reviewCount > 0 && <span className={styles.reviewCount}>({reviewCount})</span>}
          </div>
          {/* <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>${price}</span>
            {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
          </div> */}
        </div>
      </Link>
      <motion.a
        href={imageUrl}
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
