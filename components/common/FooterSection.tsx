"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const SOCIALS = [
  { label: "Twitter", href: "https://x.com/Colin_Ado", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/colinado", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/ColinAdo", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/colinadore30", Icon: Instagram },
];

const MARQUEE_TEXT = "BUILDING THE FUTURE • ";

export default function FooterSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  /* ── HLS video (flipped) ─────────────────────────────── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: { destroy: () => void } | null = null;

    import("hls.js").then(({ default: Hls }) => {
      if (Hls.isSupported()) {
        const hls = new Hls({ startLevel: -1 });
        hls.loadSource(HLS_SRC);
        hls.attachMedia(video);
        hlsInstance = hls;
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = HLS_SRC;
      }
    });

    return () => {
      hlsInstance?.destroy();
    };
  }, []);

  /* ── GSAP marquee ────────────────────────────────────── */
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translateX(-50%) translateY(-50%) scaleY(-1)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Marquee */}
        <div className="overflow-hidden mb-12 md:mb-16">
          <div
            ref={marqueeRef}
            className="inline-flex whitespace-nowrap text-[#c2ffe1] text-xs uppercase tracking-[0.4em] py-3 select-none"
          >
            {MARQUEE_TEXT.repeat(20)}
          </div>
        </div>

        {/* CTA block */}
        <div className="text-center mb-16">
          <p className="text-xs text-[#c2ffe1] uppercase tracking-[0.3em] mb-6">
            Available for new projects
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary leading-[0.9] mb-10">
            Let&apos;s build something
            <br />
            <em className="font-display italic opacity-50">together.</em>
          </h2>

          {/* Email button */}
          <div className="relative group inline-flex hover:scale-105 transition-transform">
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <a
              href="mailto:inbox@mail.colinadore.tech"
              className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg text-text-primary text-sm px-8 py-4 group-hover:border-transparent transition-colors"
            >
              inbox@mail.colinadore.tech ↗
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-stroke">
          {/* Socials */}
          <div className="flex items-center gap-6">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#c2ffe1] hover:opacity-70 transition-opacity uppercase tracking-[0.1em]"
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-muted">Available for projects</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-stroke mt-6">
          © {new Date().getFullYear()} Colin Ado. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
