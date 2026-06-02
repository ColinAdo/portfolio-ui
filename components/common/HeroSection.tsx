"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const ROLES = ["Creative", "Fullstack", "Founder", "Engineer"];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  /* ── Role cycling ──────────────────────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  /* ── GSAP entrance ─────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ ease: "power3.out" });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
        },
        "<0.2",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6">
          COLLECTION &apos;26
        </p>

        <div className="blur-in flex justify-center mb-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-stroke">
            <Image
              src="/colin.jpg"
              alt="Colin Ado"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Colin Ado
        </h1>

        <p className="blur-in text-sm md:text-base text-muted mb-3">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Nairobi.
        </p>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Designing seamless digital interactions by focusing on the unique
          nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          {/* See Works */}
          <div className="relative group inline-flex hover:scale-105 transition-transform">
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <button
              onClick={() =>
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-colors"
            >
              See Works
            </button>
          </div>

          {/* Reach out */}
          <div className="relative group inline-flex hover:scale-105 transition-transform">
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <a
              href="mailto:inbox@mail.colinadore.tech"
              className="relative flex items-center rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent transition-colors"
            >
              Reach out...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
