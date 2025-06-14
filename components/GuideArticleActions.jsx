"use client";

import React from 'react';
import { FiShare2, FiPrinter } from 'react-icons/fi';
import styles from '../styles/GuideDetailPage.module.css'; // Adjust path if styles are elsewhere

export default function GuideArticleActions() {
  const handleShare = () => {
    // Basic share functionality (e.g., using Web Share API if available, or a fallback)
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Sharing functionality to be implemented! You can copy the URL.');
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className={styles.articleActions} data-aos="fade-up">
      <button className={styles.actionButton} onClick={handleShare}>
        <FiShare2 /> Share
      </button>
      <button className={styles.actionButton} onClick={handlePrint}>
        <FiPrinter /> Print
      </button>
    </div>
  );
}
