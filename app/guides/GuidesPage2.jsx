// File: /app/guides/GuidesPage.jsx (Definitive Fix)
"use client";

import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import { FiMessageSquare, FiFilter, FiSearch, FiArrowRight, FiCalendar, FiUser, FiX } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react'; 
import { useDebounce } from 'use-debounce';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import styles from '../../styles/GuidesPage.module.css';

export default function GuidesPageClient() {
  // --- STATE MANAGEMENT (Unchanged) ---
  const [guides, setGuides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [sortOption, setSortOption] = useState("recent");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const [allCategories, setAllCategories] = useState([]);
  
  // --- REFINED DATA FETCHING LOGIC (THE FIX) ---
  
  // This ref now correctly prevents the update hook from firing prematurely.
  const isUpdatePhase = useRef(false);

  // HOOK 1: Handles the INITIAL data load ONCE.
  useEffect(() => {
    const fetchInitialGuides = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/guides');
        if (!response.ok) throw new Error('Failed to load initial guides.');
        const data = await response.json();
        console.log(data);
        
        const uniqueCategories = Array.from(new Set(data.map(g => g.category).filter(Boolean)));
        setAllCategories(uniqueCategories);
        setSelectedCategories(uniqueCategories); 
        setGuides(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
        // CRITICAL: Flip the flag only after the entire initial load is complete.
        // This signals that any subsequent changes are true user updates.
        isUpdatePhase.current = true;
      }
    };

    fetchInitialGuides();
  // Empty dependency array [] ensures this runs only once on mount.
  }, []);

  // HOOK 2: Handles all SUBSEQUENT updates from user actions.
  useEffect(() => {
    // If we are still in the initial loading phase, do nothing.
    if (!isUpdatePhase.current) {
      return;
    }

    const fetchFilteredGuides = async () => {
      // Don't set loading to true if it's just a search query update with existing results
      if (guides.length > 0) setIsLoading(true);
      setError(null);

      if (selectedCategories.length === 0 && !debouncedSearchQuery) {
        setGuides([]);
        setIsLoading(false);
        return;
      }

      try {
        const params = new URLSearchParams();
        params.set('sort', sortOption);
        
        if (selectedCategories.length > 0) {
            params.set('categories', selectedCategories.join(','));
        }
        
        if (debouncedSearchQuery) {
          params.set('q', debouncedSearchQuery);
        }
        
        // Avoid an API call if there's nothing to filter by
        if (!params.toString()) {
            setIsLoading(false);
            return;
        }

        const response = await fetch(`/api/guides?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to apply filters.');
        const data = await response.json();
        setGuides(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilteredGuides();
  // This hook now correctly runs ONLY for user-driven changes.
  }, [sortOption, selectedCategories, debouncedSearchQuery]);


  // --- EVENT HANDLERS & RENDER (Unchanged) ---
  const handleSelectAll = () => setSelectedCategories(allCategories);
  const handleDeselectAll = () => setSelectedCategories([]);
  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };
  
  return (
      // The rest of your component JSX is unchanged...
      <AnimatedPageWrapper>
      <div className={styles.guidesPageContainer}>
        {/* Header is unchanged */}
        <header className={styles.pageHeader}>
          <div className="container">
            <FiMessageSquare className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Discover Trending Products</h1>
            <p className={styles.pageSubtitle}>In-depth reviews, comparisons, and tips to help you choose the best products.</p>
            <p className={styles.disclaimer}>We might earn commission on qualifying purchases at no extra cost to you.</p>
          </div>
        </header>

        {/* Controls Bar is unchanged */}
        <div className="container">
          <div className={styles.controlsBar}>
              <div className={styles.searchAndFilter}>
                  <div className={styles.searchBox}>
                      <input type="text" placeholder="Search guides..." className={styles.searchInput} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                      <button className={styles.searchButton} aria-label="Search"><FiSearch /></button>
                  </div>
                  <button className={styles.controlButton} onClick={() => setShowFilterMenu(true)}>
                      <FiFilter style={{ marginRight: '0.5em' }} /> Categories ({selectedCategories.length})
                  </button>
              </div>
              <div className={styles.sortAndView}>
                  <select className={styles.sortDropdown} aria-label="Sort guides" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                      <option value="recent">Sort by: Most Recent</option>
                      <option value="title_asc">Title: A-Z</option>
                      <option value="title_desc">Title: Z-A</option>
                  </select>
              </div>
          </div>        
        </div>

        {/* Filter Menu is unchanged */}
        {showFilterMenu && (
          <div className={styles.filterOverlay} onClick={() => setShowFilterMenu(false)}>
            <div className={styles.filterMenu} onClick={(e) => e.stopPropagation()}>
              <header className={styles.filterHeader}><h2><FiFilter /> Filter by Category</h2><button onClick={() => setShowFilterMenu(false)} className={styles.closeFilterButton}><FiX /></button></header>
              <div className={styles.filterActions}><button onClick={handleSelectAll}>Select All</button><button onClick={handleDeselectAll}>Deselect All</button></div>
              <ul className={styles.categoryList}>
                {allCategories.map((cat) => (
                  <li key={cat}><label className={styles.categoryLabel}><input type="checkbox" className={styles.categoryCheckbox} value={cat} checked={selectedCategories.includes(cat)} onChange={(e) => { const { checked, value } = e.target; setSelectedCategories((prev) => checked ? [...prev, value] : prev.filter((c) => c !== value)); }} /><span className={styles.customCheckbox}></span>{cat}</label></li>
                ))}
              </ul>
              <footer className={styles.filterFooter}><button className={styles.showResultsButton} onClick={() => setShowFilterMenu(false)}>Show {guides.length} Guides</button></footer>
            </div>
          </div>
        )}

        <section className={styles.guidesGridSection}>
          <div className="container">
            {isLoading ? (
              <div className={styles.noGuidesMessage}><p>Loading guides...</p></div>
            ) : error ? (
              <div className={styles.noGuidesMessage}><h2>Error</h2><p>{error}</p></div>
            ) : guides.length > 0 ? (
              <div className={styles.guidesGrid}>
                {guides.map(guide => (
                  <article key={guide.id} className={styles.guideCard}>
                    <Link href={`/guides/${guide.slug}`} className={styles.guideLink}>
                        <div className={styles.guideImageWrapper}>
                            <PrismicNextImage field={guide.imageField} fill className={styles.guideImage} />
                            {guide.category && <span className={styles.guideCategoryTag}>{guide.category}</span>}
                        </div>
                        <div className={styles.guideContent}>
                            <h3 className={styles.guideTitle}>{guide.title}</h3>
                            <div className={styles.guideMeta}>
                                {guide.author && <span><FiUser className={styles.metaIcon}/> {guide.author}</span>}
                                {guide.date && <span><FiCalendar className={styles.metaIcon}/> {formatDate(guide.date)}</span>}
                            </div>
                            <p className={styles.guideExcerpt}>{guide.excerpt}</p>
                            <span className={styles.guideReadMore}>Read Full Guide <FiArrowRight className={styles.readMoreIcon}/></span>
                        </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.noGuidesMessage}>
                <h2>No Guides Found</h2>
                <p>We couldn&#39;t find any guides matching your current search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </AnimatedPageWrapper>
  );
}
