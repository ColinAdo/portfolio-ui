"use client";

import { motion } from "framer-motion";

const WORKS = [
  {
    id: 1,
    title: "Monie Finance",
    image: "/monie.png",
    spanClass: "md:col-span-6",
    aspect: "aspect-[4/5]",
    href: "https://monie.colinadore.tech",
  },
  {
    id: 2,
    title: "Task Management",
    image: "https://picsum.photos/seed/tasks/800/600",
    spanClass: "md:col-span-6",
    aspect: "aspect-[4/5]",
    href: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    image: "https://picsum.photos/seed/analytics/800/600",
    spanClass: "md:col-span-6",
    aspect: "aspect-[4/5]",
    href: "#",
  },
  {
    id: 4,
    title: "Portfolio Design",
    image: "https://picsum.photos/seed/portfolio2/800/600",
    spanClass: "md:col-span-6",
    aspect: "aspect-[4/5]",
    href: "#",
  },
];

const headerAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function SelectedWorks() {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
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
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display italic text-text-primary leading-tight">
              Featured <em className="font-display italic">projects</em>
            </h2>
            <p className="text-sm text-muted mt-2 max-w-sm">
              A selection of projects I&apos;ve worked on, from concept to
              launch.
            </p>
          </div>

          {/* View all — desktop only */}
          <div className="relative group hidden md:inline-flex hover:scale-105 transition-transform flex-shrink-0">
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <a
              href="https://github.com/ColinAdo"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-1.5 rounded-full text-sm px-5 py-2.5 border border-stroke bg-bg text-text-primary group-hover:border-transparent transition-colors"
            >
              View all work →
            </a>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {WORKS.map((work) => (
            <motion.a
              key={work.id}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer bg-surface border border-stroke col-span-1 ${work.spanClass} ${work.aspect}`}
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Halftone overlay */}
              <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply pointer-events-none" />

              {/* Dark hover overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-300 pointer-events-none" />

              {/* Hover label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                <div className="relative px-4 py-2 bg-white rounded-full">
                  <span
                    className="absolute -inset-0.5 rounded-full pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, #89aacc 0%, #4e85bf 100%)",
                      zIndex: -1,
                    }}
                  />
                  <span className="relative text-sm font-medium text-black">
                    View —{" "}
                    <em className="font-display italic">{work.title}</em>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
