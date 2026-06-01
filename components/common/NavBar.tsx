"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#works" },
  { label: "Resume", href: "/resume" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    if (href.startsWith("#")) {
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 pointer-events-auto transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/20" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleClick("Home", "#home")}
          className="logo-ring relative flex w-9 h-9 rounded-full items-center justify-center hover:scale-110 transition-transform flex-shrink-0"
          aria-label="Home"
        >
          <span className="absolute inset-[2px] rounded-full bg-bg" />
          <span className="relative z-10 font-display italic text-[13px] text-text-primary leading-none">
            CA
          </span>
        </button>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1 flex-shrink-0" />

        {/* Nav links */}
        {NAV_LINKS.map(({ label, href }) =>
          href.startsWith("/") ? (
            <Link
              key={label}
              href={href}
              onClick={() => setActive(label)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                active === label
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {label}
            </Link>
          ) : (
            <button
              key={label}
              onClick={() => handleClick(label, href)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                active === label
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {label}
            </button>
          )
        )}

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1 flex-shrink-0" />

        {/* Say hi */}
        <div className="relative group inline-flex">
          <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <a
            href="mailto:inbox@mail.colinadore.tech"
            className="relative flex items-center gap-1 rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-surface text-text-primary backdrop-blur-md"
          >
            Say hi ↗
          </a>
        </div>
      </nav>
    </div>
  );
}
