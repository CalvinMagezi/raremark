import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect | Raremark Foundation",
  description: "Get in touch with the Raremark Foundation team in Kampala, Uganda.",
};

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Col: Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-[#DC143C] mb-3">
                  Reach Out
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-[#161A32] tracking-tight mb-4">
                  Connect With Us
                </h1>
                <p className="text-base text-neutral-600 leading-relaxed font-normal">
                  Whether you are a Warrior in need of guidance, a healthcare worker seeking training, or an organization eager to partner, our doors are open.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#DC143C] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#161A32]">Headquarters</h4>
                    <p className="text-sm text-neutral-600">Kampala, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#DC143C] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#161A32]">Email Enquiries</h4>
                    <p className="text-sm text-neutral-600">info@raremarkfoundation.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#DC143C] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#161A32]">Community & Socials</h4>
                    <p className="text-sm text-neutral-600">#SickConversations #RaremarkFoundation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-md">
                <h3 className="text-xl font-bold text-[#161A32] mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Namubiru"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] transition bg-white">
                      <option>General Enquiry</option>
                      <option>Program Partnership (HEAL)</option>
                      <option>Warrior Support & Surgery Assistance</option>
                      <option>Sick Conversations Podcast Guest</option>
                      <option>Volunteering & Community</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="How can we help or collaborate together?"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] transition"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#DC143C] hover:bg-[#B1002C] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-md transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
