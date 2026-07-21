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
    title: "View modes & group by",
    description:
      "Switch between list, medium icons, and large icons. Collapse groups by type, date, or size — just like native Explorer.",
    icon: (
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
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "File type icons",
    description:
      "Every file shows its real icon from the VS Code material-icon-theme set — no more generic glyphs for everything.",
    icon: (
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
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
    ),
  },
  {
    title: "Keyboard-first",
    description:
      "Every action has a shortcut. Navigate, rename, delete, and search without ever reaching for the mouse.",
    icon: (
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
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="6" y1="8" x2="6" y2="8.01" />
        <line x1="10" y1="8" x2="10" y2="8.01" />
        <line x1="14" y1="8" x2="14" y2="8.01" />
        <line x1="18" y1="8" x2="18" y2="8.01" />
        <line x1="6" y1="12" x2="6" y2="12.01" />
        <line x1="18" y1="12" x2="18" y2="12.01" />
        <line x1="8" y1="16" x2="16" y2="16" />
      </svg>
    ),
  },
  {
    title: "Favorites & Recent",
    description:
      "Star folders and files for instant access. Recent Files surfaces your 10 most recently modified documents across the entire index.",
    icon: (
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Zip browsing",
    description:
      "Open archives like folders. Navigate and preview files inside .zip archives without extracting them first.",
    icon: (
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
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function FeatureRow({ title, description, icon }: Feature) {
  return (
    <div className="flex items-start gap-4 py-5 border-b border-outline-variant last:border-b-0">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container-high text-primary">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-on-surface">{title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Advanced() {
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
    hidden: { opacity: 0, y: 10 },
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
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface font-fraunces mb-3">
            Advanced features
          </h2>
          <p className="text-on-surface-variant max-w-xl">
            Quick access to your important files and archives, without leaving the explorer.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? {} : "show"}
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <FeatureRow {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
