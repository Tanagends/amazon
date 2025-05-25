// app/contact/page.js
// This is a Server Component by default. The form itself would become a Client Component for interactivity.

import AnimatedPageWrapper from '../../components/AnimatedPageWrapper'; // Adjust path
import CallToAction from '../../components/CallToAction'; // Adjust path
import styles from '../../styles/ContactPage.module.css'; // Create this CSS Module
import { FiMail, FiMessageSquare, FiMapPin, FiPhone, FiSend, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

// Metadata for the Contact Us page
export const metadata = {
  title: 'Contact AffiliateAura - Get In Touch With Us',
  description: 'Have questions, suggestions, or partnership inquiries? Contact the AffiliateAura team. We\'d love to hear from you!',
  openGraph: {
    title: 'Contact Us | AffiliateAura',
    description: 'Reach out to AffiliateAura for support, feedback, or collaborations.',
    // images: ['/og-images/contact-us.jpg'], // Create an OG image for this page
  },
};

// Simple Contact Form (Visual Only - would be a Client Component for functionality)
const ContactForm = () => {
    // In a real app, this would be a Client Component with useState for inputs and an onSubmit handler.
    // For example:
    // "use client";
    // import { useState } from 'react';
    // const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    // const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value });
    // const handleSubmit = (e) => { e.preventDefault(); console.log(formData); /* Implement submission logic */ };

    return (
        <form className={styles.contactForm} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="e.g., Jane Doe" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="e.g., jane.doe@example.com" required />
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="e.g., Product Review Request" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
                <FiSend style={{ marginRight: '0.5em' }} /> Send Message
            </button>
        </form>
    );
};


export default function ContactPage() {
  return (
    <AnimatedPageWrapper>
      <div className={styles.contactPageContainer}>
        {/* Page Header */}
        <header className={styles.pageHeader} data-aos="fade-in" data-aos-duration="600">
          <div className="container">
            <FiMessageSquare className={styles.headerIcon} />
            <h1 className={styles.pageTitle}>Get In Touch</h1>
            <p className={styles.pageSubtitle}>
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </div>
        </header>

        {/* Main Content Section: Form and Contact Info */}
        <section className={`${styles.mainContentSection} container`}>
          <div className={styles.contactLayout}>
            {/* Contact Form Area */}
            <div className={styles.formWrapper}>
              <h2 className={styles.sectionHeading}>Send Us a Message</h2>
              <p className={styles.formIntro}>
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

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

      </div>
    </AnimatedPageWrapper>
  );
};
