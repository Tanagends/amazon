export const dynamic = 'force-dynamic';
// app/guides/page.js
// This will be a Server Component by default.

import Link from 'next/link';
import Image from 'next/image';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path
import CallToAction from '../../components/CallToAction'; // Adjust path
import styles from '../../styles/GuidesPage.module.css'; // Create this CSS Module
import { FiMessageSquare, FiFilter, FiSearch, FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import allGuides from '../../components/guides';

// Placeholder data for guides - In a real app, this would be fetched from Prismic
const allGuidesData = allGuides;

// Metadata for the Guides page
export const metadata = {
  title: 'Expert Buying Guides & Reviews',
  description: 'Explore in-depth buying guides, product reviews, and tips from AffiliateAura to make informed purchasing decisions.',
  openGraph: {
    title: 'Expert Buying Guides & Reviews | AffiliateAura',
    description: 'Your go-to resource for comprehensive guides on a wide range of Amazon products.',
    // images: ['/og-images/guides-page.jpg'], // Create an OG image for this page
  },
};

// Static Filter/Sort Bar component for guides (would be Client Component for real functionality)
const GuidesControlBar = () => {
    return (
        <div className={styles.controlsBar} data-aos="fade-in">
            <div className={styles.searchAndFilter}>
                <div className={styles.searchBox}>
                    <FiSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Search guides..." className={styles.searchInput} />
                </div>
                <button className={styles.controlButton}>
                    <FiFilter style={{ marginRight: '0.5em' }} /> Categories
                </button>
            </div>
            <div className={styles.sortAndView}>
                <select className={styles.sortDropdown} aria-label="Sort guides">
                    <option value="recent">Sort by: Most Recent</option>
                    <option value="popular">Most Popular</option>
                    <option value="title_asc">Title: A-Z</option>
                    <option value="title_desc">Title: Z-A</option>
                </select>
            </div>
        </div>
    );
};

export default function GuidesPage() {
  // In a real app, implement pagination and filtering for guides
  const guidesToShow = allGuidesData; // For now, show all

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
            <GuidesControlBar />
        </div>

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
                                width={600} // Provide appropriate aspect ratio
                                height={338} // e.g., 16:9
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
