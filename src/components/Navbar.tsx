"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Programs", href: "/programs/heal" },
    { label: "Latest News", href: "/latest-news" },
    { label: "Podcast", href: "/podcast" },
    { label: "About Us", href: "/about-us" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logos/raremark-foundation-logo.png"
            alt="Raremark Foundation"
            width={180}
            height={60}
            priority
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-bold tracking-tight transition-colors ${
                  active
                    ? "text-[#B1002C] border-b-2 border-[#B1002C] pb-1 -mb-[2px]"
                    : "text-neutral-800 hover:text-[#B1002C]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Support Us Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center gap-2 bg-[#DC143C] hover:bg-[#B1002C] text-white text-xs uppercase tracking-widest font-black px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            SUPPORT US
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-colors ${
                  active
                    ? "bg-red-50 text-[#B1002C]"
                    : "text-neutral-800 hover:bg-neutral-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#DC143C] text-white text-xs uppercase tracking-widest font-black py-3 rounded-full shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              SUPPORT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
