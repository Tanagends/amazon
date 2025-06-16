// components/CallToAction.js
"use client"; // This component uses Framer Motion for hover/tap animations

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // Default icon example

// Reusable Call To Action button component
const CallToAction = ({
  text = "Learn More", // Default button text
  link = "#",           // Default link
  type = 'primary',     // Corresponds to .btn-primary, .btn-secondary in globals.css
  className = '',       // For additional custom styling from parent
  aosData = {},         // For AOS scroll animations e.g., { "data-aos": "fade-up" }
  icon,                 // Optional: Pass an icon component e.g. <FiZap />
  iconPosition = 'right',// 'left' or 'right' for the icon
  target = '_self',     // '_self' or '_blank' for link target
  rel = "",
  onClick,
    // For rel attribute, e.g., 'noopener noreferrer' for target="_blank"
    // Optional onClick handler if it's not just a link
}) => {
  // Construct button classes from global styles and any custom classes
  const buttonClasses = `btn btn-${type} ${className}`;

  // Determine rel attribute, especially for external links
  const linkRel = target === '_blank' ? (rel || 'noopener noreferrer') : rel;

  // Prepare the icon if provided, or use a default
  const buttonIcon = iconPosition === 'right'
    ? icon || <FiArrowRight /> // Default to FiArrowRight if no icon is passed for right position
    : icon; // For left position, only show if icon is explicitly passed

  const content = (
    <>
      {buttonIcon && iconPosition === 'left' && (
        <span style={{ marginRight: '0.5em', display: 'inline-flex', alignItems: 'center' }}>
          {buttonIcon}
        </span>
      )}
      {text}
      {buttonIcon && iconPosition === 'right' && (
        <span style={{ marginLeft: '0.5em', display: 'inline-flex', alignItems: 'center' }}>
          {buttonIcon}
        </span>
      )}
    </>
  );

  // If an onClick handler is provided, render as a button
  if (onClick) {
    return (
      <motion.button
        className={buttonClasses}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        whileHover={{ scale: 1.05, y: -2, boxShadow: "var(--shadow-md)" }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onClick={onClick}
        {...aosData} // Spread AOS data attributes
      >
        {content}
      </motion.button>
    );
  }

  // Otherwise, render as a Link (wrapped in motion.a for animation)
  return (
    // Using passHref with a motion.a child for Next.js Link
      <motion.a
        className={buttonClasses}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} // For icon alignment
        whileHover={{ scale: 1.05, y: -2, boxShadow: "var(--shadow-lg)" }} // Hover animation
        whileTap={{ scale: 0.98, y: 0 }} // Tap animation
        transition={{ type: "spring", stiffness: 300, damping: 15 }} // Springy animation
        target={target}
        rel={linkRel}
        href={link} // Ensure href is set for the Link
        {...aosData} // Spread AOS data attributes (e.g., data-aos="fade-up")
      >
        {content}
      </motion.a>
  );
};

export default CallToAction;

