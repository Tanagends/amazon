import { Inter } from 'next/font/google';
import './globals.css';
// Placeholders for components we will create next
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppProviders from '../components/AppProviders'; // For client-side logic like AnimatePresence & AOS

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans', // CSS variable for the font
});

export const metadata = {
  title: {
    default: 'AffiliateAura - Your Amazon Finds Guide', // Simplified default title
    template: '%s | AffiliateAura',
  },
  description: 'Discover top-rated Amazon products, exclusive deals, and expert buying guides.',
  icons: { // Ensure you have these files in /public/favicons/ or update paths
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppProviders> {/* Handles AnimatePresence and AOS initialization */}
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 150px)', /* Adjusted for typical navbar/footer */ paddingTop: '70px' /* Approx Navbar height */ }}>
            {children}
          </main>
          <Footer />
          {/* ScrollToTopButton can be added later if desired */}
        </AppProviders>
      </body>
    </html>
  );
}
