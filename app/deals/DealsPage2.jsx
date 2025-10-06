"use client";

import { useState, useEffect, useCallback } from 'react';
// --- Prismic Client Imports ---
// 1. Import the createClient function from prismic.ts/js file
import { createClient } from '../../prismicio'; 
// 2. Import the prismic client for building queries
import * as prismic from '@prismicio/client';

import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import ProductCard from '../../components/ProductCard';
import CallToAction from '../../components/CallToAction';
import styles from '../../styles/DealsPage.module.css';
import { 
  FiTag, 
  FiFilter, 
  FiArrowRight, 
  FiAlertCircle, 
  FiChevronLeft, 
  FiChevronRight,
  FiSearch,
  FiLoader,
  FiX,
  FiChevronDown
} from 'react-icons/fi';


export default function DealsPage() {
  // --- State Management ---
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]); // Will be fetched from Prismic
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Search, Filter, and Sort State
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // Temporary state for the input field
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price_asc', 'price_desc'
  
  // UI State
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;

  // --- Data Fetching ---
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const client = createClient(); 
    
    try {
      // 1. Build Predicates for filtering and searching based on model
      const predicates = [
        prismic.predicate.at('document.type', 'product')
      ];
      
      if (searchTerm) {
        // Using 'data.title' which corresponds to 'Title' field
        predicates.push(prismic.predicate.fulltext('my.product.title', searchTerm));
      }
      if (selectedCategories.length > 0) {
        // Using 'data.category' which corresponds to 'Category' field
        predicates.push(prismic.predicate.any('my.product.category', selectedCategories));
      }

      // 2. Build Orderings for sorting
      let orderings = [];
      if (sortBy === 'price_asc') {
        // Using 'data.price' which corresponds to your 'Price' field
        orderings.push({ field: 'my.product.price', direction: 'asc' });
      } else if (sortBy === 'price_desc') {
        orderings.push({ field: 'my.product.price', direction: 'desc' });
      } else {
        // Default sort: Newest products first.
        orderings.push({ field: 'document.first_publication_date', direction: 'desc' });
      }

      // 3. Fetch data from Prismic
      const response = await client.get({
        predicates,
        orderings,
        page: currentPage,
        pageSize: itemsPerPage,
      });

      // 4. Normalize the data structure to match your component's expected props
      const normalizedProducts = response.results.map(p => ({
          id: p.id,
          name: p.data.title, // from 'Title' field
          category: p.data.category, // from 'Category' field
          price: p.data.price, // from 'Price' field
          imageUrl: p.data.image, // from 'image' field .url?
          amazonLink: p.data.link?.url, // from 'link' field
          platform: p.data.platform, // from 'Platform' field
          // Assuming rating and reviewCount are not in your Prismic model based on the image
          rating: 0, 
          reviewCount: 0,
          discount: p.data.discount,
      }));

      setProducts(normalizedProducts);
      setTotalPages(response.total_pages);

    } catch (err) {
      setError("We couldn't load the deals right now. Please try again later.");
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, selectedCategories, sortBy, currentPage]);

  // Effect to fetch products when dependencies change
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // OPTIMIZED: Effect to fetch only the 'category' field to build the filter list
  useEffect(() => {
    const fetchCategories = async () => {
      const client = createClient();
      try {
        // This is much more performant as it only fetches the category field, not the whole document
        const allProductDocs = await client.getAllByType('product', {
            fetch: 'product.category'
        });
        const categories = new Set(allProductDocs.map(p => p.data.category).filter(Boolean)); // .filter(Boolean) removes any null/undefined categories
        setAllCategories(Array.from(categories));
        setSelectedCategories(Array.from(categories)); // Initially select all
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        // Handle error if needed
      }
    };
    fetchCategories();
  }, []);


  // --- Event Handlers ---
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchQuery);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      document.querySelector(`.${styles.dealsGridSection}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectAll = () => setSelectedCategories(allCategories);
  const handleDeselectAll = () => setSelectedCategories([]);
  
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  
  const applyFilters = () => {
      setCurrentPage(1);
      setShowFilterMenu(false);
      // The main useEffect will automatically refetch the data
  }

  return (
    <AnimatedPageWrapper>
      <div className={styles.dealsPageContainer}>
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600">
          <div className="container">
            <FiTag className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Find Your Next Great Deal</h1>
            <p className={styles.pageSubtitle}>
              Search top products from Amazon, Flipkart, and more—all in one place, handpicked by experts.
            </p>
            <p className={styles.disclaimer}>We might earn commission on qualifying purchases at no extra cost to you.</p>
          </div>
        </header>

        {/* --- Search, Filter, and Sort Controls --- */}
        <section className={styles.controlsSection} data-aos="fade-up">
          <div className="container">
            <form className={styles.controlsBar} onSubmit={handleSearchSubmit}>
              <div className={styles.searchBox}>
                  <input 
                    type="text" 
                    placeholder="Search for products..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className={styles.searchButton} disabled={isLoading}>
                      {isLoading && searchTerm === searchQuery ? <FiLoader className={styles.spinningIcon} /> : <FiSearch />}
                  </button>
              </div>
              
              <div className={styles.filterAndSort}>
                <button type="button" className={styles.controlButton} onClick={() => setShowFilterMenu(true)} disabled={isLoading || error || allCategories.length === 0}>
                    <FiFilter style={{ marginRight: '0.5em' }} /> 
                    Filters ({selectedCategories.length > 0 ? `${selectedCategories.length}/${allCategories.length}` : 'All'})
                </button>
                
                <div className={styles.sortContainer}>
                    <select 
                        className={styles.sortSelect} 
                        value={sortBy} 
                        onChange={(e) => {
                            setSortBy(e.target.value);
                            setCurrentPage(1);
                        }}
                        disabled={isLoading}
                    >
                        <option value="default">Sort by: Newest</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                    </select>
                    <FiChevronDown className={styles.sortIcon} />
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* --- Filter Menu Modal --- */}
        {showFilterMenu && (
          <div className={styles.filterOverlay} onClick={() => setShowFilterMenu(false)}>
            <div className={styles.filterMenu} onClick={(e) => e.stopPropagation()}>
              <header className={styles.filterHeader}>
                <h2><FiFilter /> Filter by Category</h2>
                <button onClick={() => setShowFilterMenu(false)} className={styles.closeFilterButton}><FiX /></button>
              </header>
              <div className={styles.filterActions}>
                <button onClick={handleSelectAll}>Select All</button>
                <button onClick={handleDeselectAll}>Deselect All</button>
              </div>
              <ul className={styles.categoryList}>
                {allCategories.map((cat) => (
                  <li key={cat}>
                    <label className={styles.categoryLabel}>
                      <input
                        type="checkbox"
                        className={styles.categoryCheckbox}
                        value={cat}
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                      />
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
              <footer className={styles.filterFooter}>
                <button className={styles.applyFiltersButton} onClick={applyFilters}>
                    Apply Filters
                </button>
              </footer>
            </div>
          </div>
        )}

        {/* Deals Grid Section */}
        <section className={styles.dealsGridSection}>
          <div className="container">
            {isLoading ? (
              <div className={styles.loadingState}>
                <FiLoader className={styles.spinningIcon} />
                <p>Loading Deals...</p>
              </div>
            ) : error ? (
              <div className={styles.noDealsMessage}>
                <FiAlertCircle className={styles.noDealsIcon} />
                <h2>No deals available at the moment. Check again soon!!.</h2>
                <p>{error}</p>
              </div>
            ) : products.length > 0 ? (
              <div className={styles.productGrid}>
                {products.map(product => (
                  <ProductCard key={product.id} product={product} isDeal={true} />
                ))}
              </div>
            ) : (
              <div className={styles.noDealsMessage} >
                <FiAlertCircle className={styles.noDealsIcon} />
                <h2>No Deals Found</h2>
                <p>We couldn't find any deals matching your criteria. Try adjusting your search or filters!</p>
                <CallToAction text="Explore All Products" link="/deals" type="primary" icon={<FiArrowRight />} />
              </div>
            )}
          </div>
        </section>

       {/* Pagination Controls */}
       {!isLoading && totalPages > 1 && (
        <section className={styles.paginationSection}>
          <div className={styles.paginationControls}>
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className={styles.pageButton}
            >
              <FiChevronLeft /> Prev
            </button>
            <span className={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className={styles.pageButton}
            >
              Next <FiChevronRight />
            </button>
          </div>
        </section>
       )}
        
      </div>
    </AnimatedPageWrapper>
  );
}

