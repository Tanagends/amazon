"use client"; // Using motion.a, so mark as client component

import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Create this CSS Module file
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaAmazon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", icon: <FaFacebookF />, label: "Facebook" },
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaYoutube />, label: "YouTube" },
    { href: "#", icon: <FaAmazon />, label: "Our Amazon Store" }, // Example
  ];

  const footerLinkSections = [
    {
      title: "Explore Site",
      links: [
        { href: "/products", label: "All Products" },
        { href: "/deals", label: "Today's Deals" },
        { href: "/guides", label: "Buying Guides" },
        { href: "/categories", label: "Shop Categories" }, // Example
      ]
    },
    {
      title: "About AffiliateAura",
      links: [
        { href: "/about", label: "Our Story" },
        { href: "/contact", label: "Contact Us" },
        { href: "/blog", label: "Affiliate Blog" }, // Example
      ]
    },
    {
      title: "Legal & Support",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/faq", label: "FAQ" }, // Example
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Top part of the footer: Brand and Newsletter */}
        <div className={styles.footerTopSection}>
          <div className={styles.footerBrandInfo}>
            <Link href="/" className={styles.footerLogo}>
              Affiliate<span className={styles.logoAccent}>Aura</span>
            </Link>
            <p className={styles.footerTagline}>Your trusted source for curated Amazon finds and honest reviews.</p>
            <p className={styles.affiliateDisclosure}>
              As an Amazon Associate, we earn from qualifying purchases. This does not affect the price you pay or our editorial independence.
            </p>
          </div>
          <div className={styles.footerNewsletterSignup}>
            <h4 className={styles.newsletterTitle}>Get Exclusive Deals!</h4>
            <p>Subscribe to our newsletter for the latest product drops and special offers.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="your.email@example.com" required aria-label="Email for newsletter"/>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Middle part of the footer: Link columns */}
        <div className={styles.footerLinksGrid}>
          {footerLinkSections.map((section) => (
            <div key={section.title} className={styles.footerLinksColumn}>
              <h4 className={styles.columnTitle}>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom part of the footer: Copyright and Social Icons */}
        <div className={styles.footerBottomSection}>
          <p className={styles.copyrightText}>
            &copy; {currentYear} AffiliateAura. All Rights Reserved.
          </p>
          <div className={styles.socialMediaIcons}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer" // Important for security and SEO
                aria-label={social.label}
                className={styles.socialIconLink}
                whileHover={{ y: -3, scale: 1.15 }} // Animation on hover
                whileTap={{ scale: 0.9 }}      // Animation on tap/click
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
