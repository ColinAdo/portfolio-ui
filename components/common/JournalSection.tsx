"use client";

import { motion } from "framer-motion";

const ENTRIES = [
  {
    id: 1,
    title: "Building Seamless Financial Tracking with AI",
    image: "https://picsum.photos/seed/j1/100/100",
    readTime: "5 min read",
    date: "Dec 2024",
  },
  {
    id: 2,
    title: "Modern Stack Choices for Full-Stack Development in 2025",
    image: "https://picsum.photos/seed/j2/100/100",
    readTime: "8 min read",
    date: "Nov 2024",
  },
  {
    id: 3,
    title: "Real-time Collaboration: WebSockets vs Server-Sent Events",
    image: "https://picsum.photos/seed/j3/100/100",
    readTime: "6 min read",
    date: "Oct 2024",
  },
  {
    id: 4,
    title: "Designing for Delight: The Nuances of Micro-interactions",
    image: "https://picsum.photos/seed/j4/100/100",
    readTime: "4 min read",
    date: "Sep 2024",
  },
];

const headerAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function JournalSection() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          {...headerAnim}
          className="flex items-end justify-between mb-8 md:mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Journal
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display italic text-text-primary leading-tight">
              Recent <em className="font-display italic">thoughts</em>
            </h2>
            <p className="text-sm text-muted mt-2 max-w-sm">
              Perspectives on development, design, and building things that
              last.
            </p>
          </div>

          <div className="relative group hidden md:inline-flex hover:scale-105 transition-transform flex-shrink-0">
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <button className="relative flex items-center gap-1.5 rounded-full text-sm px-5 py-2.5 border border-stroke bg-bg text-text-primary group-hover:border-transparent transition-colors">
              View all →
            </button>
          </div>
        </motion.div>

        {/* Journal entries */}
        <div className="flex flex-col gap-3">
          {ENTRIES.map((entry, i) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors cursor-pointer group"
            >
              {/* Thumbnail */}
              <img
                src={entry.image}
                alt={entry.title}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
              />

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-text-primary text-sm md:text-base font-medium truncate group-hover:text-muted transition-colors">
                  {entry.title}
                </h3>
                <p className="text-muted text-xs mt-0.5">
                  {entry.readTime} · {entry.date}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-muted text-lg flex-shrink-0 group-hover:text-text-primary transition-colors pr-2">
                ↗
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
