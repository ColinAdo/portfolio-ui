"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const WORDS = ["Design", "Create", "Inspire"];
const DURATION_MS = 2700;

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;
    let completionTimer: ReturnType<typeof setTimeout>;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        completionTimer = setTimeout(onComplete, 400);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 overflow-hidden">
      {/* Top-left label */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.p>

      {/* Center rotating word */}
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 select-none"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom — counter + progress bar */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums select-none">
            {String(count).padStart(3, "0")}
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative h-[3px] bg-stroke/50 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 accent-gradient origin-left h-full"
            style={{
              transform: `scaleX(${count / 100})`,
              transformOrigin: "left",
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
