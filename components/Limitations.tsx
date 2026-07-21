"use client";

import { motion, useReducedMotion } from "framer-motion";

const limitations = [
  {
    title: "No drag-and-drop outside the app",
    description:
      "You cannot drag files from Schlag and drop them into external apps like Windows File Explorer, Google Drive in Chrome, or other third-party applications. File operations are limited to within Schlag itself.",
  },
  {
    title: "Windows only",
    description:
      "Schlag is built exclusively for Windows 10 and Windows 11. macOS and Linux versions are not yet available.",
  },
];

export default function Limitations() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 border-t border-outline-variant">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface font-fraunces mb-3">
            Known limitations
          </h2>
          <p className="text-on-surface-variant max-w-xl">
            Transparency about what Schlag can and cannot do yet.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="max-w-3xl"
        >
          {limitations.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 py-5 border-b border-outline-variant last:border-b-0"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container-high text-primary">
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
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-on-surface">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
