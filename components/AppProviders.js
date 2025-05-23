// components/AppProviders.js
"use client"; // This component uses client-side features

import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { usePathname } from 'next/navigation';

export default function AppProviders({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 100,
    });
  }, []);

  return (
    <AnimatePresence mode="sync" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {/*
        Clone the children (which is the page component) and add a unique key.
        This ensures AnimatePresence correctly tracks page transitions.
        The page component itself (e.g., returned by app/page.js) will be the direct animatable child.
        AnimatedPageWrapper, used within each page, will define the actual motion.
      */}
      {React.isValidElement(children) ? React.cloneElement(children, { key: pathname }) : children}
    </AnimatePresence>
  );
}
