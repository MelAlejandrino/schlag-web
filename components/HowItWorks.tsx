"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Background indexing",
    description:
      "Schlag scans your drives in parallel on first launch, using rayon to walk multiple directories at once. No UI blocking — the indexer runs entirely off the main thread.",
  },
  {
    number: "02",
    title: "Instant search",
    description:
      "Filename search uses an FTS5 trigram index over SQLite — sub-millisecond queries across millions of entries. Full-text content search uses Tantivy for PDFs, Office docs, Markdown, and code.",
  },
  {
    number: "03",
    title: "Live updates",
    description:
      "Filesystem watchers detect creates, renames, moves, and deletes in real time. The index stays current without ever rescanning everything from scratch.",
  },
];

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface font-fraunces mb-3">
            How Schlag indexes and searches files
          </h2>
          <p className="text-on-surface-variant max-w-xl">
            A Rust backend with SQLite and Tantivy keeps everything current without ever slowing you down.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const,
                delay: idx * 0.1,
              }}
              className="relative flex flex-col gap-3"
            >
              <span className="text-5xl font-semibold text-primary/40 font-fraunces leading-none">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-on-surface">
                {step.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
