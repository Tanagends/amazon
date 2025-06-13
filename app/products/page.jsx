"use client"; // Make this a Client Component

import React, { useState, useEffect, useMemo } from 'react'; // Import useMemo
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import ProductCard from '../../components/ProductCard';
import CallToAction from '../../components/CallToAction';
import styles from '../../styles/ProductsPage.module.css';
import { FiBox, FiFilter, FiArrowRight, FiSearch, FiGrid, FiList } from 'react-icons/fi';
import importedProducts from '../../components/ten-products';

// Metadata for the Products page - This should be fine in a Client Component, Next.js handles it.
// export const metadata = {
//   title: 'All Products - Discover Our Full Collection',
//   description: 'Browse the complete collection of products featured on AffiliateAura. Find electronics, home goods, gadgets, and more.',
//   openGraph: {
//     title: 'All Products | AffiliateAura',
//     description: 'Explore our extensive catalog of curated Amazon products.',
//     // images: ['/og-images/all-products-page.jpg'], // Create an OG image for this page
//   },
// };

// ProductPageControls component now accepts props for interactivity

// https://images.unsplash.com/photo-1653990480360-31a12ce9723e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
const ProductPageControls = ({
    searchTerm,
    onSearchChange,
    sortBy,
    onSortChange,
    availableCategories,
    selectedCategories,
    onCategoryChange
}) => {
    return (
        <div className={styles.controlsBar} data-aos="fade-in">
            <div className={styles.searchAndFilter}>
                <div className={styles.searchBox}>
                    <FiSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                </div>

            </div>
            <div className={styles.sortAndView}>
                <select
                    className={styles.sortDropdown}
                    aria-label="Sort products"
                    value={sortBy}
                    onChange={onSortChange}
                >
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
                            {/* Replace Filters button with category checkboxes */}
                <div className={styles.categoryFilters}>
                    <h3 className={styles.filterTitle}><FiFilter style={{ marginRight: '0.5em' }} />Categories</h3>
                    {availableCategories.map(category => (
                        <label key={category} className={styles.categoryLabel}>
                            <input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => onCategoryChange(category)}
                                className={styles.categoryCheckbox}
                            />
                            {category}
                        </label>
                    ))}
                </div>
        </div>
    );
};


export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState([]); // New state for selected categories
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const baseProducts = useMemo(() => importedProducts.map(p => {
    const { price, oldPrice, ...rest } = p;
    return {
      ...rest,
      amazonLink: p.imageUrl,
    };
  }), []);

  const availableCategories = useMemo(() => {
    const categories = new Set(baseProducts.map(p => p.category));
    return Array.from(categories);
  }, [baseProducts]);

  useEffect(() => {
    let products = [...baseProducts];

    // Filter by searchTerm
    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.shortDescription && product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by selectedCategories
    if (selectedCategories.length > 0) {
      products = products.filter(product => selectedCategories.includes(product.category));
    }

    // Sort products
    switch (sortBy) {
      case 'price_asc':
        products.sort((a, b) => parseFloat(a.price || "0") - parseFloat(b.price || "0")); // Handle potential missing price
        break;
      case 'price_desc':
        products.sort((a, b) => parseFloat(b.price || "0") - parseFloat(a.price || "0")); // Handle potential missing price
        break;
      case 'rating':
        products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        // Assuming 'id' can be used for newest. If IDs are like prod001, prod010,
        // simple string sort might not be ideal. For now, using original order or reverse.
        // For this example, let's assume original order is fine for "newest" or "featured"
        // If 'id' is numeric or has a date component, sort by it.
        // For "featured", we could prioritize `onPromotion`
        // products = products.slice().reverse(); // Example for newest if original is oldest first
        break;
      case 'featured':
      default:
        // Default sort or specific logic for "featured"
        // For example, prioritize onPromotion items
        products.sort((a, b) => (b.onPromotion ? 1 : 0) - (a.onPromotion ? 1 : 0));
        break;
    }

    setDisplayedProducts(products);
  }, [searchTerm, sortBy, selectedCategories, baseProducts]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevSelected =>
      prevSelected.includes(category)
        ? prevSelected.filter(c => c !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <AnimatedPageWrapper>
      <main className={styles.productsPageContainer} key="products-page">
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600" key="products-header">
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
            <ProductPageControls
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                availableCategories={availableCategories}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
            />
        </div>

        {/* Products Grid Section */}
        <section className={styles.productsGridSection}>
          <div className="container">
            {displayedProducts.length > 0 ? (
              <div className={styles.productGrid}>
                {displayedProducts.map(product => (
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
      </main>
    </AnimatedPageWrapper>
  );
}
