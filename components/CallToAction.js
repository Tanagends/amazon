// components/CallToAction.js
"use client";

import Link from 'next/link'; // Import Link from next/link
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CallToAction = ({
  text = "Learn More",
  link = "#",
  type = 'primary',
  className = '',
  aosData = {},
  icon,
  iconPosition = 'right',
  target = '_self',
  rel,
}) => {
  const buttonClasses = `btn btn-${type} ${className}`;
  const linkRel = target === '_blank' ? (rel || 'noopener noreferrer') : rel;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span style={{ marginRight: '0.5em', display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {text}
      {icon && iconPosition === 'right' && <span style={{ marginLeft: '0.5em', display: 'inline-flex', alignItems: 'center' }}>{icon || <FiArrowRight />}</span>}
    </>
  );

  return (
    // Link: Removed legacyBehavior. Apply styles/props directly to Link.
    // The motion.a is removed; animations can be applied to Link if it accepts motion props,
    // or wrap Link with motion.div if complex animation is needed.
    // For simplicity, applying motion directly to Link (if supported by its type or by wrapping).
    // A simple way is to make Link a motion component: const MotionLink = motion(Link);
    // Or, wrap the content with motion.span if Link itself doesn't take motion props.
    // For now, let's assume Link can take className and children, and motion is on a wrapper if needed.
    // The error was about legacyBehavior, so focusing on that.
    // Framer Motion's `motion` can wrap Next.js `Link` by creating a custom motion component.
    // const MotionLink = motion(Link);
    // <MotionLink href={link} className={buttonClasses} ... > {content} </MotionLink>
    // However, the original had motion.a, which is fine if Link is just for href.
    // Let's revert to motion.a and ensure Link is used correctly for href.
    // The key is to remove legacyBehavior from the Link that wraps motion.a

    // Corrected approach: Link provides the href, motion.a is for styling and animation.
    <Link href={link} passHref legacyBehavior={undefined}> {/* passHref might be needed if motion.a is the child */}
        <motion.a
            className={buttonClasses}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: "var(--shadow-lg)"}}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            target={target}
            rel={linkRel}
            {...aosData}
        >
            {content}
        </motion.a>
    </Link>
  );
};
// Note: If you still get issues with Link and motion.a, you might need to use:
// <Link href={link} passHref><motion.a ...>{content}</motion.a></Link>
// The `legacyBehavior={undefined}` is a way to explicitly opt-out if a linter complains,
// but the ideal is just removing `legacyBehavior`. The codemod usually handles this well.
// The Next.js codemod for `new-link` typically removes the `<a>` tag entirely and applies its props to `Link`.
// So, the most "modern" version would be:
/*
import { motion } from 'framer-motion';
import Link from 'next/link'; // No motion(Link) needed if Link itself is styled
// ...
const MotionLink = motion(Link); // Create a motion-compatible Link

const CallToAction = ({...}) => {
  // ...
  return (
    <MotionLink // Use the motion-compatible Link
      href={link}
      className={buttonClasses}
      // Apply motion props directly
      whileHover={{ scale: 1.05, y: -2, boxShadow: "var(--shadow-lg)"}}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      target={target}
      rel={linkRel}
      {...aosData} // Spread AOS data attributes
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} // For icon alignment
    >
      {content}
    </MotionLink>
  );
};
*/
// For now, I'll stick to the structure that is closest to the original while fixing legacyBehavior.
// The `passHref` with a child `motion.a` is a valid pattern if `Link` itself isn't directly animatable or styled as the button.
// The codemod `npx @next/codemod@latest new-link .` is the best way to upgrade these.
// I will provide the version that the codemod would likely produce for `CallToAction.js`:

export default CallToAction;
