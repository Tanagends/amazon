'use client';

import { useState, useEffect } from 'react';
import { asText } from "@prismicio/client";
import { 
  FiCopy,
  FiCheck,
  FiBookmark,
  FiShare2
} from "react-icons/fi";
import styles from "../../../styles/GuideDetailPage.module.css";

// Table of Contents Component
export const TableOfContents = ({ content }) => {
  const [activeSection, setActiveSection] = useState('');
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Extract headings from content
    if (content) {
      const extractedHeadings = content
        .filter(block => block.type && block.type.startsWith('heading'))
        .map((heading, index) => ({
          id: `heading-${index}`,
          text: asText([heading]),
          level: parseInt(heading.type.replace('heading', ''))
        }));
      setHeadings(extractedHeadings);
    }
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to track active section
      const scrollPosition = window.scrollY + 100;
      
      // Find all heading elements
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const heading = headingElements[i];
        if (heading.offsetTop <= scrollPosition) {
          setActiveSection(heading.id || '');
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (e, headingId) => {
    e.preventDefault();
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className={styles.tableOfContents}>
      <h3 className={styles.tocTitle}>Table of Contents</h3>
      <ul className={styles.tocList}>
        {headings.map((heading) => (
          <li 
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
          >
            <a 
              href={`#${heading.id}`}
              onClick={(e) => scrollToHeading(e, heading.id)}
              className={activeSection === heading.id ? styles.active : ''}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Share buttons component
export const ShareButtons = ({ title }) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const saveArticle = () => {
    // Implement save functionality (could use localStorage or API)
    setSaved(!saved);
    // You could save to localStorage
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    if (!saved) {
      savedArticles.push({ url, title, savedAt: new Date().toISOString() });
    } else {
      const index = savedArticles.findIndex(article => article.url === url);
      if (index > -1) savedArticles.splice(index, 1);
    }
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
  };

  const shareArticle = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying link
      copyLink();
    }
  };

  return (
    <div className={styles.shareButtons}>
      <button onClick={copyLink} className={styles.shareButton}>
        {copied ? <FiCheck /> : <FiCopy />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
      <button 
        onClick={saveArticle} 
        className={`${styles.shareButton} ${saved ? styles.saved : ''}`}
      >
        <FiBookmark /> {saved ? 'Saved' : 'Save'}
      </button>
      <button onClick={shareArticle} className={styles.shareButton}>
        <FiShare2 /> Share
      </button>
    </div>
  );
};

// Sidebar wrapper component
export const Sidebar = ({ content, title }) => {
  return (
    <aside className={styles.sidebarLeft}>
      <TableOfContents content={content} />
      <ShareButtons title={title} />
    </aside>
  );
};

// Export all client components
export const GuideClientComponents = {
  TableOfContents,
  ShareButtons,
  Sidebar
};
