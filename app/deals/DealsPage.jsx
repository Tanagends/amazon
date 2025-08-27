"use client";
// This will be a Server Component by default.
// Client Components (like ProductCard, CallToAction, AnimatedPageWrapper) will be used within it.
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path if your components folder is elsewhere
import ProductCard from '../../components/ProductCard';
import CallToAction from '../../components/CallToAction';
import styles from '../../styles/DealsPage.module.css';
import { FiTag, FiFilter, FiArrowRight, FiAlertCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Icons for the page
import { useMemo, useState, useEffect } from 'react';

export default function DealsPage({products}) {
  const [filterTerm, setFilterTerm] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Memoize the list of all unique categories
  const allCategories = useMemo(
      () => Array.from(new Set(products.map((p) => p.category))),
      [products]
    );
    
  // Memoize the list of deals based on the current filter
  const currentDeals = useMemo(() => {
    if (filterTerm === 'all') {
      return products;
    }
    return products.filter(product => product.category === filterTerm);
  }, [filterTerm, products]);

  // Reset to page 1 whenever the filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterTerm]);
  
  // Calculate total pages and the deals for the current page
  const totalPages = Math.ceil(currentDeals.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedDeals = currentDeals.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Optional: scroll to top of deals grid on page change
    document.querySelector(`.${styles.dealsGridSection}`).scrollIntoView({ behavior: 'smooth' });
  };

  /* 
   * 
   * The search logic: replace Amazon with prismic search using a prismic client  and predicates to use searchterm and filter by category, optional sorting eg, price high to low, et cetera for a comprehensive search, filter, and sort functionality that depends on prismic
     // State for client-side category filtering
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchProducts = useCallback(async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/search?keywords=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        let errorMessage = `An unexpected error occurred (HTTP ${response.status}).`;
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const errData = await response.json();
            errorMessage = errData.error || 'Failed to fetch products from the API.';
        } else {
            errorMessage = "The API returned an invalid response. This is often caused by incorrect API credentials in your .env.local file. Please check the server logs for more details.";
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setAllProducts(data.products || []);
      
      const newCategories = Array.from(new Set((data.products || []).map(p => p.category)));
      setAllCategories(newCategories);
      setSelectedCategories(newCategories);

    } catch (err) {
      setError(err.message);
      setAllProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Effect to fetch data when the search term changes
  useEffect(() => {
    if (searchTerm) {
      fetchProducts(searchTerm);
    }
  }, [searchTerm, fetchProducts]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;
    setSearchTerm(searchQuery);
    setDisplayPage(1); // Reset to first page on new search
  */

  /* Some groundwork on the search and filter, add sort too (eg low to high price) and make all compatible with prismic predicates and a well rounded search functionality. insert a fully furnished section into the return jsx at its appropriate place
   *
   *
   * <div className="container">
          <form className={styles.controlsBar} onSubmit={handleSearchSubmit}>
            <div className={styles.searchAndFilter}>
                {/* --- UPDATED: Integrated Search Bar --- */}
                <div className={styles.searchBox}>
                    <input 
                      type="text" 
                      placeholder={`Try searching "${search}"...`}
                      className={styles.searchInput}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className={styles.searchButton} disabled={isLoading}>
                        {isLoading ? <FiLoader className={styles.spinningIcon} /> : <FiSearch />}
                    </button>
                </div>
                <button type="button" className={styles.controlButton} onClick={() => setShowFilterMenu(true)} disabled={isLoading || error}>
                    <FiFilter style={{ marginRight: '0.5em' }} /> Filters ({selectedCategories.length}/{allCategories.length})
                </button>
            </div>
          </form>
        </div>

        {/* --- UPDATED: Redesigned Filter Menu --- */}
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
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setSelectedCategories((prev) =>
                            checked ? [...prev, value] : prev.filter((c) => c !== value)
                          );
                        }}
    */  

  return (
    <AnimatedPageWrapper>
      <div className={styles.dealsPageContainer}>
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600">
          <div className="container">
            <FiTag className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Today's Hottest FlipKart Deals</h1>
            <p className={styles.pageSubtitle}>
              Exclusive discounts and special offers, updated regularly. Don't miss out on these amazing savings!
            </p>
          </div>
        </header>

        {/* Filters Section */}
        <section className={styles.filtersSection} data-aos="fade-up">
            <div className="container">
                <div className={styles.filterControls}>
                    <h3 className={styles.filterTitle}><FiFilter /> Filter Deals By:</h3>
                    <div className={styles.filterButtons}>
                        <button className={`${styles.filterButton} ${filterTerm === 'all' ?  styles.active : ''} `} onClick={() => setFilterTerm('all')} id="all-deals-button">
                        All Deals</button>
                        {allCategories.map((category) => (
                            <button 
                                key={category} 
                                className={`${styles.filterButton} ${filterTerm === category ?  styles.active : ''}`} 
                                onClick={() => setFilterTerm(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Deals Grid Section */}
        <section className={styles.dealsGridSection}>
          <div className="container">
            {paginatedDeals.length > 0 ? (
              <div className={styles.productGrid}>
                {paginatedDeals.map(product => (
                  <ProductCard key={product.name} product={product} isDeal={true} />
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

       {/* Pagination Controls */}
       {totalPages > 1 && (
        <section className={styles.paginationSection}>
          <div className={styles.paginationControls}>
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className={styles.pageButton}
            >
              <FiChevronLeft /> Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button 
                key={number} 
                onClick={() => handlePageChange(number)}
                className={`${styles.pageButton} ${currentPage === number ? styles.active : ''}`}
              >
                {number}
              </button>
            ))}
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
        
        {/* Optional: Call to action for newsletter or other pages */}
      </div>
    </AnimatedPageWrapper>
  );
}
