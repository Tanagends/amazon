"use client";

import React, { useState, useEffect, useMemo } from 'react';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import ProductCard from '../../components/ProductCard';
import CallToAction from '../../components/CallToAction';
import styles from '../../styles/ProductsPage.module.css'; // Re-use styles
import { FiZap, FiFilter } from 'react-icons/fi'; // Added FiFilter
import importedProducts from '../../components/ten-products';

// Simple Category Filter Component (can be expanded or moved later)
const CategoryFilters = ({ availableCategories, selectedCategories, onCategoryChange }) => {
    if (!availableCategories || availableCategories.length === 0) {
        return null;
    }
    return (
        <div className={styles.categoryFiltersContainer} data-aos="fade-in"> {/* New style for container */}
            <h3 className={styles.filterTitle}><FiFilter style={{ marginRight: '0.5em' }} />Filter by Category</h3>
            <div className={styles.categoryFiltersList}> {/* New style for list layout */}
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

export default function HotDealsPage() {
  const [allHotDeals, setAllHotDeals] = useState([]);
  const [displayedHotDeals, setDisplayedHotDeals] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const baseProducts = useMemo(() => importedProducts.map(p => {
    const { price, oldPrice, ...rest } = p;
    return {
      ...rest,
      amazonLink: p.imageUrl,
    };
  }), []);

  useEffect(() => {
    const filteredDeals = baseProducts.filter(product => product.onPromotion === true);
    setAllHotDeals(filteredDeals);
  }, [baseProducts]);

  const availableCategories = useMemo(() => {
    if (allHotDeals.length === 0) return [];
    const categories = new Set(allHotDeals.map(p => p.category));
    return Array.from(categories);
  }, [allHotDeals]);

  useEffect(() => {
    let dealsToDisplay = [...allHotDeals];

    if (selectedCategories.length > 0) {
      dealsToDisplay = dealsToDisplay.filter(deal => selectedCategories.includes(deal.category));
    }
    setDisplayedHotDeals(dealsToDisplay);
  }, [allHotDeals, selectedCategories]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevSelected =>
      prevSelected.includes(category)
        ? prevSelected.filter(c => c !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <AnimatedPageWrapper>
      <main className={styles.productsPageContainer} key="hot-deals-page">
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600" key="hot-deals-header">
          <div className="container">
            <FiZap className={styles.headerIcon} /> {/* Using FiZap for hot deals */}
            <h1 className={styles.pageTitle}>Hot Deals</h1>
            <p className={styles.pageSubtitle}>
              Check out our specially selected hot deals and promotions!
            </p>
          </div>
        </header>

        {/* Category Filters for Hot Deals */}
        {availableCategories.length > 0 && (
            <div className="container">
                 <CategoryFilters
                    availableCategories={availableCategories}
                    selectedCategories={selectedCategories}
                    onCategoryChange={handleCategoryChange}
                />
            </div>
        )}

        {/* Products Grid Section */}
        <section className={styles.productsGridSection}>
          <div className="container">
            {displayedHotDeals.length > 0 ? (
              <div className={styles.productGrid}>
                {displayedHotDeals.map(product => (
                  <ProductCard key={product.id} product={product} isDeal={product.onPromotion} />
                ))}
              </div>
            ) : (
              <div className={styles.noProductsMessage} data-aos="fade-up">
                <h2>No Hot Deals Found</h2>
                <p>
                  {selectedCategories.length > 0 || allHotDeals.length === 0 
                    ? "No hot deals match your current filter, or none are available." 
                    : "Please check back later for more exciting offers!"}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Optional: Call to Action Section */}
        <CallToAction
          title="Don't Miss Out!"
          description="Explore our full range of products for even more great finds."
          buttonText="View All Products"
          buttonLink="/products"
          imageUrl="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // Example image
          imageAlt="Promotional banner for all products"
        />
      </main>
    </AnimatedPageWrapper>
  );
}
