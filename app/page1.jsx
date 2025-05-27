g/ app/page.js (Homepage)
// This is a Server Component by default.
// For client-side interactivity in specific parts, create separate Client Components.
//import Head from 'next/head'; // Still useful for dynamic head tags within Server Components if needed, but primary metadata is in layout.js
import AnimatedPageWrapper from '../components/AnimatedPageWrapper'; // Ensure path is correct
import ProductCard from '../components/ProductCard';
import PromotionBanner from '../components/PromotionBanner';
import CategoryHighlight from '../components/CategoryHighlight';
import CallToAction from '../components/CallToAction';
import styles from '../styles/Home.module.css'; // Ensure path is correct
import { FiGift, FiShield, FiThumbsUp, FiTrendingUp, FiArrowRight, FiZap } from 'react-icons/fi';

// Placeholder data - Prismic will manage this
const placeholderProducts = [
  { id: 'prod1', slug: 'amazing-gadget-pro-x', name: 'The Amazing Gadget Pro X - 2025 Edition', category: 'Electronics', price: '199.99', oldPrice: '249.99', imageUrl: '[https://placehold.co/600x400/2ECC71/FFFFFF?text=Gadget+Pro+X&font=Inter](https://placehold.co/600x400/2ECC71/FFFFFF?text=Gadget+Pro+X&font=Inter)', onPromotion: true, amazonLink: '#', rating: 4.7, reviewCount: 250, shortDescription: "Experience the future with the Gadget Pro X, now faster and smarter." },
  { id: 'prod2', slug: 'kitchen-master-5000', name: 'KitchenMaster 5000 Deluxe Blender Set', category: 'Home & Kitchen', price: '89.50', imageUrl: '[https://placehold.co/600x400/F1C40F/1A1A1A?text=KitchenMaster&font=Inter](https://placehold.co/600x400/F1C40F/1A1A1A?text=KitchenMaster&font=Inter)', onPromotion: false, amazonLink: '#', rating: 4.5, reviewCount: 180, shortDescription: "Blend, chop, and puree with ease using the KitchenMaster 5000." },
  { id: 'prod3', slug: 'outdoor-adventure-pack', name: 'Outdoor Adventure Backpack XL (Waterproof)', category: 'Sports & Outdoors', price: '120.00', oldPrice: '150.00', imageUrl: '[https://placehold.co/600x400/1E1E1E/FFFFFF?text=Adventure+Pack&font=Inter](https://placehold.co/600x400/1E1E1E/FFFFFF?text=Adventure+Pack&font=Inter)', onPromotion: true, amazonLink: '#', rating: 4.8, reviewCount: 320, shortDescription: "Your perfect companion for any outdoor expedition, built to last." },
  { id: 'prod4', slug: 'cozy-comfort-blanket', name: 'Ultimate Cozy Comfort Electric Blanket', category: 'Home Goods', price: '55.99', imageUrl: '[https://placehold.co/600x400/3498DB/FFFFFF?text=Comfort+Blanket&font=Inter](https://placehold.co/600x400/3498DB/FFFFFF?text=Comfort+Blanket&font=Inter)', onPromotion: false, amazonLink: '#', rating: 4.6, reviewCount: 150, shortDescription: "Stay warm and cozy all winter long with our premium electric blanket." },
  { id: 'prod5', slug: 'smart-watch-series-8', name: 'Aura SmartWatch Series 8 - Health & Fitness', category: 'Wearables', price: '279.00', imageUrl: '[https://placehold.co/600x400/9B59B6/FFFFFF?text=SmartWatch+8&font=Inter](https://placehold.co/600x400/9B59B6/FFFFFF?text=SmartWatch+8&font=Inter)', onPromotion: true, amazonLink: '#', rating: 4.9, reviewCount: 400, shortDescription: "Track your fitness and stay connected with the sleek SmartWatch Series 8." },
  { id: 'prod6', slug: 'pro-gaming-headset-g7', name: 'Pro Gaming Headset G7 - Immersive Sound', category: 'Gaming Gear', price: '79.99', oldPrice: '99.99', imageUrl: '[https://placehold.co/600x400/E74C3C/FFFFFF?text=Gaming+Headset&font=Inter](https://placehold.co/600x400/E74C3C/FFFFFF?text=Gaming+Headset&font=Inter)', onPromotion: true, amazonLink: '#', rating: 4.7, reviewCount: 210, shortDescription: "Hear every detail and communicate clearly with the G7 gaming headset." },
];

