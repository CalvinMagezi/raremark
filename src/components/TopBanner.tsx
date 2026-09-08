"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function TopBanner() {
  return (
    <aside aria-label="Announcement" className="bg-[#B1002C] text-white py-2.5 px-4 text-xs sm:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Josephine Esisa Madewo
          </span>
          <span className="font-bold">Shining Star Gala</span>
          <span className="opacity-60 hidden sm:inline">•</span>
          <span className="text-white/90 hidden sm:inline">Every September</span>
          <span className="opacity-60 hidden md:inline">•</span>
          <span className="text-white/80 text-[11px] uppercase tracking-wider hidden lg:inline">
            Celebrating Impact, Honouring Excellence, Inspiring Community
          </span>
        </div>
        <Link
          href="/programs/heal"
          className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider hover:underline text-white ml-auto"
        >
          Learn More <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </aside>
  );
}
