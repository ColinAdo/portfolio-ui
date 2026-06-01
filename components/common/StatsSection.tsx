"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Projects Shipped" },
  { value: "100%", label: "Satisfied Clients" },
];

export default function StatsSection() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="w-full h-px bg-stroke mb-16" />

        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary leading-none mb-3">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-muted uppercase tracking-[0.25em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-px bg-stroke mt-16" />
      </div>
    </section>
  );
}
