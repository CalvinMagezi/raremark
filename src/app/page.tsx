import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const partners = [
    { name: "Ministry of Health Consortium", src: "/partner-logos/mhclogo@2x-1.png", width: 140, height: 60 },
    { name: "Digimark", src: "/partner-logos/digimark.png", width: 110, height: 45 },
    { name: "Banz Medcare", src: "/partner-logos/banz-medcare.png", width: 100, height: 45 },
    { name: "Gulu Regional Referral Hospital", src: "/partner-logos/gulu-regional-referral-hospital.png", width: 130, height: 50 },
    { name: "Kampala MRI Centre", src: "/partner-logos/kampala-mri-centre.png", width: 120, height: 45 },
    { name: "Masters Bethlehem", src: "/partner-logos/masters-bethlehem.png", width: 120, height: 45 },
    { name: "TSCA", src: "/partner-logos/TSCA.png", width: 60, height: 60 },
    { name: "Hips for Africa", src: "/partner-logos/Hips-for-africa.png", width: 70, height: 55 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <TopBanner />
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-block text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#DC143C] mb-4">
                We empower, connect, and build
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-[#161A32] leading-[1.15] mb-6">
                Sickle Cell isn’t a curse. <br className="hidden sm:inline" />
                It just isn’t getting the coverage it needs. <br className="hidden sm:inline" />
                <span className="text-[#DC143C]">That’s where we come in action!</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed mb-8">
                Raremark Foundation provides trusted, science-backed information and real-life support on sickle cell disease.
              </p>
              <div>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-3 bg-[#DC143C] hover:bg-[#B1002C] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-red-500/20 hover:shadow-red-600/30 transition-all hover:gap-4 active:scale-95"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="mt-12 lg:mt-16 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 aspect-[16/9] max-h-[640px] w-full bg-neutral-100">
              <Image
                src="/images/figma/hero-landing.png"
                alt="Raremark Foundation community and sickle cell warriors"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ================= DARK BRAND STATEMENT BANNER ================= */}
        <section className="bg-[#191A1D] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.15] tracking-tight">
                  The <br />
                  Raremark <br />
                  Foundat<span className="text-[#DC143C]">i</span>on
                </h2>
              </div>
              <div className="md:col-span-7 space-y-4 md:pl-8">
                <p className="text-xl sm:text-2xl md:text-[28px] font-medium text-neutral-100 leading-snug">
                  Raremark Foundation provides trusted, science-backed information and real-life support on sickle cell disease.
                </p>
                <div>
                  <Link
                    href="/about-us"
                    className="inline-block text-sm sm:text-base font-bold text-white underline underline-offset-4 hover:text-[#DC143C] transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PARTNERS TRUST STRIP ================= */}
        <section className="py-12 bg-white border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-8">
              Our Partners
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-8 items-center justify-items-center gap-6 sm:gap-8 opacity-85 hover:opacity-100 transition-opacity">
              {partners.map((p) => (
                <div key={p.name} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all h-14">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={p.width}
                    height={p.height}
                    className="max-h-11 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OUR KEY PROGRAMS & STATS ================= */}
        <section className="py-20 lg:py-28 bg-[#FCFCFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#DC143C]">
                  Measurable Impact
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#161A32] tracking-tight mt-2">
                  Our Key Programs
                </h2>
              </div>
              <Link
                href="/programs/heal"
                className="text-sm font-bold text-[#DC143C] hover:text-[#B1002C] inline-flex items-center gap-1 uppercase tracking-wider"
              >
                View HEAL Program <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Core Programs Cards (from authentic Figma design) */}
            <div className="mb-16 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md bg-white">
              <Image
                src="/images/figma/impact-summary.png"
                alt="Raremark Foundation Programs: Know Your Type, Hope For Warriors Fund, HEAL"
                width={2284}
                height={806}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Impact Metric Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-6xl sm:text-7xl font-black text-[#DC143C] tracking-tighter">
                    11
                  </span>
                  <h3 className="text-xl font-black text-[#161A32] mt-3 mb-2">
                    warriors walked again
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Received life-changing hip replacement surgeries through the Hope for Warriors Fund.
                  </p>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden border border-neutral-100 relative h-36 w-full">
                  <Image
                    src="/images/figma/warriors-walked.png"
                    alt="Warrior hip replacement surgery recovery"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-6xl sm:text-7xl font-black text-[#161A32] tracking-tighter">
                    1,140
                  </span>
                  <h3 className="text-xl font-black text-[#161A32] mt-3 mb-2">
                    people screened
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Screened for their genotype; often the first step toward understanding a family&apos;s risk.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Program: Know Your Type
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-6xl sm:text-7xl font-black text-[#DC143C] tracking-tighter">
                    170
                  </span>
                  <h3 className="text-xl font-black text-[#161A32] mt-3 mb-2">
                    carriers counseled
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Identified and counseled, turning a diagnosis into a plan.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Clinical Guidance & Support
                  </span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-6xl sm:text-7xl font-black text-[#161A32] tracking-tighter">
                    500+
                  </span>
                  <h3 className="text-xl font-black text-[#161A32] mt-3 mb-2">
                    people empowered
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Equipped to make informed health and family-planning decisions.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Grassroots Community Outreach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRENDING TOPICS / LATEST NEWS ================= */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-[#161A32] tracking-tight">
                Trending topics
              </h2>
              <Link
                href="/latest-news"
                className="text-sm font-bold text-[#DC143C] hover:text-[#B1002C] inline-flex items-center gap-1 uppercase tracking-wider"
              >
                Read more stories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Story 1 */}
              <article className="group flex flex-col bg-[#FCFCFD] rounded-2xl overflow-hidden border border-neutral-200/80 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/figma/news-iuhmc.png"
                    alt="IUHMC Sickle Cell Campaign"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <time className="text-xs font-black uppercase tracking-widest text-[#DC143C]">
                      JUNE 29, 2026
                    </time>
                    <h3 className="text-lg font-bold text-[#161A32] group-hover:text-[#DC143C] transition-colors mt-2 mb-3 leading-snug">
                      Launch of International University Health Ministers Consortium (IUHMC) and Sickle Cell Disease Campaign Highlights Youth-Led Action in Uganda.
                    </h3>
                    <p className="text-sm text-neutral-600 font-normal line-clamp-3 leading-relaxed">
                      On 26th June 2026, student health leaders from universities and health training institutions across Uganda gathered for the…
                    </p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-neutral-100">
                    <Link
                      href="/latest-news"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#DC143C] hover:underline"
                    >
                      Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Story 2 */}
              <article className="group flex flex-col bg-[#FCFCFD] rounded-2xl overflow-hidden border border-neutral-200/80 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/figma/news-hydroxyurea.png"
                    alt="Uganda hydroxyurea plant"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <time className="text-xs font-black uppercase tracking-widest text-[#DC143C]">
                      JUNE 29, 2026
                    </time>
                    <h3 className="text-lg font-bold text-[#161A32] group-hover:text-[#DC143C] transition-colors mt-2 mb-3 leading-snug uppercase">
                      LAUNCH OF UGANDA&apos;S FIRST HYDROXYUREA MANUFACTURING PLANT.
                    </h3>
                    <p className="text-sm text-neutral-600 font-normal line-clamp-3 leading-relaxed">
                      Not every day does the SCD community witness a moment like this! Uganda officially commissioned the country&apos;s first Hydroxyurea…
                    </p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-neutral-100">
                    <Link
                      href="/latest-news"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#DC143C] hover:underline"
                    >
                      Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Story 3 */}
              <article className="group flex flex-col bg-[#FCFCFD] rounded-2xl overflow-hidden border border-neutral-200/80 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/figma/news-africa-cdc.png"
                    alt="Africa CDC Sickle Cell Disease strategy"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <time className="text-xs font-black uppercase tracking-widest text-[#DC143C]">
                      JUNE 29, 2026
                    </time>
                    <h3 className="text-lg font-bold text-[#161A32] group-hover:text-[#DC143C] transition-colors mt-2 mb-3 leading-snug uppercase">
                      WHY AFRICA&apos;S NEW SICKLE CELL DISEASE (SCD) STRATEGY IS A HISTORIC TURNING POINT.
                    </h3>
                    <p className="text-sm text-neutral-600 font-normal line-clamp-3 leading-relaxed">
                      The launch of the Africa CDC Continental Plan for Sickle Cell Disease (SCD) and other inherited blood disorders is a historic turning…
                    </p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-neutral-100">
                    <Link
                      href="/latest-news"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#DC143C] hover:underline"
                    >
                      Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= SICK CONVERSATIONS PODCAST SECTION ================= */}
        <section className="py-16 lg:py-24 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B0C0E] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-neutral-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Podcast Cover */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden bg-[#FCEEEA] p-6 flex items-center justify-center shadow-inner">
                    <Image
                      src="/images/figma/podcast-cover.png"
                      alt="Sick Conversations Podcast"
                      width={320}
                      height={320}
                      priority
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Waveform Graphic */}
                <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src="/images/figma/podcast-waveform.svg"
                      alt="Audio waveform"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Podcast Details */}
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight uppercase">
                    S<span className="text-[#DC143C]">I</span>CK CONVERSATIONS PODCAST: REAL STORIES. HONEST CONVERSATIONS. UNFILTERED EXPERIENCES.
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-normal uppercase leading-relaxed tracking-wider">
                    JOIN US AS WE EXPLORE THE JOURNEYS OF THOSE LIVING WITH RARE DISEASES, THE CHALLENGES THEY FACE, AND THE BREAKTHROUGHS THAT BRING HOPE. BECAUSE EVERY STORY MATTERS. 💙 #SICKCONVERSATIONS #RAREMARKFOUNDATION
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/podcast"
                      className="inline-block text-xs sm:text-sm font-black tracking-widest text-white uppercase underline underline-offset-8 hover:text-[#DC143C] transition-colors"
                    >
                      WATCH OUR LATEST EPISODE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
