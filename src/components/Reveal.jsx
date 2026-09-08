import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — subtle scroll-reveal wrapper.
 * Fades + lifts content into view once. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = "",
  as = "div",
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}