"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Instant search",
    description:
      "Find any file in milliseconds with indexed, keyboard-driven search across your entire drive.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Content search",
    description:
      "Search inside PDFs, Markdown, text, Office documents (.docx, .xlsx, .pptx), and code files — not just names.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Open Terminal",
    description:
      "Drop into a real PowerShell PTY at any folder without leaving the explorer. Context-aware command line, always ready.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    title: "Tabs & navigation",
    description:
      "Multiple folders in one window. Drag to reorder, right-click for a tab context menu, and jump between locations instantly.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    ),
  },
];

export default function FeatureCard({ title, description, icon }: Feature) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-surface-container-low border border-outline-variant rounded-sm transition-colors hover:border-outline">
      <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container-high text-primary">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-on-surface">{title}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function Highlights() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="py-24 px-6 border-t border-outline-variant">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface font-fraunces mb-3">
            Built for developers and power users
          </h2>
          <p className="text-on-surface-variant max-w-xl">
            Every feature is designed around speed, precision, and pure utility.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? {} : "show"}
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
