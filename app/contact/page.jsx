"use client";

import React, { useState } from 'react';
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import styles from '../../styles/PageWithList.module.css'; // Or a new FaqOnContactPage.module.css
import { FiHelpCircle, FiChevronDown, FiChevronUp, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import faqData from '../../data/faqData'; // Ensure this path is correct
import { section } from 'framer-motion/client';

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.listItem} data-aos="fade-up"> {/* Using generic listItem style */}
      <button
        className={styles.itemHeader} // Using generic itemHeader style
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span>{faq.question}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <div id={`faq-answer-${faq.id}`} className={styles.itemContent}> {/* Using generic itemContent style */}
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function ContactPageWithFaq() { // Renamed component for clarity
  return (
    <AnimatedPageWrapper>
      <main className={styles.pageContainer} key="contact-faq-page"> {/* Using generic pageContainer style */}
        <header className={styles.pageHeader} data-aos="fade-in">
          <div className="container">
            <FiHelpCircle className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
            <p className={styles.pageSubtitle}>
              Have questions? We've got answers. If you don't find what you're looking for, feel free to reach out through other channels.
            </p>
          </div>
        </header>

        <section className={styles.listSection}> {/* Using generic listSection style */}
          <div className="container">
            {faqData.length > 0 ? (
              <div className={styles.itemsList}> {/* Using generic itemsList style */}
                {faqData.map(faq => (
                  <FaqItem key={faq.id} faq={faq} />
                ))}
              </div>
            ) : (
              <p className={styles.noItemsMessage}> {/* Using generic noItemsMessage style */}
                No FAQs available at the moment. Please check back later.
              </p>
            )}
          </div>
        </section>
        
        {/* You can add a small section here if you still want to provide other contact means */}
        <section className={styles.additionalContactInfo} data-aos="fade-up">
            <div className="container">
                <h2>Still Need Help?</h2>
                <p>
                    If your question isn't answered above, you can try reaching out to us via our social media channels or community forums (if applicable).
                </p>
                {/* Example: <Link href="/community">Visit our Community Forum</Link> */}
          <section className={styles.contactSection} data-aos="fade-up">
          <div className={styles.contactLayout}>
            {/* Contact Information Area */}
            <aside className={styles.contactInfoWrapper} data-aos="fade-left" data-aos-delay="100">
              <h2 className={styles.sectionHeadingAlt}>Contact Information</h2>
              <p className={styles.contactInfoIntro}>
                Alternatively, you can reach us through the following channels:
              </p>
              <ul className={styles.contactDetailsList}>
                <li>
                  <FiMail className={styles.contactIcon} />
                  <div>
                    <strong>Email Us:</strong>
                    <a href="mailto:support@affiliateaura.com">support@affiliateaura.com</a>
                  </div>
                </li>
                <li>
                  <FiPhone className={styles.contactIcon} />
                  <div>
                    <strong>Call Us:</strong>
                    <span>(Mon-Fri, 9am-5pm IST)</span>
                    <a href="tel:+910000000000">+91 (000) 000-0000</a> {/* Placeholder */}
                  </div>
                </li>
                <li>
                  <FiMapPin className={styles.contactIcon} />
                  <div>
                    <strong>Our Office:</strong>
                    <span>Peddapuram</span>
                    <span>Andhra Pradesh, India </span> {/* Placeholder */}
                  </div>
                </li>
              </ul>
              <h3 className={styles.socialMediaTitle}>Connect on Social Media</h3>
              <div className={styles.socialMediaLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}><FiFacebook /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialLink}><FiTwitter /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}><FiInstagram /></a>
              </div>
            </aside>
        </div>
        </section>

            </div>
        </section>

        {/* Optional: Map Section */}
        <section className={styles.mapSection} data-aos="fade-up">
            <div className="container">
                <h2 className={styles.sectionHeading}>Find Us On The Map</h2>
                <div className={styles.mapEmbed}>
                    {/* Replace with your actual map embed code or a static image */}
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8627317065757!2d82.1342794738212!3d17.07936581160822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37817acfbe52e5%3A0xf2db667eb06d3475!2sK.K.Golden%20Jubilee%20Resorts%20(A%2Fc)%20(convention%20hall)(%20kalyanamandapam)!5e0!3m2!1sen!2sin!4v1748168674929!5m2!1sen!2sin" 
                        width="100%" 
                        height="400"
                        style={{ border:0, borderRadius: 'var(--rounded-lg)', boxShadow: 'var(--shadow-md)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AffiliateAura Office Location"
                     ></iframe>
                </div>
            </div>
        </section>
      </main>
    </AnimatedPageWrapper>
  );
}