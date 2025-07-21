"use client";

import Link from 'next/link';
import Image from 'next/image'; // 1. Imported next/image
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaAmazon } from 'react-icons/fa';
import { FiZap, FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.facebook.com/clickyse/", icon: <FaFacebookF />, label: "Facebook" },
    { href: "https://x.com/TeamClickys", icon: <FaTwitter />, label: "X/(Twitter)" },
    { href: "https://www.instagram.com/_clickyse?igsh=bjV3YnZ6OG80MHNq", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaYoutube />, label: "YouTube" },
    { href: "#", icon: <FaAmazon />, label: "Amazon Store" },
  ];

  const footerSections = [
    {
      title: "Explore",
      links: [
        { href: "/products", label: "Amazon Products" },
        { href: "/deals", label: "FlipKart Deals" },
        { href: "/guides", label: "Buying Guides" },
      ]
    },
    {
      title: "About Clickys",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
      ]
    },
    {
      title: "Support",
      links: [
        { href: "/contact", label: "FAQ" },
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
                {/* 2. Replaced text logo with an animated SVG logo */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  whileHover={{ rotate: 720 }} // Rotates another 360° on hover
                  transition={{
                    rotate: { duration: 1.5, ease: "easeOut" }, // Initial load animation
                    default: { duration: 1, ease: "easeInOut" } // Hover animation
                  }}
                  style={{ display: 'inline-block' }} // Keeps layout consistent
                >
                  <Link href="/" className={styles.footerLogo}>
                      <Image
                        src="/images/logosvg.svg" // <-- ‼️ REPLACE WITH YOUR FILE PATH ‼️
                        alt="AffiliateAura Logo"
                        width={100} // Adjust width as needed
                        height={50}  // Adjust height as needed
                      />
                  </Link>
                </motion.div>
                <p className={styles.footerTagline}>Your trusted guide to Amazon's best finds.</p>
                <p className={styles.disclosure}>
                    As an Amazon Associate, we earn from qualifying purchases. All product recommendations are independently chosen by our editorial team.
                </p>
            </div>
            <div className={styles.footerFeaturedContent}>
                <h4 className={styles.featuredContentTitle}>Don't Miss Out!</h4>
                <div className={styles.featuredItem}>
                    <FiBookOpen className={styles.featuredIcon} />
                    <div>
                        <Link href="/products" className={styles.featuredLink}>
                            Our Amazing Amazon Products
                        </Link>
                        <p className={styles.featuredDescription}>Buy from Amazon today with fast shipping and secure checkout!</p>
                    </div>
                </div>
                <div className={styles.featuredItem}>
                    <FiZap className={styles.featuredIcon} />
                    <div>
                        <Link href="/deals" className={styles.featuredLink}>
                            Today's FlipKart Hottest Deals
                        </Link>
                        <p className={styles.featuredDescription}>Grab it now on Flipkart limited stock with exclusive deals!</p>
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
          <p className={styles.copyright}>&copy; {currentYear} Clickys. All Rights Reserved.
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
