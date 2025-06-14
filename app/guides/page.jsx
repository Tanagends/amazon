"use client";

import React from 'react';
import Link from 'next/link';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import styles from '../../styles/GuidesPage.module.css';
import { FiBookOpen } from 'react-icons/fi';
import allGuides from '../../data/guidesData'; // Import as default (not named)

const GuideCard = ({ guide }) => (
  <div className={styles.guideCard} data-aos="fade-up">
    <Link href={`/guides/${guide.slug}`}>
      <div className={styles.guideCardLink}>
        {guide.imageUrl && (
          <img src={guide.imageUrl} alt={guide.title} className={styles.guideCardImage} />
        )}
        <div className={styles.guideCardContent}>
          <h3 className={styles.guideCardTitle}>{guide.title}</h3>
          <p className={styles.guideCardExcerpt}>{guide.excerpt}</p>
          <div className={styles.guideCardMeta}>
            <span>By {guide.author}</span> | <span>{guide.date}</span>
          </div>
          <span className={styles.guideCardReadMore}>Read More &rarr;</span>
        </div>
      </div>
    </Link>
  </div>
);

export default function GuidesPage() {
  return (
    <AnimatedPageWrapper>
      <main className={styles.guidesPageContainer}>
        <header className={styles.pageHeader} data-aos="fade-in">
          <div className="container">
            <FiBookOpen className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Our Guides</h1>
            <p className={styles.pageSubtitle}>
              In-depth reviews, comparisons, and tips to help you choose the best products for your needs.
            </p>
          </div>
        </header>

        <section className={styles.guidesGridSection}>
          <div className="container">
            {allGuides && allGuides.length > 0 ? (
              <div className={styles.guidesGrid}>
                {allGuides.map(guide => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            ) : (
              <p className={styles.noGuidesMessage}>No guides available at the moment. Please check back soon!</p>
            )}
          </div>
        </section>
      </main>
    </AnimatedPageWrapper>
  );
}
