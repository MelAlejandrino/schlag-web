"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Schlag file explorer?",
    answer:
      "Schlag is a desktop file explorer for Windows built for power users. It provides instant indexed search across your entire drive, tabbed navigation, a built-in PowerShell terminal, and zip browsing — all in a native desktop app powered by Tauri and Rust.",
  },
  {
    question: "Is Schlag free and open source?",
    answer:
      "Yes. Schlag is released under the MIT License. You can download it for free from GitHub Releases, review the source code, and use it for personal or commercial purposes without cost.",
  },
  {
    question: "What Windows versions does Schlag support?",
    answer:
      "Schlag runs on Windows 10 and Windows 11. The app is distributed as a native Windows binary built with Tauri, so it integrates directly with the Windows filesystem and supports full NTFS paths and permissions.",
  },
  {
    question: "How does Schlag search files so fast?",
    answer:
      "Schlag uses an FTS5 trigram index over SQLite for filename search, delivering sub-millisecond queries across millions of entries. Full-text content search is handled by Tantivy for PDFs, Office documents, Markdown, and code files.",
  },
  {
    question: "Can Schlag search inside PDFs, Office documents, and code files?",
    answer:
      "Yes. Schlag supports full-text content search inside PDFs, Markdown, plain text, Microsoft Office documents (.docx, .xlsx, .pptx), and common code file formats — not just filenames.",
  },
  {
    question: "Does Schlag support tabs and terminal integration?",
    answer:
      "Yes. Schlag supports multiple tabs with drag-to-reorder and tab context menus. It also includes a built-in PowerShell PTY terminal that opens at any folder directly from the explorer.",
  },
  {
    question: "Is Schlag built for power users and developers?",
    answer:
      "Yes. Schlag is designed around keyboard-first navigation, keyboard shortcuts for every action, favorites and recent files, view modes, and archive browsing. It targets developers and anyone who needs a fast, precise file management workflow.",
  },
];

export default function FAQ() {
  const shouldReduceMotion = useReducedMotion();

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
            Frequently asked questions
          </h2>
          <p className="text-on-surface-variant max-w-xl">
            Common questions about Schlag, the desktop file explorer for Windows.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-0">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const,
                delay: idx * 0.05,
              }}
              className="py-6 border-b border-outline-variant last:border-b-0"
            >
              <h3 className="text-base font-semibold text-on-surface mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
