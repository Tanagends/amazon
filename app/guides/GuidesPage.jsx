"use client";
// app/guides/page.js
// This will be a Server Component by default.

import Link from 'next/link';
import Image from 'next/image';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path
import styles from '../../styles/GuidesPage.module.css'; // Create this CSS Module
import { FiMessageSquare, FiFilter, FiSearch, FiArrowRight, FiCalendar, FiUser, FiX } from 'react-icons/fi';
import { useState, useMemo } from 'react';

export default function GuidesPage({guides}) {

  const [sortOption, setSortOption] = useState("recent");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = useMemo(
    () => Array.from(new Set(guides.map((g) => g.category))),
    [guides]
  );
  
  // Set all categories as selected by default on first load
  useState(() => {
    setSelectedCategories(allCategories);
  }, [allCategories]);

  const sortedGuides = useMemo(() => {
    // Clone the array to avoid mutating the original prop
    let sortableGuides = [...guides];
    switch (sortOption) {
      case "popular":
        return sortableGuides.sort((a, b) => (b.views || 0) - (a.views || 0));
      case "title_asc":
        return sortableGuides.sort((a, b) => a.title.localeCompare(b.title));
      case "title_desc":
        return sortableGuides.sort((a, b) => b.title.localeCompare(a.title));
      case "recent":
      default:
        return sortableGuides.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }, [guides, sortOption]);

  const filteredGuides = useMemo(() => {
    if (selectedCategories.length === allCategories.length) return sortedGuides;
    if (selectedCategories.length === 0) return [];
    return sortedGuides.filter((g) => selectedCategories.includes(g.category));
  }, [sortedGuides, selectedCategories, allCategories]);

  const guidesToShow = useMemo(() => {
    if (!searchQuery) return filteredGuides;
    const q = searchQuery.toLowerCase();
    return filteredGuides.filter(g => g.title.toLowerCase().includes(q) || g.excerpt.toLowerCase().includes(q));
  }, [filteredGuides, searchQuery]);

  // --- NEW: Handlers for filter actions ---
  const handleSelectAll = () => setSelectedCategories(allCategories);
  const handleDeselectAll = () => setSelectedCategories([]);

  return (
    <AnimatedPageWrapper>
      <div className={styles.guidesPageContainer}>
        <header className={styles.pageHeader} data-aos="fade-in">
          <div className="container">
            <FiMessageSquare className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Expert Buying Guides</h1>
            <p className={styles.pageSubtitle}>
              In-depth reviews, comparisons, and tips to help you choose the best products for your needs.
            </p>
          </div>
        </header>

        <div className="container">
          <div className={styles.controlsBar} data-aos="fade-in">
              <div className={styles.searchAndFilter}>
                  {/* --- UPDATED: Integrated Search Bar --- */}
                  <div className={styles.searchBox}>
                      <input 
                        type="text" 
                        placeholder="Search guides by title..." 
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
                      <option value="popular">Most Popular</option>
                      <option value="title_asc">Title: A-Z</option>
                      <option value="title_desc">Title: Z-A</option>
                  </select>
              </div>
          </div>        
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
                  Show {filteredGuides.length} Guides
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
                  <article key={guide.id} className={styles.guideCard} data-aos="fade-up">
                    <Link href={`/guides/${guide.slug}`} className={styles.guideLink}>
                        <div className={styles.guideImageWrapper}>
                            <Image src={guide.imageUrl} alt={guide.title} fill style={{ objectFit: 'cover' }} />
                            {guide.category && <span className={styles.guideCategoryTag}>{guide.category}</span>}
                        </div>
                        <div className={styles.guideContent}>
                            <h3 className={styles.guideTitle}>{guide.title}</h3>
                            <div className={styles.guideMeta}>
                                {guide.author && <span><FiUser className={styles.metaIcon}/> {guide.author}</span>}
                                {guide.date && <span><FiCalendar className={styles.metaIcon}/> {guide.date}</span>}
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
              <div className={styles.noGuidesMessage} data-aos="fade-up">
                <h2>No Guides Found</h2>
                <p>We couldn't find any guides matching your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* You can implement a proper pagination component here */}
        
      </div>
    </AnimatedPageWrapper>
  );
}
