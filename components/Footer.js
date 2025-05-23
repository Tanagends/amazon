"use client";

import Link from 'next/link'; // Import Link from next/link
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaAmazon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [ /* ... (same as before) ... */ ];
  const footerSections = [ /* ... (same as before) ... */ ];
  // const socialLinks = [
  //   { href: "#", icon: <FaFacebookF />, label: "Facebook" },
  //   { href: "#", icon: <FaTwitter />, label: "Twitter" },
  //   { href: "#", icon: <FaInstagram />, label: "Instagram" },
  //   { href: "#", icon: <FaYoutube />, label: "YouTube" },
  //   { href: "#", icon: <FaAmazon />, label: "Amazon Store" },
  // ];

  // const footerSections = [
  //   {
  //     title: "Explore",
  //     links: [
  //       { href: "/products", label: "All Products" },
  //       { href: "/deals", label: "Hot Deals" },
  //       { href: "/guides", label: "Buying Guides" },
  //     ]
  //   },
  //   {
  //     title: "About Aura",
  //     links: [
  //       { href: "/about", label: "About Us" },
  //       { href: "/contact", label: "Contact" },
  //     ]
  //   },
  //   {
  //     title: "Support",
  //     links: [
  //       { href: "/privacy-policy", label: "Privacy Policy" },
  //       { href: "/terms-of-service", label: "Terms of Service" },
  //     ]
  //   }
  // ];


  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
                {/* Link: Removed legacyBehavior */}
                <Link href="/" className={styles.footerLogo}>
                    Affiliate<span className={styles.logoAccent}>Aura</span>
                </Link>
                <p className={styles.footerTagline}>Your trusted guide to Amazon's best finds.</p>
                <p className={styles.disclosure}>
                    As an Amazon Associate, we earn from qualifying purchases. All product recommendations are independently chosen by our editorial team.
                </p>
            </div>
            <div className={styles.footerNewsletter}>
                <h4 className={styles.newsletterTitle}>Stay Updated!</h4>
                <p>Get the latest deals and top picks straight to your inbox.</p>
                <form className={styles.newsletterForm}>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>

        <div className={styles.footerMain}>
            {footerSections.map(section => (
                <div key={section.title} className={styles.footerLinksColumn}>
                    <h4 className={styles.footerLinksTitle}>{section.title}</h4>
                    <ul>
                        {section.links.map(link => (
                            <li key={link.href}>
                                {/* Link: Removed legacyBehavior */}
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {currentYear} AffiliateAura. All Rights Reserved.</p>
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
