// components/Navbar.js
"use client";

import Link from 'next/link'; // Import Link from next/link
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Navbar.module.css';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = { /* ... (same as before) ... */ };
  const itemVariants = { /* ... (same as before) ... */ };
    // Animation variants for Framer Motion
  // const menuVariants = {
  //   hidden: { opacity: 0, y: -20 },
  //   visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  //   exit: { opacity: 0, y: -20, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: -10 },
  //   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  // };


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "All Products" },
    { href: "/deals", label: "Hot Deals" },
    { href: "/guides", label: "Buying Guides" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <div className={`container ${styles.navContainer}`}>
        {/* Logo: Removed legacyBehavior, styles applied to Link if needed or to a child span */}
        <Link href="/" className={styles.logo}>
          Affiliate<span className={styles.logoAccent}>Aura</span>
        </Link>

        <motion.ul
          className={`${styles.navMenu} ${styles.desktopNav}`}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map(link => (
            <motion.li key={link.href} variants={itemVariants}>
              {/* Link: Removed legacyBehavior and child <a> */}
              <Link href={link.href}>{link.label}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className={styles.navIcons}>
            <button className={styles.iconButton} aria-label="Search">
                <FiSearch />
            </button>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className={`${styles.navMenu} ${styles.mobileNav}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {navLinks.map(link => (
                <motion.li key={link.href} variants={itemVariants} onClick={toggleMenu}>
                  <Link href={link.href}>{link.label}</Link>
                </motion.li>
              ))}
               <motion.li variants={itemVariants} onClick={toggleMenu}>
                  <Link href="/contact">Contact</Link>
                </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
