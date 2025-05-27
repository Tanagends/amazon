// components/Footer.js
"use client";

import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Ensure this path is correct
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaAmazon } from 'react-icons/fa'; // Added FiZap, FiBookOpen
import { FiZap, FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", icon: <FaFacebookF />, label: "Facebook" },
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaYoutube />, label: "YouTube" },
    { href: "#", icon: <FaAmazon />, label: "Amazon Store" },
  ];

  const footerSections = [
    {
      title: "Explore",
      links: [
        { href: "/products", label: "All Products" },
        { href: "/deals", label: "Hot Deals" },
        { href: "/guides", label: "Buying Guides" },
      ]
    },
    {
      title: "About AffiliateAura",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
      ]
    },
    {
      title: "Support",
      links: [
        { href: "/faq", label: "FAQ" },
      ]
    }
  ];


  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
                <Link href="/" className={styles.footerLogo}>
                    Affiliate<span className={styles.logoAccent}>Aura</span>
                </Link>
                <p className={styles.footerTagline}>Your trusted guide to Amazon's best finds.</p>
                <p className={styles.disclosure}>
                    As an Amazon Associate, we earn from qualifying purchases. All product recommendations are independently chosen by our editorial team.
                </p>
            </div>
            {/* Replaced Newsletter with Featured Content Snippet */}
            <div className={styles.footerFeaturedContent}>
                <h4 className={styles.featuredContentTitle}>Don't Miss Out!</h4>
                <div className={styles.featuredItem}>
                    {/* Example: Link to a popular guide */}
                    <FiBookOpen className={styles.featuredIcon} />
                    <div>
                        <Link href="/guides/best-noise-cancelling-headphones-2025" className={styles.featuredLink}>
                            Our Top Headphone Picks for 2025
                        </Link>
                        <p className={styles.featuredDescription}>Dive into crystal-clear audio with our expert guide.</p>
                    </div>
                </div>
                <div className={styles.featuredItem}>
                    {/* Example: Link to deals page */}
                    <FiZap className={styles.featuredIcon} /> {/* Using FiZap for deals */}
                    <div>
                        <Link href="/deals" className={styles.featuredLink}>
                            Today's Hottest Deals
                        </Link>
                        <p className={styles.featuredDescription}>Grab limited-time offers before they're gone!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.footerMain}>
            {footerSections.map(section => (
                <div key={section.title} className={styles.footerLinksColumn}>
                    <h4 className={styles.footerLinksTitle}>{section.title}</h4>
                    <ul>
                        {section.links.map(link => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {currentYear} AffiliateAura. All Rights Reserved.
                           Made with ❤️ by <Link href="https://www.pixelcrafte.co.zw/">PixelCrafte</Link></p>
          <div className={styles.socialIcons}>
            {socialLinks.map(social => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
