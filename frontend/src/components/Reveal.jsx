import React from "react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "", once = true }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-60px" }}
    transition={{ duration: 0.8, ease: easing, delay }}
  >
    {children}
  </motion.div>
);

// Masked line reveal for hero headings
export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className="reveal-mask">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, ease: easing, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);
