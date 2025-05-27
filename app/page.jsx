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

// Page-specific metadata
export const metadata = {
  title: 'AffiliateAura - Discover Top Amazon Picks & Deals',
  description: 'Welcome to AffiliateAura! Your ultimate guide to the best products, exclusive deals, and honest reviews for Amazon shopping.',
  openGraph: {
    title: 'AffiliateAura - Discover Top Amazon Picks & Deals',
    description: 'Your ultimate guide to the best products, exclusive deals, and honest reviews for Amazon shopping.',
    images: ['/og-images/homepage-affiliateaura.jpg'], // Ensure you have this image in /public/og-images/
  },
};

// Placeholder Data (Prismic will manage this later)
const placeholderProducts = [
  { id: 'feat1', slug: 'smart-thermostat-x1', name: 'SmartHome Thermostat X1', category: 'Smart Home', price: '129.99', oldPrice: '159.99', imageUrl: 'https://placehold.co/600x400/2ECC71/FFFFFF?text=Smart+Thermo&font=Inter', amazonLink: '#', rating: 4.8, reviewCount: 350, onPromotion: true },
  { id: 'feat2', slug: 'noise-cancelling-headphones-pro', name: 'AuraSound Headphones Pro', category: 'Audio', price: '249.00', imageUrl: 'https://placehold.co/600x400/3498DB/FFFFFF?text=Headphones+Pro&font=Inter', amazonLink: '#', rating: 4.9, reviewCount: 720 },
  { id: 'feat3', slug: 'robot-vacuum-cleaner-s5', name: 'CleanBot Vacuum S5', category: 'Home Appliances', price: '399.50', oldPrice: '499.00', imageUrl: 'https://placehold.co/600x400/9B59B6/FFFFFF?text=Robot+Vacuum&font=Inter', amazonLink: '#', rating: 4.7, reviewCount: 510, onPromotion: true },
  { id: 'feat4', slug: 'portable-espresso-maker', name: 'EspressoGo Portable Maker', category: 'Kitchen Gadgets', price: '69.99', imageUrl: 'https://placehold.co/600x400/E67E22/FFFFFF?text=Espresso+Maker&font=Inter', amazonLink: '#', rating: 4.6, reviewCount: 215 },
];

const dealProducts = [
  { id: 'deal1', slug: 'gaming-mouse-rgb', name: 'RGB Gaming Mouse - Flash Sale!', category: 'Gaming Peripherals', price: '29.99', oldPrice: '59.99', imageUrl: 'https://placehold.co/600x400/E74C3C/FFFFFF?text=Gaming+Mouse+DEAL&font=Inter', amazonLink: '#', rating: 4.5, reviewCount: 400, onPromotion: true },
  { id: 'deal2', slug: 'yoga-mat-premium', name: 'Premium Eco Yoga Mat - 30% Off', category: 'Fitness', price: '34.99', oldPrice: '49.99', imageUrl: 'https://placehold.co/600x400/1ABC9C/FFFFFF?text=Yoga+Mat+DEAL&font=Inter', amazonLink: '#', rating: 4.8, reviewCount: 180, onPromotion: true },
  { id: 'deal3', slug: 'smart-water-bottle', name: 'HydrateSmart Bottle - Today Only!', category: 'Health & Wellness', price: '24.99', oldPrice: '39.99', imageUrl: 'https://placehold.co/600x400/3498db/FFFFFF?text=Smart+Bottle+DEAL&font=Inter', amazonLink: '#', rating: 4.6, reviewCount: 320, onPromotion: true },
  { id: 'deal4', slug: 'bluetooth-speaker-mini', name: 'MiniBlast Bluetooth Speaker', category: 'Audio', price: '19.99', oldPrice: '35.00', imageUrl: 'https://placehold.co/600x400/f1c40f/000000?text=Speaker+DEAL&font=Inter', amazonLink: '#', rating: 4.4, reviewCount: 550, onPromotion: true },
];

