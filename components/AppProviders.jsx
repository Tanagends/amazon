// components/AppProviders.js
"use client"; // This component uses client-side features

import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

export default function AppProviders({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 600, // Slightly faster default duration
      easing: 'ease-out-cubic',
      once: true, // Animate elements only once
      offset: 30, // Trigger animations a bit sooner
      delay: 50,  // Slight delay for staggered effect if multiple elements animate
    });
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {/*
        Clone the children (which is the page component) and add a unique key.
        This ensures AnimatePresence correctly tracks page transitions.
        The page component itself (e.g., returned by app/page.js) will be the direct animatable child.
        An AnimatedPageWrapper, used within each page, will define the actual motion.
      */}
      {React.isValidElement(children) ? React.cloneElement(children, { key: pathname }) : children}
    </AnimatePresence>
  );
}

