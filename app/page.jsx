export const dynamic = 'force-dynamic';
// app/page.js (Homepage)
// This is a Server Component by default.
// It will use Client Components like AnimatedPageWrapper and CallToAction.

// Import necessary components
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';
import CallToAction from '../components/CallToAction';
import ProductCard from '../components/ProductCard';         // From nextjs_app_router_presentational_comps_v2
import PromotionBanner from '../components/PromotionBanner'; // From nextjs_app_router_presentational_comps_v2
import CategoryHighlight from '../components/CategoryHighlight'; // From nextjs_app_router_presentational_comps_v2
import styles from '../styles/Home.module.css';
import { FiZap, FiShoppingCart, FiTrendingUp, FiGift, FiShield, FiThumbsUp, FiArrowRight, FiMessageSquare, FiAward, FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image'; // For Buying Guides section images
import Link from 'next/link'; // For guide card links
import {products} from '../components/products';
import {allGuides} from '../components/guides';
import axios from 'axios';

// Page-specific metadata
export const homeMetadata = {
  title: "Clickys.in | Trending Tech & Home Essentials in India",
  description: "Discover the best Amazon and Flipkart deals on tech, home essentials, and grooming products. Shop curated combos, smartwatches, kitchen tools, and more at Clickys.in!",
  keywords: [
    "trending tech and home essentials",
    "top picks for kitchen and grooming",
    "stylish gadgets under budget",
    "buy household deals online India",
    "smartwatch and grooming sets online",
    "healthy living essentials 2025",
    "popular online buys this week",
    "curated Flipkart & Amazon combos",
    "online shopping hub for daily deals",
    "smart choices for home and health",
    "home and electronics saver packs",
    "best combo product picks in India",
    "online store for wellness and style"
  ],
  openGraph: {
    title: "Clickys.in | Best Tech & Home Deals in India",
    description: "Shop trending gadgets, kitchen essentials, and grooming combos at Clickys.in. Find top Amazon and Flipkart offers for smart living!",
    url: "https://www.clickys.in/",
    siteName: "Clickys.in",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Clickys.in | Trending Tech & Home Deals",
    description: "Explore curated Amazon and Flipkart deals on smartwatches, kitchen tools, and grooming essentials at Clickys.in!"
  }
};
// Placeholder Data (Prismic will manage this later)
//const placeholderProducts = products.filter(product => product.onPromotion); // Import from products.js

let placeholderProducts;
const dealProducts = products.filter(product => product.isDeal); // Import from products.js


const placeholderCategories = [
  { id: 'cat1', name: 'Electronics', slug: 'electronics', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/tower-speaker/w/e/k/1008-btx9-original-imahdnm3suhqfr6h.jpeg?q=70', productCount: 150 },
  { id: 'cat2', name: 'Fashion', slug: 'fashion', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-t-shirt/k/e/c/l-tblhnful-spy-d144-tripr-original-imahcjtu6ghwgpk7.jpeg?q=70', productCount: 200 },
  { id: 'cat3', name: 'Kitchen', slug: 'kitchen', imageUrl: 'https://m.media-amazon.com/images/I/71cBDSM-UdL._AC_UL640_FMwebp_QL65_.jpg', productCount: 300 },
  { id: 'cat4', name: 'Health', slug: 'health', imageUrl: 'https://m.media-amazon.com/images/I/71VmFTE6CFL._AC_UL640_FMwebp_QL65_.jpg', productCount: 120 },
];

const placeholderGuides = allGuides.slice(0, 3)

export default async function HomePage() {
    try {
      const response = await fetch('www.clickys.in/api/daily/');
      
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        let errorMessage = `An unexpected error occurred (HTTP ${response.status}).`;
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const errData = await response.json();
            errorMessage = errData.error || 'Failed to fetch products from the API.';
        } else {
            errorMessage = "The API returned an invalid response. This is often caused by incorrect API credentials in your .env.local file. Please check the server logs for more details.";
        }
        console.log(errorMessage);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      if (data.products) {
        console.log("yes data");
        placeholderProducts = data.products;
        if (placeholderProducts.length < 8) {
            const size = placeholderProducts.length;
            let i = 0;
            while (size + i < 8) {
                placeholderProducts.push(products[i]);
                i++;
            }
        }

      } else {
        console.log("yes data");
        placeholderProducts = products.filter(product => product.onPromotion);
      }

      
    } catch (err) {
        console.log(`error: ${err}`);
        placeholderProducts = products.filter(product => product.onPromotion);
    }

  return (
    <AnimatedPageWrapper>
      {/* Hero Section (from previous step) */}
      <header className={styles.heroSection} data-aos="fade-in" data-aos-duration="800">
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle} data-aos="fade-up" data-aos-delay="200">
            Discover <span className={styles.highlightYellow}>Amazing Products</span>.
            <br />
            Unlock <span className={styles.highlightGreen}>Unbeatable Deals</span>.
          </h1>
          <p className={styles.heroSubtitle} data-aos="fade-up" data-aos-delay="400">
            Your trusted source for curated Amazon finds. We do the research, you save time and get the best value.
          </p>
          <div className={styles.heroActions} data-aos="fade-up" data-aos-delay="600">
            <CallToAction text="Explore Flipkart Deals" link="/deals" type="secondary" className={styles.heroCtaButton} icon={<FiZap />} iconPosition="left" />
            <CallToAction text="Browse Amazon Products" link="/products" type="primary" className={`${styles.heroCtaButton} ${styles.heroCtaOutline}`} icon={<FiShoppingCart />} iconPosition="left" />
          </div>
          <p
          style={{ marginTop: '1rem', color: '#fff', fontSize: '0.875rem', textAlign: 'center' }} data-aos-delay="800">
          As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className={`${styles.section} ${styles.featuredProductsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            <FiTrendingUp className={styles.titleIcon} /> Featured Finds
          </h2>
          <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100">
            Handpicked selections that our experts and community love right now.
          </p>
          <div className={styles.productGrid}>
            {placeholderProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className={styles.viewMoreLink} data-aos="fade-up" data-aos-delay="200">
            <CallToAction text="See All Featured Products" link="/products" type="outline-dark" icon={<FiArrowRight />} />
          </div>
        </div>
      </section>

      {/* Promotion Banner Section */}
      <div className="container" data-aos="zoom-in-up" data-aos-duration="600">
        <PromotionBanner
            alignText="center" // Can be 'left', 'center', or 'right'
            overlayOpacity={0.55}
            buttonType="primary" // Green button for this banner
        />
      </div>

      {/* Category Highlights Section */}
      <section className={`${styles.section} ${styles.categorySection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            Explore by Category
          </h2>
          <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100">
            Find exactly what you're looking for in our curated product categories.
          </p>
          <div className={styles.categoryGrid}>
            {placeholderCategories.map(category => (
              <CategoryHighlight key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Deals of the Day Section */}
      <section className={`${styles.section} ${styles.dealsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            <FiGift className={styles.titleIcon} /> Amazon's Top Deals
          </h2>
          <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100">
            Limited-time offers on fantastic products. Grab them before they're gone!
          </p>
          <div className={styles.productGrid}>
            {placeholderProducts.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} isDeal={true} />
            ))}
          </div>
          <div className={styles.viewMoreLink} data-aos="fade-up" data-aos-delay="200">
            <CallToAction text="View All Daily Deals" link="https://amzn.to/4nUHKao" type="primary" icon={<FiArrowRight />} />
          </div>
        </div>
      </section>

      {/* Expert Buying Guides Section */}
      <section className={`${styles.section} ${styles.guidesSection}`}>
        <div className="container">
            <h2 className={styles.sectionTitle} data-aos="fade-up">
                <FiMessageSquare className={styles.titleIcon} /> Expert Buying Guides
            </h2>
            <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100">
                Make informed decisions with our comprehensive reviews and shopping guides.
            </p>
            <div className={styles.guidesGrid}>
                {placeholderGuides.map((guide, index) => (
                    <div key={guide.id} className={styles.guideCard} data-aos="fade-up" data-aos-delay={150 * index}>
                        <Link href={`/guides/${guide.slug}`} className={styles.guideLink}>
                            <div className={styles.guideImageWrapper}>
                                <Image src={guide.imageUrl} alt={guide.title} width={600} height={338} style={{objectFit: 'cover', borderRadius: 'var(--rounded-md) var(--rounded-md) 0 0'}} />
                            </div>
                            <div className={styles.guideContent}>
                                <h3 className={styles.guideTitle}>{guide.title}</h3>
                                <p className={styles.guideExcerpt}>{guide.excerpt}</p>
                                <span className={styles.guideReadMore}>Read Full Guide <FiArrowRight /></span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.viewMoreLink} data-aos="fade-up" data-aos-delay="200">
                <CallToAction text="Explore All Guides" link="/guides" type="outline-dark" icon={<FiArrowRight />} />
            </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className={`${styles.section} ${styles.trustSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">Why Trust Clickys?</h2>
          <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100">
            We're committed to providing you with the best, most reliable shopping advice.
          </p>
          <div className={styles.trustElementsGrid}>
            <div className={styles.trustElement} data-aos="fade-up" data-aos-delay="150">
              <FiThumbsUp className={styles.trustIcon} />
              <h4 className={styles.trustTitle}>Honest & Unbiased Reviews</h4>
              <p className={styles.trustText}>Our recommendations are based on thorough research and genuine opinions, not just commissions.</p>
            </div>
            <div className={styles.trustElement} data-aos="fade-up" data-aos-delay="250">
              <FiCheckCircle className={styles.trustIcon} />
              <h4 className={styles.trustTitle}>Expertly Curated Selection</h4>
              <p className={styles.trustText}>We handpick the best products, so you don't have to sift through endless options online.</p>
            </div>
            <div className={styles.trustElement} data-aos="fade-up" data-aos-delay="350">
              <FiAward className={styles.trustIcon} />
              <h4 className={styles.trustTitle}>Focus on Quality & Value</h4>
              <p className={styles.trustText}>We prioritize products that offer the best quality and true value for your hard-earned money.</p>
            </div>
          </div>
        </div>
      </section>

    </AnimatedPageWrapper>
  );
}
