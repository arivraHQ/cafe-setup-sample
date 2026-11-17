"use client";

import React from "react";
import { siteConfig, Happening } from "@/content/site";
import { StarSparkle, HandArrowDoodle } from "./Doodles";

export function Happenings() {
  const getWhatsAppRsvp = (title: string) => {
    return `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(`Namaste! I'd like to reserve a spot for "${title}".`)}`;
  };

  return (
    <section id="happenings" className="py-20 md:py-32 relative bg-paper overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <StarSparkle className="w-4 h-4 text-marigold" />
            <span className="font-hand text-xl text-coffee">
              community & quiet culture
            </span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-tight text-espresso">
            Weekly Happenings
          </h2>
          <p className="mt-3 text-espresso/75 text-base sm:text-[17px]">
            No loud music, no cover charges, no formal dress codes. Just acoustic sets, board games, and shared pots of chai.
          </p>
        </div>

        {/* Ticket-Stub Style List */}
        <div className="space-y-8">
          {siteConfig.happenings.map((event: Happening) => {
            const rsvpUrl = getWhatsAppRsvp(event.title);

            return (
              <div
                key={event.id}
                className="relative bg-[#FFFDF7] rounded-cafe border-2 border-espresso/20 shadow-sm overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-md hover:border-coffee/40"
              >
                {/* Left Section: Ticket Body (Day, Time, Title, Description) */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col sm:flex-row sm:items-start gap-6 relative">
                  {/* Left Date Badge */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center w-28 py-3 px-2 bg-surface/80 rounded-xl border border-espresso/15 text-center">
                    <span className="font-hand text-xs font-bold text-coffee uppercase tracking-wider">
                      {event.day}
                    </span>
                    <span className="font-serif text-xs font-semibold text-espresso/80 mt-1">
                      {event.time}
                    </span>
                  </div>

                  {/* Main Event Details */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-serif text-xl sm:text-2xl text-espresso font-bold">
                        {event.title}
                      </h3>
                      <span className="font-hand text-xs text-marigold font-bold bg-marigold/10 border border-marigold/30 px-2.5 py-0.5 rounded-full">
                        {event.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm sm:text-base text-espresso/75 leading-relaxed">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                {/* Perforated Divider with Circular Notches (Desktop: Vertical; Mobile: Horizontal) */}
                <div className="relative flex md:flex-col items-center justify-center">
                  {/* Perforation Line */}
                  <div className="w-full md:w-0 md:h-full border-b-2 md:border-b-0 md:border-r-2 border-dashed border-espresso/25" />

                  {/* Top Notch (Desktop) / Left Notch (Mobile) */}
                  <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-paper border border-espresso/20" />
                  {/* Bottom Notch (Desktop) / Right Notch (Mobile) */}
                  <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-paper border border-espresso/20" />

                  {/* Mobile Notches */}
                  <div className="md:hidden absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-paper border border-espresso/20" />
                  <div className="md:hidden absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-paper border border-espresso/20" />
                </div>

                {/* Right Section: Tear-off Stub (Ticket No & RSVP) */}
                <div className="p-6 sm:p-8 md:w-56 flex-shrink-0 bg-surface/40 flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-xs tracking-widest text-espresso/60 uppercase">
                    ADMIT ONE
                  </span>
                  <span className="font-serif text-sm font-bold text-coffee mt-1 tracking-wider">
                    {event.ticketNo}
                  </span>

                  <a
                    href={rsvpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-coffee text-paper text-xs sm:text-sm font-semibold hover:bg-espresso active:scale-95 transition-all shadow-sm cursor-pointer"
                  >
                    Reserve Spot &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Open Mic Performance Sign-up Callout */}
        <div className="mt-12 text-center p-6 bg-surface/50 rounded-cafe border border-espresso/15 max-w-xl mx-auto">
          <p className="font-hand text-lg text-espresso mb-1">
            Want to perform at our Friday Open Mic?
          </p>
          <p className="text-xs sm:text-sm text-espresso/70">
            We hold 4 slots every Friday for poets, singers, and storytellers. WhatsApp us your 1-min audio note by Thursday evening.
          </p>
        </div>
      </div>
    </section>
  );
}
