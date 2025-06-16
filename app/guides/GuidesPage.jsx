"use client";
// app/guides/page.js
// This will be a Server Component by default.

import Link from 'next/link';
import Image from 'next/image';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path
import CallToAction from '../../components/CallToAction'; // Adjust path
import styles from '../../styles/GuidesPage.module.css'; // Create this CSS Module
import { FiMessageSquare, FiFilter, FiSearch, FiArrowRight, FiCalendar, FiUser, FiX } from 'react-icons/fi';
import { useState, useMemo } from 'react';

export default function GuidesPage({guides}) {

const [sortOption, setSortOption] = useState("recent");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 1) derive unique categories
  const allCategories = useMemo(
    () => Array.from(new Set(guides.map((g) => g.category))),
    [guides]
  );
    const sortedGuides = useMemo(() => {
    // shallow clone so sort() doesn’t mutate original
    switch (sortOption) {
      case "popular":
        // assumes a `views` field; fallback to 0 if missing
        return guides.sort((a, b) => (b.views || 0) - (a.views || 0));

      case "title_asc":
        return guides.sort((a, b) =>
          a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
        );

      case "title_desc":
        return guides.sort((a, b) =>
          b.title.localeCompare(a.title, undefined, { sensitivity: "base" })
        );

      case "recent":
      default:
        // parse your "August 15, 2024" style dates
        return guides.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
    }
  }, [sortOption]);

  
  // 3) filter by category
  const filteredGuides = useMemo(() => {
    if (selectedCategories.length === 0) return sortedGuides;
    return sortedGuides.filter((g) =>
      selectedCategories.includes(g.category)
    );  
  }, [sortedGuides, selectedCategories]);
  // In a real app, implement pagination and filtering for guides
  
  // Handle search query on the filterd products
  const guidesToShow = useMemo(() => {
    if (!searchQuery) return filteredGuides;
    const q = searchQuery.toLowerCase();
    return filteredGuides.filter(g => g.title.toLowerCase().includes(q));
  }, [filteredGuides, searchQuery]);

  return (
    <AnimatedPageWrapper>
      <div className={styles.guidesPageContainer}>
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600">
          <div className="container">
            <FiMessageSquare className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Expert Buying Guides</h1>
            <p className={styles.pageSubtitle}>
              In-depth reviews, comparisons, and tips to help you choose the best products for your needs.
            </p>
          </div>
        </header>

        {/* Controls Bar (Search, Filter Categories, Sort) */}
        <div className="container">
        <div className={styles.controlsBar} data-aos="fade-in">
            <div className={styles.searchAndFilter}>
                <div className={styles.searchBox}>
                    <FiSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Search guides..." className={styles.searchInput} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <button className={styles.controlButton}
                onClick={() => setShowFilterMenu(true)}
                >
                    <FiFilter style={{ marginRight: '0.5em' }} /> Categories
                </button>
            </div>
            <div className={styles.sortAndView}>
                <select className={styles.sortDropdown} aria-label="Sort guides"
                value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="recent">Sort by: Most Recent</option>
                    <option value="popular">Most Popular</option>
                    <option value="title_asc">Title: A-Z</option>
                    <option value="title_desc">Title: Z-A</option>
                </select>
            </div>
        </div>        
        </div>

        {/* Filter Menu Overlay */}
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

        {/* Guides Grid Section */}
        <section className={styles.guidesGridSection}>
          <div className="container">
            {guidesToShow.length > 0 ? (
              <div className={styles.guidesGrid}>
                {guidesToShow.map(guide => (
                  <article key={guide.id} className={styles.guideCard} data-aos="fade-up" data-aos-delay={100 * (guidesToShow.indexOf(guide) % 3) /* Stagger delay based on column */}>
                    <Link href={`/guides/${guide.slug}`} className={styles.guideLink}>
                        <div className={styles.guideImageWrapper}>
                            <Image
                                src={guide.imageUrl}
                                alt={guide.title}
                                fill
                                style={{ objectFit: 'cover', borderRadius: 'var(--rounded-md) var(--rounded-md) 0 0' }}
                            />
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
                <p>We couldn't find any guides matching your criteria. Please check back later as we're always adding new content!</p>
              </div>
            )}
          </div>
        </section>

        {/* Pagination Placeholder - Would be a Client Component */}
        <div className={styles.paginationControls} data-aos="fade-up">
            <button className={styles.paginationButton} disabled>&laquo; Previous</button>
            <span className={styles.pageInfo}>Page 1 of 3</span>
            <button className={styles.paginationButton}>Next &raquo;</button>
        </div>

      </div>
    </AnimatedPageWrapper>
  );
}
