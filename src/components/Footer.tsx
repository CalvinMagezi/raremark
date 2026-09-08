import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto relative bg-[#07263A] text-white overflow-hidden">
      {/* Top CTA Banner Section with Figma Background */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/figma/footer-cta-bg.png"
            alt="Raremark Foundation Impact"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07263A] via-[#07263A]/90 to-[#07263A]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <p className="text-xs sm:text-sm font-black tracking-[0.2em] text-red-400 uppercase mb-4">
            RAREMARK FOUNDATION
          </p>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight sm:leading-tight max-w-4xl mx-auto">
            “A non-profit organization dedicated to improving the lives of people living with or affected by Sickle Cell Disease.”
          </blockquote>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-normal">
            Your contribution directly supports medical supplies, health worker training modules, and emergency care response systems where they are needed most.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-[#DC143C] hover:bg-[#B1002C] text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-red-900/50 hover:scale-105 active:scale-95"
            >
              <Heart className="w-4 h-4 fill-white" />
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="inline-block bg-white p-2.5 rounded-lg">
              <Image
                src="/logos/raremark-foundation-logo.png"
                alt="Raremark Foundation Logo"
                width={160}
                height={52}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Empowering Sickle Cell Warriors through grassroots education, medical access, and community advocacy across Uganda and Africa.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-black tracking-wider uppercase text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs/heal" className="hover:text-red-400 transition-colors">
                  Program: HEAL
                </Link>
              </li>
              <li>
                <Link href="/latest-news" className="hover:text-red-400 transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-red-400 transition-colors">
                  Podcast: Sick Conversations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Action */}
          <div>
            <h4 className="text-sm font-black tracking-wider uppercase text-white mb-4">
              Initiatives
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/programs/heal" className="hover:text-red-400 transition-colors">
                  HEAL (Health Education & Aid)
                </Link>
              </li>
              <li>
                <Link href="/#warriors-fund" className="hover:text-red-400 transition-colors">
                  Hope for Warriors Fund
                </Link>
              </li>
              <li>
                <Link href="/#know-your-type" className="hover:text-red-400 transition-colors">
                  Know Your Type Screening
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-red-400 transition-colors font-bold text-red-400 flex items-center gap-1">
                  Make a Donation <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-black tracking-wider uppercase text-white mb-4">
              Location & Connect
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Kampala, Uganda</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-neutral-300">
              <Mail className="w-4 h-4 text-red-400 shrink-0" />
              <span>info@raremarkfoundation.org</span>
            </div>
            <div className="pt-2">
              <p className="text-xs text-neutral-400">
                #SickConversations #RaremarkFoundation #HEALforWarriors
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} Raremark Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about-us" className="hover:text-white transition">Privacy & Transparency</Link>
            <Link href="/connect" className="hover:text-white transition">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