const placeholderCategories = [
  { id: 'cat1', name: 'Latest Electronics', slug: 'electronics', imageUrl: '[https://placehold.co/400x500/2ECC71/FFFFFF?text=Electronics&font=Inter](https://placehold.co/400x500/2ECC71/FFFFFF?text=Electronics&font=Inter)', productCount: 120 },
  { id: 'cat2', name: 'Home Essentials', slug: 'home-kitchen', imageUrl: '[https://placehold.co/400x500/F1C40F/1A1A1A?text=Home+Goods&font=Inter](https://placehold.co/400x500/F1C40F/1A1A1A?text=Home+Goods&font=Inter)', productCount: 250 },
  { id: 'cat3', name: 'Outdoor & Adventure', slug: 'sports-outdoors', imageUrl: '[https://placehold.co/400x500/3498DB/FFFFFF?text=Outdoors&font=Inter](https://placehold.co/400x500/3498DB/FFFFFF?text=Outdoors&font=Inter)', productCount: 90 },
  { id: 'cat4', name: 'Fashion & Style', slug: 'fashion', imageUrl: '[https://placehold.co/400x500/9B59B6/FFFFFF?text=Fashion&font=Inter](https://placehold.co/400x500/9B59B6/FFFFFF?text=Fashion&font=Inter)', productCount: 300 },
];

const placeholderGuides = [
    { id: 'guide1', slug: 'top-smartphones-2025', title: "Best Smartphones of 2025: A Buyer's Guide", excerpt: "Navigating the smartphone market can be overwhelming. We break down the top contenders for performance, camera, and value.", imageUrl: "[https://placehold.co/600x400/1abc9c/ffffff?text=Smartphone+Guide&font=Inter](https://placehold.co/600x400/1abc9c/ffffff?text=Smartphone+Guide&font=Inter)" },
    { id: 'guide2', slug: 'ultimate-home-office-setup', title: "The Ultimate Guide to a Productive Home Office", excerpt: "Transform your workspace with these essential gadgets and ergonomic solutions for maximum comfort and efficiency.", imageUrl: "[https://placehold.co/600x400/e67e22/ffffff?text=Home+Office+Guide&font=Inter](https://placehold.co/600x400/e67e22/ffffff?text=Home+Office+Guide&font=Inter)" },
    { id: 'guide3', slug: 'eco-friendly-gadgets', title: "Top Eco-Friendly Gadgets for a Greener Lifestyle", excerpt: "Discover innovative tech that helps you reduce your carbon footprint without sacrificing performance.", imageUrl: "[https://placehold.co/600x400/27ae60/ffffff?text=Eco+Gadgets+Guide&font=Inter](https://placehold.co/600x400/27ae60/ffffff?text=Eco+Gadgets+Guide&font=Inter)" },
];

// You can define metadata for this specific page
// This will override or extend the metadata from layout.js
export const metadata = {
  title: 'Homepage - Discover Amazing Deals', // Example of page-specific title
  description: 'Welcome to AffiliateAura! Find the best Amazon products, deals, and guides.',
};


