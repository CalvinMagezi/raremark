import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto relative bg-[#1D1D1D] text-white overflow-hidden">
      {/* Sweeping Red Sickle Cell Ribbon in Bottom-Left */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none z-0 w-64 sm:w-80 md:w-[420px] lg:w-[480px] aspect-[618/601]">
        <Image
          src="/images/figma/footer-sickle-curve.png"
          alt=""
          fill
          priority
          className="object-contain object-left-bottom"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Row: Logo + In Short + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Logo Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/raremark-foundation-logo-white.svg"
                alt="Raremark Foundation"
                width={200}
                height={68}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* In Short Column */}
          <div className="md:col-span-4 lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              In short
            </h4>
            <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-light max-w-xs">
              A non-profit organization dedicated to improving the lives of people living with or affected by Sickle Cell Disease.
            </p>
            <div className="pt-1">
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-black text-xs font-bold px-5 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <span>Support us</span>
                <Heart className="w-3.5 h-3.5 fill-black text-black" />
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Contact
            </h4>
            <div className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-light space-y-0.5">
              <p>Ntinda Complex,</p>
              <p>Block D, Roof Top 07</p>
              <p>Kampala, Uganda</p>
              <p className="pt-1 text-neutral-400">admin@raremarkfoundation.org</p>
            </div>
            <div className="pt-1">
              <Link
                href="/connect"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-black text-xs font-bold px-5 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links with Dividers (Right-aligned / max-w container as in Figma) */}
        <div className="mt-12 md:mt-16 flex flex-col md:items-end">
          <div className="w-full md:w-1/2 lg:w-5/12 border-t border-neutral-700/80">
            <Link
              href="/about-us"
              className="block py-3 text-sm sm:text-base text-neutral-200 hover:text-white border-b border-neutral-700/80 transition-colors"
            >
              About us
            </Link>
            <Link
              href="/donate"
              className="block py-3 text-sm sm:text-base text-neutral-200 hover:text-white border-b border-neutral-700/80 transition-colors"
            >
              Support us
            </Link>
            <Link
              href="/programs/heal"
              className="block py-3 text-sm sm:text-base text-neutral-200 hover:text-white border-b border-neutral-700/80 transition-colors"
            >
              Our Programs
            </Link>
          </div>
        </div>

        {/* Social Bar & Copyright */}
        <div className="mt-14 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>Follow us on our social media pages.</p>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-neutral-500 hover:border-white flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-neutral-500 hover:border-white flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-neutral-500 hover:border-white flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.85 18.5V10.13H5.06v8.37h2.79z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-neutral-500 hover:border-white flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-neutral-500 hover:border-white flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-neutral-500 hover:border-white flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.36-.77-1.86c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.28 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.22-.17-.47-.29z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-neutral-500 hover:border-white flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.1 15.6a6.34 6.34 0 0 0 10.79 4.49v-7.8a8.16 8.16 0 0 0 5.7 2.27V11.1a4.84 4.84 0 0 1-3.77-4.41h3.77z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
