"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="py-12 px-6 border-t border-outline-variant">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-on-surface-variant"
      >
        <div className="flex items-center gap-2">
          <Image
            src="/icons/icon.png"
            alt="Schlag"
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="font-medium text-on-surface">Schlag</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MelAlejandrino/Schlag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/MelAlejandrino/Schlag/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors"
          >
            Releases
          </a>
          <a
            href="https://github.com/MelAlejandrino/Schlag/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors"
          >
            MIT License
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} Schlag. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