export default function HomePage() {
  // Data fetching for Server Components would happen here, e.g., directly using async/await
  // const products = await fetchProductsFromPrismic();

  return (
    // AnimatedPageWrapper should be a Client Component if it uses Framer Motion's motion.div directly
    // or if its animations rely on client-side hooks.
    // For App Router, ensure AnimatedPageWrapper has "use client" if needed.
    { /*<AnimatedPageWrapper>  Hero Section */}
    <>
      <header className={styles.hero} data-aos="fade-in" data-aos-duration="1000">
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContent} container`}>
          {/* motion components need to be in client components or have "use client" in their definition */}
          {/* For simplicity, assuming CallToAction and other animated elements are client components */}
          <h1 className={styles.heroTitle}>
            Discover <span className={styles.highlightYellow}>Amazing Products</span>.
            <br />
            Unlock <span className={styles.highlightGreen}>Unbeatable Deals</span>.
          </h1>
          <p className={styles.heroSubtitle}>
            Your trusted source for curated Amazon finds. We do the research, you get the rewards.
          </p>
          <div> {/* Wrapper for motion if CallToAction is not a client component itself */}
            <CallToAction
              text="Explore Hot Deals"
              link="/deals"
              type="secondary"
              className={styles.heroCta}
              icon={<FiZap />}
              iconPosition="right"
            />
          </div>
        </div>
      </header>

      {/* "Featured Products" Section */}
      <section className={`${styles.section} ${styles.featuredProductsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            <FiTrendingUp className={styles.titleIcon} /> Today's Top Picks
          </h2>
          <div className={styles.productGrid}>
            {placeholderProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
           <div className={styles.viewMoreLink} data-aos="fade-up">
            <CallToAction text="View All Featured" link="/products" type="outline-dark" icon={<FiArrowRight />} />
          </div>
        </div>
      </section>

      {/* Promotion Banner Section */}
      <PromotionBanner
        title="Exclusive Weekly Deal!"
        subtitle="Get up to 40% off on selected Smart Home Devices. Limited time offer, grab yours now!"
        buttonText="Claim Your Discount"
        buttonLink="/deals?category=smart-home" // Example query param
        imageUrl="[https://placehold.co/1200x450/9B59B6/FFFFFF?text=Smart+Home+Deals&font=Inter](https://placehold.co/1200x450/9B59B6/FFFFFF?text=Smart+Home+Deals&font=Inter)"
        alignText="left"
        overlayOpacity={0.6}
        aosData="zoom-in"
      />

      {/* Category Highlights Section */}
      <section className={`${styles.section} ${styles.categorySection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            Shop by Category
          </h2>
          <div className={styles.categoryGrid}>
            {placeholderCategories.map(category => (
              <CategoryHighlight key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* "Deals of the Day" Section */}
      <section className={`${styles.section} ${styles.dealsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            <FiGift className={styles.titleIcon} /> Deals You Can't Miss
          </h2>
          <div className={styles.productGrid}>
            {placeholderProducts.filter(p => p.onPromotion).slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} isDeal={true} />
            ))}
          </div>
          <div className={styles.viewMoreLink} data-aos="fade-up">
            <CallToAction text="See All Deals" link="/deals" type="primary" icon={<FiArrowRight />} />
          </div>
        </div>
      </section>

      {/* Buying Guides Section */}
      <section className={`${styles.section} ${styles.guidesSection}`}>
        <div className="container">
            <h2 className={styles.sectionTitle} data-aos="fade-up">Expert Buying Guides</h2>
            <div className={styles.guidesGrid}>
                {placeholderGuides.map(guide => (
                    // Assuming GuideCard is or contains client components for motion
                    <div key={guide.id} className={styles.guideCard} data-aos="fade-up">
                        {/* Simplified structure for server component context */}
                        <a href={`/guides/${guide.slug}`} className={styles.guideLink}>
                            <div className={styles.guideImageWrapper}>
                                {/* Next/Image can be used in Server Components */}
                                <img src={guide.imageUrl} alt={guide.title} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                            </div>
                            <div className={styles.guideContent}>
                                <h3 className={styles.guideTitle}>{guide.title}</h3>
                                <p className={styles.guideExcerpt}>{guide.excerpt}</p>
                                <span className={styles.guideReadMore}>Read Guide <FiArrowRight /></span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className={`${styles.section} ${styles.trustSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle} data-aos="fade-up">Why Trust AffiliateAura?</h2>
          <div className={styles.trustElementsGrid}>
            {[
              { icon: <FiThumbsUp />, title: "Honest Reviews", text: "Unbiased, in-depth reviews to help you make informed decisions." },
              { icon: <FiShield />, title: "Curated Selection", text: "Only the best, handpicked products make it to our lists and recommendations." },
              { icon: <FiGift />, title: "Exclusive Deals", text: "Access special promotions and discounts you might not find elsewhere." }
            ].map((item, index) => (
              // Assuming TrustElement is or contains client components for motion
              <div key={item.title} className={styles.trustElement} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={styles.trustIconWrapper}>{item.icon}</div>
                <h4 className={styles.trustTitle}>{item.title}</h4>
                <p className={styles.trustText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    {/*</AnimatedPageWrapper>*/}
  );
}
