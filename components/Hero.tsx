"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  getLatestRelease,
  findWindowsAsset,
  triggerDownload,
} from "@/lib/github";

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

export default function Hero() {
  const [version, setVersion] = useState<string | undefined>(undefined);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const release = await getLatestRelease();
        if (cancelled) return;
        setVersion(release.tag_name);
        setError(false);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const release = await getLatestRelease();
      const asset = findWindowsAsset(release);
      if (asset) {
        triggerDownload(asset.browser_download_url, asset.name);
      }
    } catch {
      window.open(
        "https://github.com/MelAlejandrino/Schlag/releases",
        "_blank",
        "noopener,noreferrer",
      );
    } finally {
      setDownloading(false);
    }
  };

  const hasAsset = !error;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "show"}
          variants={container}
          className="flex flex-col gap-5 md:gap-6"
        >
          <motion.div variants={item} className="flex items-center gap-2.5">
            <Image
              src="/icons/folder_icon.png"
              alt="Schlag"
              width={18}
              height={18}
              className="rounded-sm"
            />
            <span className="text-xs font-medium tracking-widest text-on-surface-variant uppercase">
              Schlag
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl md:text-4xl font-semibold leading-snug tracking-tight text-on-surface font-fraunces"
          >
            A fast desktop file explorer for Windows with instant search, tabs, and terminal integration.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base text-on-surface-variant leading-relaxed max-w-xl"
          >
            Schlag is a desktop file explorer for Windows that indexes your files in the background, searches millions of entries instantly, and provides power-user workflows — all in a native desktop experience powered by Tauri and React.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-surface-variant"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Platform: Windows
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Stack: Tauri, React, Rust
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Search: SQLite FTS5 + Tantivy
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              License: MIT (open source)
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            {hasAsset ? (
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-primary text-on-primary rounded text-sm font-medium transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {downloading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Preparing download...
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download for Windows
                  </>
                )}
              </button>
            ) : (
              <a
                href="https://github.com/MelAlejandrino/Schlag/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-primary text-on-primary rounded text-sm font-medium transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Download from GitHub Releases
              </a>
            )}

            {version && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-[11px] font-mono text-on-surface-variant border border-outline-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {version}
              </span>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
