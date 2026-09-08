import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Volume2, Radio, Headphones, Share2, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sick Conversations Podcast | Raremark Foundation",
  description: "Real stories. Honest conversations. Unfiltered experiences living with sickle cell and rare diseases.",
};

export default function PodcastPage() {
  const episodes = [
    {
      id: "ep-01",
      number: "Episode 12",
      title: "Walking Again: Surviving Avascular Necrosis and Hip Replacement",
      duration: "42 mins",
      date: "August 18, 2026",
      description: "Warrior stories of pain crisis, the onset of avascular necrosis of the femoral head, and the journey toward total hip arthroplasty funded through community solidarity.",
    },
    {
      id: "ep-02",
      number: "Episode 11",
      title: "Breaking the Silence: Genotype Screening and Family Planning",
      duration: "38 mins",
      date: "July 24, 2026",
      description: "How early genotype testing transforms future generations, overcoming cultural stigma and fear around sickle cell trait carrier status.",
    },
    {
      id: "ep-03",
      number: "Episode 10",
      title: "Hydroxyurea Access and Local Manufacturing in East Africa",
      duration: "49 mins",
      date: "June 29, 2026",
      description: "A deep dive into pharmaceutical supply chains, government subsidies, and why local manufacturing is a game changer for sickle cell care in Uganda.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO HEADER ================= */}
        <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-[#07263A] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Cover Art */}
              <div className="lg:col-span-5">
                <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-neutral-900">
                  <Image
                    src="/images/figma/podcast-cover.png"
                    alt="Sick Conversations Podcast Cover"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text & Meta */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 border border-red-500/30 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  <Volume2 className="w-4 h-4 text-red-400" />
                  Official Podcast Series
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight">
                  Sick Conversations Podcast: Real stories. Honest conversations. Unfiltered experiences.
                </h1>

                <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
                  Join us as we explore the journeys of those living with rare diseases, the challenges they face, and the breakthroughs that bring hope. Because every story matters. 💙
                </p>

                <p className="text-xs font-bold text-red-400 tracking-wider">
                  #SickConversations #RaremarkFoundation
                </p>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button className="inline-flex items-center gap-3 bg-[#DC143C] hover:bg-[#B1002C] text-white text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-red-900/40 transition-all hover:scale-105 active:scale-95">
                    <Play className="w-4 h-4 fill-white" />
                    Watch Our Latest Episode Now
                  </button>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400">
                    <Headphones className="w-4 h-4 text-neutral-300" />
                    Available on all major platforms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EPISODES LIST ================= */}
        <section className="py-20 lg:py-28 bg-[#FCFCFD]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#DC143C]">
                  Audio & Video Archive
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#161A32] tracking-tight mt-1">
                  Recent Episodes
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                <Radio className="w-4 h-4 text-[#DC143C]" />
                Season 1
              </div>
            </div>

            <div className="space-y-6">
              {episodes.map((ep) => (
                <div
                  key={ep.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 text-xs text-neutral-400 font-bold uppercase tracking-wider">
                      <span className="text-[#DC143C]">{ep.number}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {ep.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {ep.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#161A32] hover:text-[#DC143C] transition-colors cursor-pointer">
                      {ep.title}
                    </h3>

                    <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                      {ep.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
                    <button
                      className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-red-50 hover:text-[#DC143C] text-neutral-800 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all"
                      aria-label={`Play ${ep.title}`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Listen
                    </button>
                    <button
                      className="p-3 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
                      aria-label="Share episode"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
