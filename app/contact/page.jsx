// app/contact/page.js
import AnimatedPageWrapper from '../../components/AnimatedPageWrapper';
import styles from '../../styles/ContactPage.module.css';
import { FiMessageSquare, FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import faqData from '../../components/faq';
import FAQSection from './faqSection'; // Importing the FAQSection component

// Metadata for the Contact Us page
export const metadata = {
  title: 'Contact AffiliateAura - Get In Touch With Us',
  description: 'Have questions, suggestions, or partnership inquiries? Contact the AffiliateAura team.',
  openGraph: {
    title: 'Contact Us | AffiliateAura',
    description: 'Reach out to AffiliateAura for support, feedback, or collaborations.',
  },
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
              We're here to help and answer any question you might have.
            </p>
          </div>
        </header>

        {/* Main Content Section: FAQ and Contact Info */}
        <section className={`${styles.mainContentSection} container`}>
          <div className={styles.contactLayout}>
            {/* FAQ Section replaces Contact Form */}
            <div className={styles.formWrapper}>
              <FAQSection data={faqData} />
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
                    <a href="mailto:support@affiliateaura.com">affiliateaurateam@gmail.com</a>
                  </div>
                </li>
                <li>
                  <FiPhone className={styles.contactIcon} />
                  <div>
                    <strong>Call Us:</strong>
                    <span>(Mon-Fri, 9am-5pm IST)</span>
                    <a href="tel:+910000000000">+91 (000) 000-0000</a>
                  </div>
                </li>
                <li>
                  <FiMapPin className={styles.contactIcon} />
                  <div>
                    <strong>Our Office:</strong>
                    <span>Peddapuram, Andhra Pradesh, India</span>
                  </div>
                </li>
              </ul>
              <h3 className={styles.socialMediaTitle}>Connect on Social Media</h3>
              <div className={styles.socialMediaLinks}>
                <a href="#" aria-label="Facebook" className={styles.socialLink}><FiFacebook /></a>
                <a href="#" aria-label="Twitter" className={styles.socialLink}><FiTwitter /></a>
                <a href="#" aria-label="Instagram" className={styles.socialLink}><FiInstagram /></a>
              </div>
            </aside>
          </div>
        </section>

        {/* Optional: Map Section */}
        <section className={styles.mapSection} data-aos="fade-up">
          <div className="container">
            <h2 className={styles.sectionHeading}>Find Us On The Map</h2>
            <div className={styles.mapEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8627317065757!2d82.1342794738212!3d17.07936581160822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37817acfbe52e5%3A0xf2db667eb06d3475!2sK.K.Golden%20Jubilee%20Resorts%20(A%2Fc)%20(convention%20hall)(%20kalyanamandapam)!5e0!3m2!1sen!2sin!4v1748168674929!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border:0, borderRadius: 'var(--rounded-lg)', boxShadow: 'var(--shadow-md)' }}
                allowFullScreen
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
}
