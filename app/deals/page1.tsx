// app/deals/page.js
// This will be a Server Component by default.
// For client-side filtering or interactions, you'd create separate Client Components.
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path
import ProductCard from '../../components/ProductCard';         // Adjust path
import CallToAction from '../../components/CallToAction';       // Adjust path
import styles from '../../styles/DealsPage.module.css';       // Adjust path
import { FiTag, FiFilter, FiArrowRight } from 'react-icons/fi';

// Placeholder data for deals - replace with Prismic data or API calls
const dealProducts = [
  { id: 'deal1', slug: 'super-deal-gadget-xtreme', name: 'Xtreme Deal Gadget - 60% Off!', category: 'Electronics', price: '79.99', oldPrice: '199.99', imageUrl: 'https://placehold.co/600x400/E74C3C/FFFFFF?text=XTREME+DEAL&font=Inter', onPromotion: true, amazonLink: '#', rating: 4.6, reviewCount: 180, shortDescription: "Unbelievable price for this feature-packed gadget. Limited stock!" },
  { id: 'deal2', slug: 'limited-time-kitchen-star', name: 'Kitchen Star Mixer Pro - Flash Sale!', category: 'Home & Kitchen', price: '65.00', oldPrice: '120.00', imageUrl: 'https://placehold.co/600x400/F39C12/1A1A1A?text=KITCHEN+FLASH+SALE&font=Inter', onPromotion: true, amazonLink: '#', rating: 4.7, reviewCount: 220, shortDescription: "Your dream kitchen assistant at a price you won't believe." },
  { id: 'deal3', slug: 'fashion-frenzy-jacket', name: 'Designer Style Jacket - 50% Off Today', category: 'Fashion', price: '49.99', oldPrice: '99.99', imageUrl: 'https://placehold.co/600x400/3498DB/FFFFFF?text=FASHION+FRENZY&font=Inter', onPromotion: true, amazonLink: '#', rating: 4.5, reviewCount: 90, shortDescription: "Stay stylish and save big with this exclusive jacket deal." },
  { id: 'deal4', slug: 'sports-gear-clearance', name: 'Pro Fitness Tracker - Clearance Sale', category: 'Sports & Outdoors', price: '35.00', oldPrice: '70.00', imageUrl: 'https://placehold.co/600x400/1ABC9C/FFFFFF?text=SPORTS+CLEARANCE&font=Inter', onPromotion: true, amazonLink: '#', rating: 4.4, reviewCount: 150, shortDescription: "Top-rated fitness tracker now at its lowest price ever." },
];

// Metadata for the Deals page
export const metadata = {
  title: 'Hot Deals & Promotions',
  description: 'Find the best deals, discounts, and promotions on amazing Amazon products. Updated daily!',
};

// FilterBar component - if it needs state, it must be a Client Component
// For this example, keeping it simple and static within the Server Component.
const FilterBar = () => {
    // In a real app, filter logic would involve state and likely make this a Client Component
    return (
        <section className={styles.filtersSection} data-aos="fade-up">
            <div className="container">
                <div className={styles.filterControls}>
                    <h3 className={styles.filterTitle}><FiFilter /> Filter Deals By:</h3>
                    <div className={styles.filterButtons}>
                        <button className={`${styles.filterButton} ${styles.active}`}>All Deals</button>
                        <button className={styles.filterButton}>Electronics</button>
                        <button className={styles.filterButton}>Home & Kitchen</button>
                        <button className={styles.filterButton}>Fashion</button>
                        <button className={styles.filterButton}>Under $50</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default function DealsPage() {
  // Data fetching for Server Components:
  // const deals = await fetchDealsFromPrismic();
  // For now, using placeholder data.

  return (
    <AnimatedPageWrapper>
      <div className={styles.dealsPageContainer}>
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in">
          <div className="container">
            <FiTag className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Hot Deals & Promotions</h1>
            <p className={styles.pageSubtitle}>
              Don't miss out on these amazing savings! Handpicked daily for the best value.
            </p>
          </div>
        </header>

        {/* Filters Section - Rendered as a simple component here */}
        <FilterBar />

        {/* Deals Grid Section */}
        <section className={styles.dealsGridSection}>
          <div className="container">
            {dealProducts.length > 0 ? (
              <div className={styles.productGrid}>
                {dealProducts.map(product => (
                  <ProductCard key={product.id} product={product} isDeal={true} />
                ))}
              </div>
            ) : (
              <div className={styles.noDealsMessage} data-aos="fade-up">
                <p>😥 No active deals matching your criteria at the moment. Check back soon for new offers!</p>
                <CallToAction text="Explore All Products" link="/products" type="primary" icon={<FiArrowRight />} />
              </div>
            )}
          </div>
        </section>
      </div>
    </AnimatedPageWrapper>
  );
}
