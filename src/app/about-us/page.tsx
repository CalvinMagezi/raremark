import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Raremark Foundation",
  description: "Learn about the origins, mission, leadership, and board of directors driving the Raremark Foundation.",
};

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Steven Byamugisha",
      role: "COFOUNDER / GENERAL MANAGER",
      bio: "Leading the strategic vision and operational excellence of the foundation.",
      image: "/images/figma/team-steven.png",
    },
    {
      name: "Don Magezi",
      role: "COFOUNDER / TEAM LEAD",
      bio: "Spearheading community outreach and building resilient networks of support.",
      image: "/images/figma/team-don.png",
    },
    {
      name: "Benjamin Madewo",
      role: "BOARD MEMBER / RESEARCH",
      bio: "Guiding clinical partnerships and research initiatives for SCD.",
      image: "/images/figma/team-benjamin.png",
    },
  ];

  const boardMembers = [
    {
      initials: "GM",
      name: "Dr. Geoffrey Madewo",
      title: "— Surgeon / Consultant",
      role: "Chairman",
      highlighted: true,
    },
    {
      initials: "AM",
      name: "Ada Mugenyi",
      title: "— Business Owner",
      role: "Secretary",
      highlighted: false,
    },
    {
      initials: "DM",
      name: "Don Magezi",
      title: "— Co-founder",
      role: "Board Member",
      highlighted: false,
    },
    {
      initials: "BM",
      name: "Benjamin Madewo",
      title: "— Industrial Engineer / Technician",
      role: "Board Member",
      highlighted: false,
    },
    {
      initials: "SB",
      name: "Steven Byamugisha",
      title: "— CEO, Yamzit Ltd",
      role: "Board Member",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <Navbar />

      <main className="flex-1">
        {/* ================= INTRO HERO ================= */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-white border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-serif font-bold text-[#161A32] leading-tight mb-8">
              The Raremark Foundation
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal text-justify sm:text-center">
              A non-profit organization dedicated to improving the lives of people living with (Warriors) or affected by Sickle Cell Disease. Founded in 2020, it has always been guided by one core aim: creating a safe space where Warriors and their families can exchange information, support one another, and raise awareness about the condition. Today, through targeted programs and support from partners, Raremark Foundation has evolved into a structured organization driving awareness, care, and advocacy for individuals and families affected by SCD. Our community is made up of Warriors, caregivers, healthcare professionals, and advocates, all united by a shared passion to create a better future and work toward a generation free from Sickle Cell Disease.
            </p>
          </div>
        </section>

        {/* ================= OUR ORIGINS ================= */}
        <section className="py-20 lg:py-28 bg-[#FCFCFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text Side */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#DC143C]">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#161A32]">
                  Our Origins
                </h2>
                <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    Founded in 2020 by the late <strong>Josephine Esisa Madewo</strong>, together with Steven Byamugisha and Don Magezi, Raremark Foundation was built by Sickle Cell Warriors, for Sickle Cell Warriors.
                  </p>
                  <p>
                    It began as <em>S for Sickle Cell</em>, a grassroots initiative focused on raising awareness and education around Sickle Cell Disease (SCD).
                  </p>
                  <p>
                    What started as a community effort has grown into a non-profit organization with a clear purpose: creating a safe space where Sickle Cell Warriors and their families can share information, support one another, and deepen understanding of the condition.
                  </p>
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-100">
                  <Image
                    src="/images/figma/about-origins.png"
                    alt="Raremark Foundation origins and community gathering"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= JOIN OUR MISSION CARD ================= */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#161A32] to-[#07263A] rounded-3xl p-8 sm:p-14 text-white shadow-xl text-center space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-red-400">
                Purpose & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Join Our Mission
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                We exist to improve the quality of life for Warriors by building an informed and supportive community. Through education, advocacy, and access to care, we empower Warriors and their families with the knowledge, resources, and support they need to take control of their health and live better lives, strengthening the fight against SCD together.
              </p>
              <div className="pt-2">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-[#DC143C] hover:bg-[#B1002C] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  SUPPORT US
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR TEAM ================= */}
        <section className="py-20 lg:py-28 bg-[#FCFCFD] border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#DC143C]">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#161A32] tracking-tight mt-2">
                Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full bg-neutral-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#B1002C] block mb-1">
                        {member.role}
                      </span>
                      <h3 className="text-xl font-bold text-[#161A32] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BOARD OF DIRECTORS ================= */}
        <section className="py-20 lg:py-28 bg-white border-t border-neutral-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#DC143C]">
                Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#161A32] tracking-tight mt-2">
                Board of Directors
              </h2>
            </div>

            {/* List Container */}
            <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              {boardMembers.map((bm) => (
                <div
                  key={bm.name}
                  className={`p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                    bm.highlighted ? "bg-red-50/40" : "hover:bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Monogram Badge */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${
                        bm.highlighted
                          ? "bg-[#B1002C] text-white"
                          : "bg-red-100/80 text-[#B1002C]"
                      }`}
                    >
                      {bm.initials}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-base sm:text-lg font-black text-[#161A32]">
                          {bm.name}
                        </span>
                        <span className="text-sm text-neutral-500 font-light">
                          {bm.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right pl-15 sm:pl-0">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        bm.highlighted
                          ? "bg-red-100 text-[#B1002C] font-black"
                          : "text-neutral-500 bg-neutral-100"
                      }`}
                    >
                      {bm.role}
                    </span>
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
