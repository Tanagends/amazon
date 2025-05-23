// components/ProductCard.js
import Link from 'next/link';
import Image from 'next/image'; // For optimized images
import styles from '../styles/ProductCard.module.css';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const cardVariants = {
    rest: { scale: 1, boxShadow: "var(--shadow-md)" },
    hover: { scale: 1.03, boxShadow: "var(--shadow-lg)", transition: { duration: 0.3 } }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      data-aos="fade-up" // AOS animation
    >
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a className={styles.cardLink}>
          <motion.div className={styles.imageWrapper} variants={imageVariants}>
            <Image
              src={product.imageUrl || '/placeholder-image.jpg'} // Prismic will provide this
              alt={product.name}
              width={300} // Provide appropriate dimensions
              height={200}
              style={{objectFit: 'cover'}}
            />
            {product.onPromotion && <span className={styles.promoTag}>On Sale!</span>}
          </motion.div>
          <div className={styles.cardContent}>
            <h3 className={styles.productName}>{product.name || 'Product Name Placeholder'}</h3>
            <p className={styles.productCategory}>{product.category || 'Category'}</p>
            <div className={styles.priceContainer}>
              {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
              <span className={styles.currentPrice}>${product.price || '0.00'}</span>
            </div>
            {/* Placeholder for rating */}
            <div className={styles.rating}>★★★★☆ (4.5)</div>
          </div>
        </a>
      </Link>
      <a
        href={product.amazonLink || '#'} // Prismic will provide this
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={styles.amazonButton}
      >
        View on Amazon
        <motion.span style={{ marginLeft: '8px' }} whileHover={{ x: 5 }}>→</motion.span>
      </a>
    </motion.div>
  );
};

export default ProductCard;
