"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export function BackToTop() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={false}
      animate={
        shouldReduceMotion
          ? { opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }
          : { opacity: visible ? 1 : 0, y: visible ? 0 : 8 }
      }
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-10 h-10 bg-primary text-on-primary rounded-sm shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-colors"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </motion.button>
  );
}
