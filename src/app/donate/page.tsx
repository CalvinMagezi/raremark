import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Us | Raremark Foundation",
  description: "Donate to provide life-saving hip replacement surgeries, genotype screening, and critical medical care for Sickle Cell Warriors.",
};

export default function DonatePage() {
  const tiers = [
    {
      amount: "$25",
      title: "Genotype Screening",
      desc: "Funds genetic screening and pre-marital counseling for 5 families to identify carrier status.",
    },
    {
      amount: "$100",
      title: "Medical Crisis Kit",
      desc: "Provides emergency pain management medications, hydroxyurea, and pediatric clinic supplies.",
      popular: true,
    },
    {
      amount: "$500",
      title: "Warrior Mobility Care",
      desc: "Contributes directly to total hip replacement surgery for Warriors suffering from avascular necrosis.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-[#DC143C]">
              Every Contribution Counts
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#161A32] tracking-tight">
              Support Our Warriors Today
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              100% of public donations directly fund medical aid, clinic supplies, screening programs, and life-changing hip surgeries across Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tiers.map((t) => (
              <div
                key={t.amount}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between shadow-sm relative ${
                  t.popular
                    ? "border-[#DC143C] ring-2 ring-[#DC143C]/20 shadow-xl"
                    : "border-neutral-200"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DC143C] text-white text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Impactful
                  </span>
                )}
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#161A32] block mb-2">
                    {t.amount}
                  </span>
                  <h3 className="text-lg font-bold text-[#161A32] mb-3">
                    {t.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-8">
                  <button
                    className={`w-full py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                      t.popular
                        ? "bg-[#DC143C] hover:bg-[#B1002C] text-white shadow-md"
                        : "bg-neutral-100 hover:bg-neutral-200 text-[#161A32]"
                    }`}
                  >
                    Donate {t.amount}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-[#DC143C] shrink-0" />
              <div>
                <h4 className="text-base font-bold text-[#161A32]">
                  Direct Bank & Mobile Money Transfers
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal">
                  Contact our finance desk at donations@raremarkfoundation.org for official bank details or corporate partnerships.
                </p>
              </div>
            </div>
            <a
              href="mailto:donations@raremarkfoundation.org"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-[#161A32] hover:bg-[#07263A] text-white px-6 py-3 rounded-full shrink-0 transition"
            >
              Contact Desk <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
