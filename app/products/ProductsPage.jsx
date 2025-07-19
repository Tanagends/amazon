// app/products/page.jsx (or wherever your ProductsPage.jsx is located)
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ProductsPage.module.css';
import { FiBox, FiFilter, FiSearch, FiX, FiLoader } from 'react-icons/fi';

export default function ProductsPage() {
  // State for all fetched products and API status
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for search and UI pagination
  const [searchQuery, setSearchQuery] = useState('');
  //Randomizing the search term
  
  const keywords = [
  "Air Fryer",
  "Blender Mixer Grinder",
  "Electric Kettle",
  "Kitchen Storage Containers",
  "Knife Set",
  "Non-stick Cookware Set",
  "Kitchen Scale",
  "Sandwich Maker",
  "Hand Blender",
  "Food Processor",
  "Fitness Tracker",
  "Digital Thermometer",
  "BP Monitor",
  "Glucometer",
  "Resistance Bands",
  "Yoga Mat",
  "Protein Powder",
  "Vitamin D Supplements",
  "Massager Gun",
  "Dumbbells Set",
  "Smart Watch",
  "Bluetooth Speaker",
  "Wireless Earbuds",
  "Smartphone Accessories",
  "Power Bank",
  "Laptop Stand",
  "Gaming Mouse",
  "Portable SSD",
  "Smart Bulb",
  "LED Ring Light",
  "Men’s T-Shirts",
  "Women’s Dresses",
  "Sneakers",
  "Casual Shoes",
  "Sunglasses",
  "Leather Wallet",
  "Men’s Watch",
  "Handbag",
  "Trendy Tops",
  "Ethnic Wear",
  "Vitamin C Face Serum",
  "Moisturizer",
  "Face Wash",
  "Sunscreen",
  "Face Mask",
  "Anti-Aging Cream",
  "Acne Spot Treatment",
  "Skin Brightening Cream",
  "Night Cream",
  "Aloe Vera Gel"
];
  const search = keywords[Math.floor(Math.random()*keywords.length)];

  const [searchTerm, setSearchTerm] = useState(search); // Term that triggers fetch
  const [displayPage, setDisplayPage] = useState(1);

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
    fetchProducts(searchTerm);
  }, [searchTerm, fetchProducts]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;
    setSearchTerm(searchQuery);
    setDisplayPage(1); // Reset to first page on new search
  };
  
  // Client-side filtering based on categories
  const filteredProducts = useMemo(() => {
    // When no categories are loaded yet, return an empty array
    if (allCategories.length === 0) return [];
    // If all categories are selected, no filtering is needed
    if (selectedCategories.length === allCategories.length) return allProducts;
    return allProducts.filter(p => selectedCategories.includes(p.category));
  }, [allProducts, selectedCategories, allCategories]);

  // --- FIX: Reset page to 1 whenever filters change the product list ---
  useEffect(() => {
    setDisplayPage(1);
  }, [filteredProducts.length]);


  // --- UPDATED: Client-side pagination logic ---
  const itemsPerPage = 10; // Changed from 10 to 8
  const totalDisplayPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (displayPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, displayPage, itemsPerPage]);

  return (
    <AnimatedPageWrapper>
      <div className={styles.productsPageContainer}>
        <header className={styles.pageHeader}>
          <div className="container">
            <FiBox className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Explore All Products</h1>
            <p className={styles.pageSubtitle}>Curated finds from Amazon.in, just for you.</p>
          </div>
        </header>

        <div className="container">
          <form className={styles.controlsBar} onSubmit={handleSearchSubmit}>
            <div className={styles.searchAndFilter}>
                <div className={styles.searchBox}>
                    <FiSearch className={styles.searchIcon} />
                    <input 
                      type="text" 
                      placeholder="Search on Amazon.in..." 
                      className={styles.searchInput}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                 <button type="submit" className={styles.viewButton} disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
                <button type="button" className={styles.controlButton} onClick={() => setShowFilterMenu(true)} disabled={isLoading || error}>
                    <FiFilter style={{ marginRight: '0.5em' }} /> Filters
                </button>
            </div>
          </form>
        </div>

        {showFilterMenu && (
          <div className={styles.filterOverlay}>
            <div className={styles.filterMenu}>
              <header className={styles.filterHeader}>
                <h2>Filter by Category</h2>
                <button onClick={() => setShowFilterMenu(false)}><FiX size={20} /></button>
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
                            checked ? [...prev, value] : prev.filter((c) => c !== value)
                          );
                        }}
                      />
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <section className={styles.productsGridSection}>
          <div className="container">
            {isLoading ? (
              <div className={styles.loadingState}>
                <FiLoader className={styles.loaderIcon} />
                <p>Searching Amazon...</p>
              </div>
            ) : error ? (
              <div className={styles.noProductsMessage}>
                <h2>An Error Occurred</h2>
                <p>{error}</p>
              </div>
            ) : paginatedProducts.length > 0 ? (
              <div className={styles.productGrid}>
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} isDeal={product.onPromotion} />
                ))}
              </div>
            ) : (
              <div className={styles.noProductsMessage}>
                <h2>No Products Found</h2>
                <p>We couldn't find any products matching your search or filters. Try another keyword!</p>
              </div>
            )}
          </div>
        </section>

        {/* --- UPDATED: Pagination controls for display pages --- */}
        <div className={styles.paginationControls}>
            <button 
              className={styles.paginationButton} 
              onClick={() => setDisplayPage(p => Math.max(1, p - 1))}
              disabled={displayPage <= 1 || isLoading}
            >
              &laquo; Previous
            </button>
            <span className={styles.pageInfo}>Page {displayPage} of {totalDisplayPages || 1}</span>
            <button 
              className={styles.paginationButton}
              onClick={() => setDisplayPage(p => Math.min(totalDisplayPages, p + 1))}
              disabled={displayPage >= totalDisplayPages || isLoading}
            >
              Next &raquo;
            </button>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
}

