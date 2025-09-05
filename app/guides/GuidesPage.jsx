"use client";

import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import { FiMessageSquare, FiFilter, FiSearch, FiArrowRight, FiCalendar, FiUser, FiX } from 'react-icons/fi';
import { useState, useMemo, useEffect } from 'react';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path if needed
import styles from '../../styles/GuidesPage.module.css'; // Adjust path if needed

export default function GuidesPageClient({ guides }) {
  // --- STATE MANAGEMENT ---
  const [sortOption, setSortOption] = useState("recent");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // --- DERIVED STATE & MEMOIZATION ---
  const allCategories = useMemo(
    () => Array.from(new Set(guides.map((g) => g.category))),
    [guides]
  );
  
  // Effect to set all categories as selected by default on initial component load
  useEffect(() => {
    if (allCategories.length > 0) {
        setSelectedCategories(allCategories);
    }
  }, [allCategories]);

  // Memoized logic for sorting guides based on the selected option
  const sortedGuides = useMemo(() => {
    let sortableGuides = [...guides];
    switch (sortOption) {
      // Note: "popular" sort option is removed as this data is not available from Prismic.
      case "title_asc":
        return sortableGuides.sort((a, b) => a.title.localeCompare(b.title));
      case "title_desc":
        return sortableGuides.sort((a, b) => b.title.localeCompare(a.title));
      case "recent":
      default:
        // Ensure date objects are valid before comparing
        return sortableGuides.sort((a, b) => {
            const dateA = a.date ? new Date(a.date) : 0;
            const dateB = b.date ? new Date(b.date) : 0;
            return dateB - dateA;
        });
    }
  }, [guides, sortOption]);

  // Memoized logic for filtering guides by selected categories
  const filteredGuides = useMemo(() => {
    // If all categories are selected, no filtering is needed
    if (selectedCategories.length === allCategories.length) return sortedGuides;
    if (selectedCategories.length === 0) return [];
    return sortedGuides.filter((g) => selectedCategories.includes(g.category));
  }, [sortedGuides, selectedCategories, allCategories]);

  // Memoized logic for searching within the filtered guides
  const guidesToShow = useMemo(() => {
    if (!searchQuery) return filteredGuides;
    const q = searchQuery.toLowerCase();
    return filteredGuides.filter(g => g.title.toLowerCase().includes(q) || g.excerpt.toLowerCase().includes(q));
  }, [filteredGuides, searchQuery]);

  // --- EVENT HANDLERS ---
  const handleSelectAll = () => setSelectedCategories(allCategories);
  const handleDeselectAll = () => setSelectedCategories([]);
  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  // --- RENDER ---
  return (
    <AnimatedPageWrapper>
      <div className={styles.guidesPageContainer}>
        <header className={styles.pageHeader}>
          <div className="container">
            <FiMessageSquare className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Discover Trending Products</h1>
            <p className={styles.pageSubtitle}>
              In-depth reviews, comparisons, and tips to help you choose the best products.
            </p>
            <p className={styles.disclaimer}>We might earn commission on qualifying purchases at no extra cost to you.</p>
          </div>
        </header>

        <div className="container">
          <div className={styles.controlsBar}>
              <div className={styles.searchAndFilter}>
                  <div className={styles.searchBox}>
                      <input 
                        type="text" 
                        placeholder="Search guides..." 
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button className={styles.searchButton} aria-label="Search">
                          <FiSearch />
                      </button>
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
                          setSelectedCategories((prev) => checked ? [...prev, value] : prev.filter((c) => c !== value));
                        }}
                      />
                      <span className={styles.customCheckbox}></span>
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
              <footer className={styles.filterFooter}>
                <button className={styles.showResultsButton} onClick={() => setShowFilterMenu(false)}>
                  Show {guidesToShow.length} Guides
                </button>
              </footer>
            </div>
          </div>
        )}

        <section className={styles.guidesGridSection}>
          <div className="container">
            {guidesToShow.length > 0 ? (
              <div className={styles.guidesGrid}>
                {guidesToShow.map(guide => (
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
                            <span className={styles.guideReadMore}>
                                Read Full Guide <FiArrowRight className={styles.readMoreIcon}/>
                            </span>
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


