// app/products/page.js
// This will be a Server Component by default.

import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path as per your structure
import ProductCard from '../../components/ProductCard';
import CallToAction from '../../components/CallToAction';
import styles from '../../styles/ProductsPage.module.css'; // Create this CSS Module
import { FiBox, FiFilter, FiArrowRight, FiSearch, FiGrid, FiList } from 'react-icons/fi';

// Placeholder data for all products - In a real app, this would be fetched and paginated
const allProductsData = [
  // Re-using some from homepage and deals for variety, add more unique ones
  { id: 'prod001', slug: 'smart-thermostat-x1', name: 'SmartHome Thermostat X1', category: 'Smart Home', price: '129.99', oldPrice: '159.99', imageUrl: 'https://placehold.co/600x400/2ECC71/FFFFFF?text=Smart+Thermo&font=Inter', amazonLink: '#', rating: 4.8, reviewCount: 350, onPromotion: true },
  { id: 'prod002', slug: 'noise-cancelling-headphones-pro', name: 'AuraSound Headphones Pro', category: 'Audio', price: '249.00', imageUrl: 'https://placehold.co/600x400/3498DB/FFFFFF?text=Headphones+Pro&font=Inter', amazonLink: '#', rating: 4.9, reviewCount: 720 },
  { id: 'prod003', slug: 'robot-vacuum-cleaner-s5', name: 'CleanBot Vacuum S5', category: 'Home Appliances', price: '399.50', oldPrice: '499.00', imageUrl: 'https://placehold.co/600x400/9B59B6/FFFFFF?text=Robot+Vacuum&font=Inter', amazonLink: '#', rating: 4.7, reviewCount: 510, onPromotion: true },
  { id: 'prod004', slug: 'portable-espresso-maker', name: 'EspressoGo Portable Maker', category: 'Kitchen Gadgets', price: '69.99', imageUrl: 'https://placehold.co/600x400/E67E22/FFFFFF?text=Espresso+Maker&font=Inter', amazonLink: '#', rating: 4.6, reviewCount: 215 },
  { id: 'deal001', slug: 'xtreme-gaming-laptop-deal', name: 'Xtreme Gaming Laptop - 25% Off!', category: 'Laptops', price: '1199.99', oldPrice: '1599.99', imageUrl: 'https://placehold.co/600x400/E74C3C/FFFFFF?text=Gaming+Laptop+DEAL&font=Inter', amazonLink: '#', rating: 4.7, reviewCount: 210, onPromotion: true, shortDescription: "Powerhouse gaming laptop with top-tier specs, now at an unbeatable price for a limited time." },
  { id: 'deal002', slug: 'smart-coffee-maker-pro', name: 'Smart Coffee Maker Pro - Morning Bliss!', category: 'Kitchen Appliances', price: '79.50', oldPrice: '110.00', imageUrl: 'https://placehold.co/600x400/F39C12/1A1A1A?text=Coffee+Maker+DEAL&font=Inter', amazonLink: '#', rating: 4.6, reviewCount: 350, onPromotion: true, shortDescription: "Start your day perfectly. Brews your favorite coffee programmatically, just the way you like it." },
  { id: 'prod005', slug: 'ultra-wide-curved-monitor', name: 'VisionMax 34" Ultra-Wide Monitor', category: 'Monitors', price: '599.00', imageUrl: 'https://placehold.co/600x400/2c3e50/FFFFFF?text=UltraWide+Monitor&font=Inter', amazonLink: '#', rating: 4.8, reviewCount: 320 },
  { id: 'prod006', slug: 'mechanical-keyboard-rgb', name: 'TypeMaster Pro Mechanical Keyboard', category: 'Computer Accessories', price: '129.99', oldPrice: '159.99', imageUrl: 'https://placehold.co/600x400/e74c3c/FFFFFF?text=Mech+Keyboard&font=Inter', amazonLink: '#', rating: 4.7, reviewCount: 450, onPromotion: true },
  { id: 'prod007', slug: 'air-purifier-hepa', name: 'PureAir HEPA Air Purifier', category: 'Home Appliances', price: '149.00', imageUrl: 'https://placehold.co/600x400/1abc9c/FFFFFF?text=Air+Purifier&font=Inter', amazonLink: '#', rating: 4.6, reviewCount: 600 },
  { id: 'prod008', slug: 'action-camera-4k', name: 'GoAction 4K Adventure Cam', category: 'Cameras', price: '199.99', imageUrl: 'https://placehold.co/600x400/f39c12/000000?text=Action+Cam&font=Inter', amazonLink: '#', rating: 4.5, reviewCount: 380 },
];

// Metadata for the Products page
export const metadata = {
  title: 'All Products - Discover Our Full Collection',
  description: 'Browse the complete collection of products featured on AffiliateAura. Find electronics, home goods, gadgets, and more.',
  openGraph: {
    title: 'All Products | AffiliateAura',
    description: 'Explore our extensive catalog of curated Amazon products.',
    // images: ['/og-images/all-products-page.jpg'], // Create an OG image for this page
  },
};

// Static Filter/Sort Bar component (would be a Client Component for real functionality)
const ProductPageControls = () => {
    return (
        <div className={styles.controlsBar} data-aos="fade-in">
            <div className={styles.searchAndFilter}>
                <div className={styles.searchBox}>
                    <FiSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Search products..." className={styles.searchInput} />
                </div>
                <button className={styles.controlButton}>
                    <FiFilter style={{ marginRight: '0.5em' }} /> Filters
                </button>
            </div>
            <div className={styles.sortAndView}>
                <select className={styles.sortDropdown} aria-label="Sort products">
                    <option value="featured">Sort by: Featured</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="rating">Avg. Customer Review</option>
                    <option value="newest">Newest Arrivals</option>
                </select>
                <div className={styles.viewToggle}>
                    <button className={`${styles.viewButton} ${styles.active}`} aria-label="Grid view">
                        <FiGrid />
                    </button>
                    <button className={styles.viewButton} aria-label="List view">
                        <FiList />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default function ProductsPage() {
  // In a real app, implement pagination and filtering logic
  const productsToShow = allProductsData; // For now, show all

  return (
    <AnimatedPageWrapper>
      <div className={styles.productsPageContainer}>
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600">
          <div className="container">
            <FiBox className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Explore All Products</h1>
            <p className={styles.pageSubtitle}>
              Your one-stop destination for all our curated finds. Dive in and discover your next favorite item!
            </p>
          </div>
        </header>

        {/* Controls Bar (Search, Filter, Sort, View Toggle) */}
        <div className="container">
            <ProductPageControls />
        </div>

        {/* Products Grid Section */}
        <section className={styles.productsGridSection}>
          <div className="container">
            {productsToShow.length > 0 ? (
              <div className={styles.productGrid}>
                {productsToShow.map(product => (
                  <ProductCard key={product.id} product={product} isDeal={product.onPromotion} />
                ))}
              </div>
            ) : (
              <div className={styles.noProductsMessage} data-aos="fade-up">
                <h2>No Products Found</h2>
                <p>We couldn't find any products matching your criteria. Try adjusting your filters or check back later!</p>
              </div>
            )}
          </div>
        </section>

        {/* Pagination Placeholder - Would be a Client Component */}
        <div className={styles.paginationControls} data-aos="fade-up">
            <button className={styles.paginationButton} disabled>&laquo; Previous</button>
            <span className={styles.pageInfo}>Page 1 of 5</span>
            <button className={styles.paginationButton}>Next &raquo;</button>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
}
