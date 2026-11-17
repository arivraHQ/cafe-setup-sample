"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { SteamDoodle, LeafDoodle, StarSparkle } from "./Doodles";

export function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(siteConfig.whatsappDefaultMsg)}`;

  return (
    <footer className="relative bg-espresso text-paper pt-20 pb-12 overflow-hidden border-t-4 border-coffee">
      {/* Decorative background watermark */}
      <div className="absolute top-8 right-8 pointer-events-none opacity-10">
        <LeafDoodle className="w-40 h-40 text-paper" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Note with Hand Doodle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-12 border-b border-paper/15 gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl tracking-tight text-paper">
              Mitti Cafe
            </span>
            <span className="font-hand text-sm text-marigold">
              estd. 2021 • swaroop nagar
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-paper/70 font-hand">
            <SteamDoodle className="w-5 h-5 text-marigold" />
            <span>table reservations open via WhatsApp until 10:30 PM</span>
          </div>
        </div>

        {/* Oversized "See you soon." Heading */}
        <div className="py-12 sm:py-16 md:py-20 text-center">
          <p className="font-hand text-xl sm:text-2xl text-marigold mb-3">
            the door is always unlatched
          </p>
          <h2 className="font-serif text-[54px] sm:text-[96px] md:text-[140px] lg:text-[175px] leading-[0.9] text-paper tracking-tighter select-none">
            See you soon.
          </h2>
        </div>

        {/* Navigation & Social Links Strip */}
        <div className="pt-10 border-t border-paper/15 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Col 1-5: Cafe Essence */}
          <div className="md:col-span-5 space-y-3">
            <p className="font-serif text-lg text-paper/90 font-semibold">
              Mitti Cafe, Kanpur
            </p>
            <p className="text-sm text-paper/70 max-w-sm leading-relaxed">
              14/112, Mall Road, Near Swaroop Nagar Corner. Built out of baked terracotta, sunlit reading nooks, and fresh pour-overs.
            </p>
            <p className="font-hand text-base text-marigold">
              Call / WhatsApp: {siteConfig.whatsappDisplay}
            </p>
          </div>

          {/* Col 6-8: Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-hand text-sm text-marigold uppercase tracking-wider">
              Quick Navigation
            </p>
            <ul className="space-y-1.5 text-sm text-paper/80">
              <li>
                <Link href="#signatures" className="hover:text-marigold transition-colors">
                  House Signatures
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-marigold transition-colors">
                  Daily Cafe Menu
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-marigold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#ambience" className="hover:text-marigold transition-colors">
                  Ambience & Corners
                </Link>
              </li>
              <li>
                <Link href="#happenings" className="hover:text-marigold transition-colors">
                  Friday Open Mic & Events
                </Link>
              </li>
              <li>
                <Link href="#visit" className="hover:text-marigold transition-colors">
                  Hours & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Social & Reservations */}
          <div className="md:col-span-4 space-y-4">
            <p className="font-hand text-sm text-marigold uppercase tracking-wider">
              Connect & Reserve
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-paper/10 text-paper hover:bg-marigold hover:text-espresso transition-all text-xs font-semibold border border-paper/20"
              >
                WhatsApp Reserve
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-paper/10 text-paper hover:bg-marigold hover:text-espresso transition-all text-xs font-semibold border border-paper/20"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-paper/10 text-paper hover:bg-marigold hover:text-espresso transition-all text-xs font-semibold border border-paper/20"
              >
                Zomato
              </a>
              <a
                href={siteConfig.socials.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-paper/10 text-paper hover:bg-marigold hover:text-espresso transition-all text-xs font-semibold border border-paper/20"
              >
                Swiggy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between text-xs text-paper/50 gap-4">
          <p>© 2026 Mitti Cafe, Kanpur. Hand-crafted with honest butter & slow fire.</p>
          <p className="font-hand text-sm text-paper/70">
            Agency portfolio piece • Designed & engineered by Senior Product Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
