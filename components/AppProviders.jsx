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

  // Ensure that AnimatePresence always has a direct child element to apply the key to.
  // If `children` is null or undefined (e.g., due to a page error or an empty render),
  // wrap it in a fragment. This fragment can then be cloned and receive the key.
  const animatableChild = React.isValidElement(children) ? children : <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {/*
        Clone the animatableChild (which is either the original page component or a fragment wrapping it)
        and assign the pathname as its key. This ensures AnimatePresence can correctly track page transitions.
      */}
      {React.cloneElement(animatableChild, { key: pathname })}
    </AnimatePresence>
  );
}

