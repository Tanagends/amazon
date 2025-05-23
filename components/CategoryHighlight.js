// components/CategoryHighlight.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CategoryHighlight.module.css';
import { motion } from 'framer-motion';

const CategoryHighlight = ({ category, aosData }) => {
  if (!category) return null;

  return (
    <motion.div
      className={styles.categoryCard}
      data-aos={aosData}
      whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/products/${category.slug}`} legacyBehavior>
        <a className={styles.categoryLink}>
          <div className={styles.imageContainer}>
            <Image
              src={category.imageUrl || '/placeholder-category.jpg'}
              alt={category.name}
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.overlay}></div>
          </div>
          <h3 className={styles.categoryName}>{category.name || 'Category Name'}</h3>
        </a>
      </Link>
    </motion.div>
  );
};

export default CategoryHighlight;
