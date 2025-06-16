
"use client";
// This will be a Server Component by default.

import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path as per your structure
import ProductCard from '../../components/ProductCard';
import CallToAction from '../../components/CallToAction';
import styles from '../../styles/ProductsPage.module.css'; // Create this CSS Module
import { FiBox, FiFilter, FiSearch, FiX } from 'react-icons/fi';
import {useState, useMemo} from 'react';
// Metadata for the Products page

export default function ProductsPage({products}) {
  
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  // unique categories for checkbox list
  const allCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );
  const [selectedCategories, setSelectedCategories] = useState([...allCategories]); // multi-select
      
  const sortedProducts = useMemo(() => {
    // Clone so we don’t mutate original
    const items = [...products];

    switch (sortOption) {
      case 'price_asc':
        return items.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );

      case 'price_desc':
        return items.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );

      case 'rating':
        return items.sort((a, b) => b.rating - a.rating);

      case 'newest':
        // Simply reverse the original insertion order so “newest” (last in array) ends up at the bottom
        return items.reverse();

      case 'featured':
      default:
        // Promotions first, then everything else (preserves relative order within each group)
        const promos = items.filter(p => p.onPromotion);
        const nonPromos = items.filter(p => !p.onPromotion);
        return [...promos, ...nonPromos];
    }
  }, [sortOption, products]);

  // Filter products based on selected categories
  const filteredProducts = useMemo(() => {
  if (!selectedCategories.length) return sortedProducts; // Return all if no filter terms
  return sortedProducts.filter(p => selectedCategories.includes(p.category));
}, [sortedProducts, selectedCategories]);

// Handle search query on the filterd products
  const productsToShow = useMemo(() => {
    if (!searchQuery) return filteredProducts;
    const q = searchQuery.toLowerCase();
    return filteredProducts.filter(p => p.name.toLowerCase().includes(q));
  }, [filteredProducts, searchQuery]);

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
        <div className={styles.controlsBar} data-aos="fade-in">
            <div className={styles.searchAndFilter}>
                <div className={styles.searchBox}>
                    <FiSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Search products..." className={styles.searchInput}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className={styles.controlButton}
                onClick={() => setShowFilterMenu(true)}
                >
                    <FiFilter style={{ marginRight: '0.5em' }} /> Filters
                </button>
            </div>
            <div className={styles.sortAndView}>
                <select className={styles.sortDropdown} aria-label="Sort products" onChange={
                  (e) => {
                    console.log(e.target.value);
                    setSortOption(e.target.value)
                  }
                  } 
                  value={sortOption}>
                    <option value="featured">Sort by: Featured</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="rating">Avg. Customer Review</option>
                    <option value="newest">Newest Arrivals</option>
                </select>
                {/* <div className={styles.viewToggle}>
                    <button className={`${styles.viewButton} ${styles.active}`} aria-label="Grid view">
                        <FiGrid />
                    </button>
                    <button className={styles.viewButton} aria-label="List view">
                        <FiList />
                    </button>
                </div> */}
            </div>
        </div>
        </div>

        {/* FILTER MENU OVERLAY */}
        {showFilterMenu && (
          <div className={styles.filterOverlay}>
            <div className={styles.filterMenu}>
              <header className={styles.filterHeader}>
                <h2>Filter by Category</h2>
                <button onClick={() => setShowFilterMenu(false)}>
                  <FiX size={20} />
                </button>
              </header>
              <ul className={styles.categoryList}>
                {allCategories.map((cat) => (
                  <li key={cat}>
                    <label>
                      <input
                        type="checkbox"
                        value={cat}
                        checked={selectedCategories.includes(cat)}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setSelectedCategories((prev) =>
                            checked
                              ? [...prev, value]
                              : prev.filter((c) => c !== value)
                          );
                        }}
                      />
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
              <button
                className={styles.applyFiltersButton}
                onClick={() => setShowFilterMenu(false)}
              >
                Apply
              </button>
            </div>
          </div>
        )}


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
