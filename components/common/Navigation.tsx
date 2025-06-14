"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-morphism py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto top-0 sm:px-0 px-2 rounded flex justify-between items-center">
        <div className="font-display text-2xl text-emerald-300 font-bold gradient-text">
          COLIN ADO
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 font-semibold hover:text-emerald-300 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mr-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-300 border-emerald-300 hover:text-emerald-300 transition-colors">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-6 bg-gray-950 text-emerald-300 border-emerald-300">
              <DropdownMenuLabel>Colin Ado</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navItems.map((item) => (
                <DropdownMenuItem
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-emerald-200 transition-colors duration-300"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
