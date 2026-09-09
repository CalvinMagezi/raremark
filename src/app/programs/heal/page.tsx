import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEAL Program | Raremark Foundation",
  description: "Health Education and Aid for Life: How HEAL transforms sickle cell care across healthcare facilities and communities.",
};

export default function HealProgramPage() {
  const partners = [
    { name: "Digimark", src: "/images/figma/partner-digimark.png", width: 140, height: 50 },
    { name: "Global Partner", src: "/images/figma/partner-img23.png", width: 160, height: 50 },
    { name: "TSCA", src: "/images/figma/partner-tsca.png", width: 80, height: 80 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-block text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#BA1A1A]">
                PROGRAM INITIATIVE
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1C1C] tracking-tight leading-tight">
                How HEAL Transforms Care
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto font-normal leading-relaxed">
                Addressing critical delays in treatment, limited health worker knowledge on acute pain crises, and severe lack of essential medical supplies in under-resourced regions.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-12 max-w-5xl mx-auto relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-100">
              <Image
                src="/images/figma/heal-hero.png"
                alt="HEAL Program in action"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ================= VERTICAL TIMELINE SECTION ================= */}
        <section className="py-20 lg:py-28 bg-[#FCFCFD]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative border-l-2 border-red-200 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-24">
              {/* STEP 01 */}
              <div className="relative group">
                <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-[#BA1A1A] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-black" />
                
                <span className="text-xs font-black uppercase tracking-widest text-[#BA1A1A] block mb-2">
                  01 / Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1C1C] mb-4">
                  Better Patient Outcomes
                </h2>
                <div className="inline-block bg-red-50 text-[#BA1A1A] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Bridging the Gap
                </div>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-6">
                  Every minute counts during a vasoocclusive crisis. HEAL streamlines emergency intake protocols to ensure rapid intervention.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm mb-6">
                  <h4 className="text-sm font-bold text-[#1A1C1C] mb-1">
                    Clinical Excellence
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Interactive workshops and mentorship modules designed by leading hematologists to elevate local standard of care.
                  </p>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100">
                  <Image
                    src="/images/figma/heal-challenge.png"
                    alt="Better Patient Outcomes through HEAL"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* STEP 02 */}
              <div className="relative group">
                <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-[#BA1A1A] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-black" />

                <span className="text-xs font-black uppercase tracking-widest text-[#BA1A1A] block mb-2">
                  02 / Education
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1C1C] mb-4">
                  Training Health Workers
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-6">
                  Equipping nurses, doctors, and community health workers with practical, advanced knowledge on sickle cell management, pain assessment, and emergency pediatric care.
                </p>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100">
                  <Image
                    src="/images/figma/heal-education.png"
                    alt="Health worker training workshops"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* STEP 03 */}
              <div className="relative group">
                <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-[#BA1A1A] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-black" />

                <span className="text-xs font-black uppercase tracking-widest text-[#BA1A1A] block mb-2">
                  03 / Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1C1C] mb-4">
                  Supporting Health Facilities
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-6">
                  Equipping rural and urban clinics with necessary diagnostic tools, essential medicines, pain management supplies, and reliable oxygen access.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm mb-6">
                  <h4 className="text-sm font-bold text-[#1A1C1C] mb-1">
                    Resource Provision
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Direct supply chain interventions guaranteeing uninterrupted availability of hydroxyurea and pain relievers.
                  </p>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100">
                  <Image
                    src="/images/figma/heal-infrastructure.png"
                    alt="Supporting clinics with medical equipment"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* STEP 04 */}
              <div className="relative group">
                <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-[#BA1A1A] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-black" />

                <span className="text-xs font-black uppercase tracking-widest text-[#BA1A1A] block mb-2">
                  04 / Collaboration
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1C1C] mb-4">
                  Strengthening Partnerships
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-6">
                  Working hand-in-hand with regional hospitals, local ministries of health, and community advocacy groups to build sustainable, long-term healthcare frameworks.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm mb-6">
                  <h4 className="text-sm font-bold text-[#1A1C1C] mb-1">
                    Unified Action
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Creating policy dialogues and stakeholder networks that prioritize sickle cell disease in national health budgets.
                  </p>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100">
                  <Image
                    src="/images/figma/heal-collaboration.png"
                    alt="Partner collaboration"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* STEP 05 */}
              <div className="relative group">
                <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-[#BA1A1A] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-black" />

                <span className="text-xs font-black uppercase tracking-widest text-[#BA1A1A] block mb-2">
                  05 / Ecosystem
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1C1C] mb-4">
                  Our Program Partners
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-6">
                  Proudly collaborating with global health organizations, research institutions, and corporate allies dedicated to eradicating care disparities.
                </p>

                {/* Partner Badges Row */}
                <div className="flex flex-wrap items-center gap-8 p-6 bg-white rounded-2xl border border-neutral-200 shadow-sm mb-6">
                  {partners.map((p) => (
                    <div key={p.name} className="h-12 flex items-center justify-center">
                      <Image
                        src={p.src}
                        alt={p.name}
                        width={p.width}
                        height={p.height}
                        priority
                        className="max-h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100">
                  <Image
                    src="/images/figma/heal-ecosystem.png"
                    alt="Ecosystem network"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* STEP 06 */}
              <div className="relative group">
                <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-[#BA1A1A] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-black" />

                <span className="text-xs font-black uppercase tracking-widest text-[#BA1A1A] block mb-2">
                  06 / Action
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1C] mb-6">
                  Join the Movement
                </h2>

                <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 sm:p-10 border border-red-100 shadow-sm space-y-6">
                  <p className="text-lg font-bold text-neutral-900 leading-relaxed">
                    By equipping health workers and building strong partnerships, HEAL ensures that no Warrior walks alone—wherever they seek care.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#BA1A1A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-900">[Become a Partner]</strong> – Expand our network of clinics and services
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#BA1A1A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-900">[Sponsor Training]</strong> – Fund workshops that save lives
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#BA1A1A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-900">[Spread the Word]</strong> – Share #HEALforWarriors to raise awareness
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 italic pt-2">
                    Every trained clinician, every equipped clinic, and every partnership brings us one step closer to a healthier future for Uganda’s sickle cell community. Join HEAL today.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href="/donate"
                      className="inline-flex items-center gap-2 bg-[#DC143C] hover:bg-[#B1002C] text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-md transition-all active:scale-95"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      Support HEAL
                    </Link>
                    <Link
                      href="/connect"
                      className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-md transition-all"
                    >
                      Partner With Us <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
        <section className="bg-black py-20 lg:py-24 text-center text-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-xs font-black tracking-[0.25em] text-neutral-400 uppercase">
              RAREMARK FOUNDATION
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-[40px] font-bold text-white leading-tight max-w-3xl mx-auto">
              “A non-profit organization dedicated to improving the lives of people living with or affected by Sickle Cell Disease.”
            </h2>
            <div className="w-16 h-0.5 bg-[#DC143C] mx-auto" />
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
              Your contribution directly supports medical supplies, health worker training modules, and emergency care response systems where they are needed most.
            </p>
            <div className="pt-2">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center bg-[#DC143C] hover:bg-[#B1002C] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-lg shadow-md transition-all active:scale-95"
              >
                Support Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
