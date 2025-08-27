// components/ProductCard.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/ProductCard.module.css';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import { PrismicNextImage } from "@prismicio/next";

const ProductCard = ({ product, isDeal = false }) => {
   
  const affiliateColors = {
  Amazon: "#FF9900",
  Clickbank: "#B22234",
  Cj: "#0A9C55",
  Rakuten: "#BF0030",
  Shareasale: "#003595",
  Impact: "#FF2234",
  Awin: "#F37324",
  Fiverr: "#1DBF73",
  Booking: "#003580",
  Bluehost: "#0059B3",
  Amazonin: "#FF9900",
  Flipkart: "#FFD600",
  Vcommission: "#34A853",
  Cuelinks: "#2B84EA",
  Admitad: "#3056D3",
  Involveasia: "#F24B6A",
  Optimise: "#F58023",
  Makemytrip: "#008CFF",
  Nykaa: "#E80071",
  Myntra: "#FF3F6C",
  Meesho: "#E72E77",
  Ajio: "#2C4152",
  Blinkit: "#FFD600",
  Shopsy: "#0C3C60",
  Topsy: "#6C63FF",
  Jumia: "#F68B1E",
  Travelstart: "#0098DA",
  Yellowcard: "#FFD600",
  Luno: "#1736E4",
  Alison: "#283891",
  Takealot: "#0057B8",
  Superbalist: "#000000",
  Loot: "#E87722",
  Bidorbuy: "#FFD500",
  Travelstartsa: "#0098DA",
  Konga: "#D6006D",
  Wakanow: "#F37021",
  Binance: "#F3BA2F",
  Deriv: "#FF444F",
  Maxbounty: "#E1261C",
  Hostinger: "#673DE6",
  Coursera: "#2A73CC",
  Udemy: "#A435F0",
  Etsy: "#F1641E",
  Aliexpress: "#FF4747",
  Samsung: "#1428A0",
  Acer: "#83B81A",
  Addidas: "#000",
  Nike: "#111",
  Reebok: "#00539F"
};


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
    platform = 'Amazon',
    discount = false,
  } = product;
  console.log(platform);
  const cardVariants = {
    rest: { y: 0, boxShadow: "var(--shadow-md)" },
    hover: { y: -6, scale: 1.03, boxShadow: "var(--shadow-lg)", transition: { type: "spring", stiffness: 300, damping: 15 } }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.08 }
  };
  console.log(platform);

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
        {!isDeal && <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={300}
            style={{ objectFit: 'cover' }}
            className={styles.productImage}
            onError={(e) => e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/1A1A1A?text=Error&font=Inter`}
          />}
        {isDeal && <PrismicNextImage field={imageUrl} className={styles.productImage} />}
          {isDeal && <span className={styles.dealTag}>{platform}</span>}
          { discount && <div className={styles.quickActions}>
             <button aria-label="Add to wishlist" className={styles.actionButton}>{discount}% Off</button>
          </div>}
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
            { price != 0 && <span className={styles.currentPrice}>₹{price}</span> }
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
        {isDeal ? `Buy on ${platform}`  : "Buy on Amazon"} <FiShoppingCart style={{ marginLeft: '0.5em' }} />
      </motion.a>
    </motion.div>
  );
};

export default ProductCard;

