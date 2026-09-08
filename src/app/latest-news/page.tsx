import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News | Raremark Foundation",
  description: "Stay up to date with the latest advancements, youth campaigns, manufacturing milestones, and policy breakthroughs in sickle cell care.",
};

export default function LatestNewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          {/* ================= PAGE TITLE ================= */}
          <div className="mb-14">
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black text-[#1C1B1B] tracking-tight mb-4">
              Latest News
            </h1>
            <div className="w-24 h-1.5 bg-[#DC143C] rounded-full" />
          </div>

          {/* ================= FEATURED STORY (Two-column lead) ================= */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Content */}
                <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between order-2 lg:order-1">
                  <div className="space-y-4">
                    <time className="text-xs font-black uppercase tracking-[0.2em] text-[#DC143C] block">
                      JUNE 29, 2026
                    </time>
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#1C1B1B] leading-tight">
                      Inter-university health ministers launch youth-led sickle cell campaign
                    </h2>
                    <p className="text-base sm:text-lg text-[#5A413D] font-normal leading-relaxed">
                      A landmark coalition of regional universities has committed to a continent-wide initiative prioritizing genetic counseling and early screening. The program aims to train over 5,000 student ambassadors in its first year.
                    </p>
                  </div>
                  <div className="pt-8">
                    <Link
                      href="#featured"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#DC143C] hover:text-[#B1002C] hover:gap-3 transition-all"
                    >
                      READ STORY <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto min-h-[320px] bg-neutral-100 order-1 lg:order-2">
                  <Image
                    src="/images/figma/news-iuhmc.png"
                    alt="Youth-led sickle cell campaign launch"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ================= SECONDARY STORIES (2-column row) ================= */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Story 1 */}
              <article className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full bg-neutral-100">
                    <Image
                      src="/images/figma/news-hydroxyurea.png"
                      alt="Uganda hydroxyurea plant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-3">
                    <time className="text-xs font-black uppercase tracking-[0.2em] text-[#DC143C] block">
                      MAY 20, 2026
                    </time>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1C1B1B] leading-snug">
                      Uganda commissions first hydroxyurea manufacturing plant
                    </h3>
                  </div>
                </div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                  <Link
                    href="#story-hydroxyurea"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#DC143C] hover:text-[#B1002C]"
                  >
                    READ STORY <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>

              {/* Story 2 */}
              <article className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full bg-neutral-100">
                    <Image
                      src="/images/figma/news-africa-cdc.png"
                      alt="Africa CDC SCD strategy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-3">
                    <time className="text-xs font-black uppercase tracking-[0.2em] text-[#DC143C] block">
                      MAY 19, 2026
                    </time>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1C1B1B] leading-snug">
                      Africa CDC&apos;s continental SCD strategy called a historic turning point
                    </h3>
                  </div>
                </div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                  <Link
                    href="#story-africa-cdc"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#DC143C] hover:text-[#B1002C]"
                  >
                    READ STORY <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* ================= STAT CARDS ROW ================= */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
                <span className="text-5xl sm:text-6xl font-black text-[#1C1B1B] block mb-2">
                  3
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#5A413D]">
                  STORIES THIS QUARTER
                </span>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1B1B] block mb-2">
                  Uganda
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#5A413D]">
                  PROGRAMME FOCUS
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