const placeholderCategories = [
  { id: 'cat1', name: 'Smart Home Hub', slug: 'smart-home', imageUrl: 'https://placehold.co/400x500/2ECC71/FFFFFF?text=Smart+Home&font=Inter', productCount: 150 },
  { id: 'cat2', name: 'Audio & Sound', slug: 'audio', imageUrl: 'https://placehold.co/400x500/3498DB/FFFFFF?text=Audio+Gear&font=Inter', productCount: 200 },
  { id: 'cat3', name: 'Kitchen Innovations', slug: 'kitchen', imageUrl: 'https://placehold.co/400x500/E67E22/FFFFFF?text=Kitchen+Gadgets&font=Inter', productCount: 300 },
  { id: 'cat4', name: 'Outdoor Adventures', slug: 'outdoor', imageUrl: 'https://placehold.co/400x500/F1C40F/1A1A1A?text=Outdoor+Gear&font=Inter', productCount: 120 },
];

const placeholderGuides = [
    { id: 'guide1', slug: 'best-noise-cancelling-headphones', title: "Ultimate Guide: Best Noise-Cancelling Headphones 2025", excerpt: "Escape the noise and immerse yourself in pure sound. We review the top headphones for travel, work, and relaxation.", imageUrl: "https://placehold.co/600x338/3498DB/FFFFFF?text=Headphone+Guide&font=Inter" },
    { id: 'guide2', slug: 'choosing-robot-vacuum', title: "How to Choose the Perfect Robot Vacuum for Your Home", excerpt: "Say goodbye to manual vacuuming! Our guide helps you find the ideal robot cleaner based on your needs and budget.", imageUrl: "https://placehold.co/600x338/9B59B6/FFFFFF?text=Vacuum+Guide&font=Inter" },
    { id: 'guide3', slug: 'top-kitchen-gadgets-2025', title: "Must-Have Kitchen Gadgets to Elevate Your Cooking in 2025", excerpt: "Discover innovative tools that save time, enhance flavor, and make cooking a joy. Your kitchen will thank you!", imageUrl: "https://placehold.co/600x338/e67e22/FFFFFF?text=Kitchen+Guide&font=Inter" },
];


export default function HomePage() {
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
            <CallToAction text="Explore Hot Deals" link="/deals" type="secondary" className={styles.heroCtaButton} icon={<FiZap />} iconPosition="left" />
            <CallToAction text="Browse All Products" link="/products" type="primary" className={`${styles.heroCtaButton} ${styles.heroCtaOutline}`} icon={<FiShoppingCart />} iconPosition="left" />
          </div>
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
            <CallToAction text="See All Featured Products" link="/products?filter=featured" type="outline-dark" icon={<FiArrowRight />} />
          </div>
        </div>
      </section>

      {/* Promotion Banner Section */}
      <div className="container" data-aos="zoom-in-up" data-aos-duration="600">
        <PromotionBanner
            title="Mid-Season Mega Sale!"
            subtitle="Up to 50% OFF on select Electronics & Home Gadgets. Don't miss out, offers end soon!"
            buttonText="Shop the Sale Now"
            buttonLink="/deals?event=midseason-sale"
            imageUrl="https://placehold.co/1200x400/E74C3C/FFFFFF?text=MEGA+SALE+50%25+OFF&font=Inter"
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
            <FiGift className={styles.titleIcon} /> Today's Top Deals
          </h2>
          <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100">
            Limited-time offers on fantastic products. Grab them before they're gone!
          </p>
          <div className={styles.productGrid}>
            {dealProducts.map((product) => (
              <ProductCard key={product.id} product={product} isDeal={true} />
            ))}
          </div>
          <div className={styles.viewMoreLink} data-aos="fade-up" data-aos-delay="200">
            <CallToAction text="View All Daily Deals" link="/deals" type="primary" icon={<FiArrowRight />} />
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
          <h2 className={styles.sectionTitle} data-aos="fade-up">Why Trust AffiliateAura?</h2>
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
