export const dynamic = 'force-dynamic';
// app/deals/page.js
// This will be a Server Component by default.
// Client Components (like ProductCard, CallToAction, AnimatedPageWrapper) will be used within it.

import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path if your components folder is elsewhere
import ProductCard from '../../components/ProductCard';
import CallToAction from '../../components/CallToAction';
import styles from '../../styles/DealsPage.module.css'; // Create this CSS Module
import { FiTag, FiFilter, FiArrowRight, FiAlertCircle } from 'react-icons/fi'; // Icons for the page

// Placeholder data for deals - In a real app, this would be fetched from Prismic or an API
const allDealProducts = [
  { id: 'deal001', slug: 'xtreme-gaming-laptop-deal', name: 'Xtreme Gaming Laptop - 25% Off!', category: 'Laptops', price: '1199.99', oldPrice: '1599.99', imageUrl: 'https://placehold.co/600x400/E74C3C/FFFFFF?text=Gaming+Laptop+DEAL&font=Inter', amazonLink: '#', rating: 4.7, reviewCount: 210, onPromotion: true, shortDescription: "Powerhouse gaming laptop with top-tier specs, now at an unbeatable price for a limited time." },
  { id: 'deal002', slug: 'smart-coffee-maker-pro', name: 'Smart Coffee Maker Pro - Morning Bliss!', category: 'Kitchen Appliances', price: '79.50', oldPrice: '110.00', imageUrl: 'https://placehold.co/600x400/F39C12/1A1A1A?text=Coffee+Maker+DEAL&font=Inter', amazonLink: '#', rating: 4.6, reviewCount: 350, onPromotion: true, shortDescription: "Start your day perfectly. Brews your favorite coffee برنامجmatically, just the way you like it." },
  { id: 'deal003', slug: 'ultra-hd-4k-monitor-deal', name: 'UltraHD 4K Monitor - Crystal Clear Display', category: 'Monitors', price: '299.00', oldPrice: '399.00', imageUrl: 'https://placehold.co/600x400/3498DB/FFFFFF?text=4K+Monitor+DEAL&font=Inter', amazonLink: '#', rating: 4.8, reviewCount: 420, onPromotion: true, shortDescription: "Experience stunning visuals for work and play with this vibrant 27-inch 4K monitor." },
  { id: 'deal004', slug: 'wireless-earbuds-soundwave', name: 'SoundWave True Wireless Earbuds', category: 'Audio', price: '49.99', oldPrice: '79.99', imageUrl: 'https://placehold.co/600x400/9B59B6/FFFFFF?text=Earbuds+DEAL&font=Inter', amazonLink: '#', rating: 4.5, reviewCount: 890, onPromotion: true, shortDescription: "Immersive sound, long battery life, and a comfortable fit. Your perfect audio companion." },
  { id: 'deal005', slug: 'ergonomic-office-chair-comfort', name: 'ComfortMax Ergonomic Office Chair', category: 'Office Furniture', price: '189.99', oldPrice: '259.99', imageUrl: 'https://placehold.co/600x400/2ECC71/FFFFFF?text=Office+Chair+DEAL&font=Inter', amazonLink: '#', rating: 4.7, reviewCount: 310, onPromotion: true, shortDescription: "Work in ultimate comfort and style with adjustable lumbar support and breathable mesh." },
  { id: 'deal006', slug: 'portable-ssd-1tb-lightning', name: 'LightningFast 1TB Portable SSD', category: 'Storage', price: '89.00', oldPrice: '129.00', imageUrl: 'https://placehold.co/600x400/1ABC9C/FFFFFF?text=SSD+DEAL&font=Inter', amazonLink: '#', rating: 4.9, reviewCount: 650, onPromotion: true, shortDescription: "Blazing fast data transfer speeds in a compact and durable design. Take your files anywhere." },
];

// Metadata for the Deals page
export const metadata = {
  title: 'Hot Deals & Special Promotions',
  description: 'Find the latest and greatest deals on Amazon products. Updated daily with discounts on electronics, home goods, fashion, and more!',
  openGraph: {
    title: 'Hot Deals & Special Promotions | AffiliateAura',
    description: 'Don\'t miss out on limited-time offers and exclusive discounts curated by AffiliateAura.',
    // images: ['/og-images/deals-page.jpg'], // Create an OG image for this page
  },
};

// A simple FilterBar component (can be extracted to its own file and made a Client Component if state is needed)
const FilterBar = () => {
    // For a real filter bar, you'd use `useState` and event handlers, making this a Client Component.
    // For this example, it's just a static visual representation.
    return (
        <section className={styles.filtersSection} data-aos="fade-up">
            <div className="container">
                <div className={styles.filterControls}>
                    <h3 className={styles.filterTitle}><FiFilter /> Filter Deals By:</h3>
                    <div className={styles.filterButtons}>
                        {/* These would typically be interactive buttons */}
                        <button className={`${styles.filterButton} ${styles.active}`}>All Deals</button>
                        <button className={styles.filterButton}>Electronics</button>
                        <button className={styles.filterButton}>Home & Kitchen</button>
                        <button className={styles.filterButton}>Fashion</button>
                        <button className={styles.filterButton}>Under $50</button>
                        <button className={styles.filterButton}>Top Rated</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default function DealsPage() {
  // In a real app, you might fetch deals based on filters or pagination
  // For now, we'll display all placeholder deal products.
  const currentDeals = allDealProducts;

  return (
    <AnimatedPageWrapper>
      <div className={styles.dealsPageContainer}>
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600">
          <div className="container">
            <FiTag className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Today's Hottest Deals</h1>
            <p className={styles.pageSubtitle}>
              Exclusive discounts and special offers, updated regularly. Don't miss out on these amazing savings!
            </p>
          </div>
        </header>

        {/* Filters Section */}
        <FilterBar />

        {/* Deals Grid Section */}
        <section className={styles.dealsGridSection}>
          <div className="container">
            {currentDeals.length > 0 ? (
              <div className={styles.productGrid}>
                {currentDeals.map(product => (
                  // Pass `isDeal={true}` to ProductCard to apply deal-specific styling if any
                  <ProductCard key={product.id} product={product} isDeal={true} />
                ))}
              </div>
            ) : (
              <div className={styles.noDealsMessage} data-aos="fade-up">
                <FiAlertCircle className={styles.noDealsIcon} />
                <h2>No Deals Currently Available</h2>
                <p>We couldn't find any active deals matching your criteria right now. Please check back later, as we update our offers frequently!</p>
                <CallToAction text="Explore All Products" link="/products" type="primary" icon={<FiArrowRight />} />
              </div>
            )}
          </div>
        </section>

        {/* Optional: Call to action for newsletter or other pages */}
      </div>
    </AnimatedPageWrapper>
  );
}
