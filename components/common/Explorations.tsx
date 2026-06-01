"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ITEMS = [
  { id: 1, image: "https://picsum.photos/seed/ex1/400/400", rotation: -3 },
  { id: 2, image: "https://picsum.photos/seed/ex2/400/400", rotation: 2 },
  { id: 3, image: "https://picsum.photos/seed/ex3/400/400", rotation: -2 },
  { id: 4, image: "https://picsum.photos/seed/ex4/400/400", rotation: 4 },
  { id: 5, image: "https://picsum.photos/seed/ex5/400/400", rotation: -1 },
  { id: 6, image: "https://picsum.photos/seed/ex6/400/400", rotation: 3 },
];

const COL_A = ITEMS.slice(0, 3);
const COL_B = ITEMS.slice(3);

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !content || !col1 || !col2) return;

    const pin = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: content,
      pinSpacing: false,
    });

    const p1 = gsap.fromTo(
      col1,
      { y: 150 },
      {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );

    const p2 = gsap.fromTo(
      col2,
      { y: -150 },
      {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );

    return () => {
      pin.kill();
      p1.kill();
      p2.kill();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="explorations"
        className="relative min-h-[300vh] bg-bg overflow-hidden"
      >
        {/* Layer 1 — Pinned center text */}
        <div
          ref={contentRef}
          className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Explorations
            </span>
            <div className="w-8 h-px bg-stroke" />
          </div>

          <h2 className="text-3xl md:text-5xl font-display italic text-text-primary leading-tight mb-4">
            Visual <em className="font-display italic">playground</em>
          </h2>

          <p className="text-sm text-muted max-w-xs mb-8">
            A collection of visual experiments and creative explorations.
          </p>

          <div className="relative group inline-flex hover:scale-105 transition-transform">
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-text-primary bg-bg group-hover:border-transparent transition-colors"
            >
              View on Dribbble ↗
            </a>
          </div>
        </div>

        {/* Layer 2 — Parallax columns */}
        <div className="absolute inset-0 z-20 flex items-start justify-center pointer-events-none px-6">
          <div className="relative w-full max-w-[1400px] grid grid-cols-2 gap-12 md:gap-40 pt-[10vh]">
            {/* Column A */}
            <div ref={col1Ref} className="flex flex-col gap-6 md:gap-8 items-end pointer-events-auto">
              {COL_A.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLightbox(item.image)}
                  className="relative aspect-square w-full max-w-[220px] md:max-w-[320px] rounded-2xl overflow-hidden group"
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                  aria-label="Open image"
                >
                  <img
                    src={item.image}
                    alt={`Exploration ${item.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* Column B */}
            <div ref={col2Ref} className="flex flex-col gap-6 md:gap-8 items-start mt-32 pointer-events-auto">
              {COL_B.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLightbox(item.image)}
                  className="relative aspect-square w-full max-w-[220px] md:max-w-[320px] rounded-2xl overflow-hidden group"
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                  aria-label="Open image"
                >
                  <img
                    src={item.image}
                    alt={`Exploration ${item.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9998] bg-black/90 flex items-center justify-center cursor-zoom-out p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Exploration full view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
