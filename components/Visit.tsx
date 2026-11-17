import React from "react";
import { siteConfig } from "@/content/site";
import { LeafDoodle, HandArrowDoodle } from "./Doodles";

export function Visit() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}?text=${encodeURIComponent("Namaste Mitti Cafe! I'd like to reserve a table for this evening.")}`;
  const gmapsUrl = "https://maps.google.com/?q=Swaroop+Nagar+Kanpur+Mitti+Cafe";

  return (
    <section id="visit" className="py-20 md:py-32 relative bg-surface/30 overflow-hidden">
      {/* Decorative dividers */}
      <div className="absolute top-0 inset-x-0 divider-dashed" />
      <div className="absolute bottom-0 inset-x-0 divider-dotted" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <LeafDoodle className="w-5 h-5 text-sage" />
            <span className="font-hand text-xl text-coffee">
              drop in anytime, we keep the kettle on
            </span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-tight text-espresso">
            Come Sit With Us
          </h2>
          <p className="mt-3 text-espresso/75 text-base sm:text-[17px]">
            Located on Mall Road at the edge of Swaroop Nagar, under the canopy of two century-old neem trees.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Hours Table + Address + CTAs (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF8] p-6 sm:p-10 rounded-cafe border-2 border-espresso/15 shadow-sm space-y-8">
            {/* Hours Table */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-espresso/15 mb-4">
                <h3 className="font-serif text-2xl text-espresso">
                  Operating Hours
                </h3>
                <span className="font-hand text-xs sm:text-sm text-sage font-bold bg-sage/10 px-2.5 py-0.5 rounded-full border border-sage/20">
                  Open 365 Days
                </span>
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-center justify-between py-1.5 border-b border-dashed border-espresso/10">
                  <span className="font-semibold text-espresso">Monday – Thursday</span>
                  <span className="font-mono text-espresso/80">8:00 AM – 11:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-dashed border-espresso/10">
                  <span className="font-semibold text-espresso">Friday (Open Mic Night)</span>
                  <span className="font-mono text-espresso/80">8:00 AM – 11:30 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-dashed border-espresso/10">
                  <span className="font-semibold text-espresso">Saturday & Sunday (Brunch)</span>
                  <span className="font-mono text-espresso/80">8:00 AM – 11:30 PM</span>
                </div>
              </div>
              <p className="font-hand text-xs sm:text-sm text-coffee/80 mt-2">
                *Kitchen takes last orders 45 minutes prior to close
              </p>
            </div>

            {/* Address & Landmark */}
            <div className="pt-2">
              <h3 className="font-serif text-2xl text-espresso mb-3">
                Address & Directions
              </h3>
              <address className="not-italic text-sm sm:text-base text-espresso/80 space-y-1 leading-relaxed">
                <p className="font-medium text-espresso">{siteConfig.address.line1}</p>
                <p>{siteConfig.address.line2}</p>
                <p>{siteConfig.address.city}</p>
                <p className="font-hand text-sm text-coffee mt-2 font-bold">
                  Landmark: {siteConfig.address.landmark}
                </p>
              </address>
              <p className="font-hand text-xs sm:text-sm text-sage/90 mt-2">
                Bicycle racks & car parking space available along the postal lane
              </p>
            </div>

            {/* Action Buttons: WhatsApp Reservation + Food Ordering */}
            <div className="pt-4 border-t border-espresso/15 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Main WhatsApp Reservation Pill */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-coffee text-paper font-semibold text-sm sm:text-base hover:bg-espresso active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  <span>Reserve on WhatsApp</span>
                  <span className="ml-2 font-hand text-xs text-paper/80 font-normal">
                    (+91 90000 00000)
                  </span>
                </a>

                {/* Google Maps Directions */}
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-surface text-espresso font-medium text-sm hover:bg-paper active:scale-95 transition-all border border-espresso/20 cursor-pointer"
                >
                  <span>Get Directions</span>
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Delivery Ordering Options (Zomato / Swiggy) */}
              <div className="flex items-center gap-3 pt-2">
                <span className="font-hand text-sm text-espresso/70">Or order online:</span>
                <a
                  href={siteConfig.socials.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-surface border border-espresso/15 text-xs font-semibold text-espresso hover:bg-paper transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-red-700 mr-2" />
                  Zomato
                </a>
                <a
                  href={siteConfig.socials.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-surface border border-espresso/15 text-xs font-semibold text-espresso hover:bg-paper transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-600 mr-2" />
                  Swiggy
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Earthen Map Placeholder (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div
              style={{
                transform: "rotate(1.2deg)",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="bg-[#FFFDF8] p-5 sm:p-6 pb-8 rounded-cafe border-2 border-espresso/20 polaroid-shadow transition-transform duration-500 ease-spring-soft hover:!rotate-0 group"
            >
              {/* Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-marigold/30 border border-marigold/40 rounded-sm transform -rotate-1" />

              {/* Top stamp */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-sm font-bold text-espresso">
                  Neighbourhood Map
                </span>
                <span className="font-hand text-xs text-coffee/80 border border-espresso/20 px-2 py-0.5 rounded">
                  KANPUR • SWAROOP NAGAR
                </span>
              </div>

              {/* Stylized Illustrated Map Graphic */}
              <div className="relative w-full h-[320px] sm:h-[380px] bg-[#EFE3CA] rounded-[10px] border border-espresso/15 overflow-hidden p-6 flex flex-col justify-between">
                {/* River Ganga bend indication */}
                <div className="absolute -top-8 -right-8 w-44 h-44 rounded-full border-4 border-dashed border-sage/40 pointer-events-none" />
                <span className="absolute top-4 right-4 font-hand text-xs text-sage font-bold tracking-wider">
                  ~ Towards Ganga Ghats
                </span>

                {/* Major cross roads illustrated cleanly */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 bg-paper/60 border-y border-dashed border-espresso/20 flex items-center justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-espresso/40">
                    Mall Road (Main Artery)
                  </span>
                </div>
                <div className="absolute inset-y-0 left-1/3 w-10 bg-paper/60 border-x border-dashed border-espresso/20 flex items-center justify-center">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-espresso/40 -rotate-90">
                    Phool Bagh Lane
                  </span>
                </div>

                {/* Mitti Cafe Marker Pin */}
                <div className="relative z-10 self-center my-auto flex flex-col items-center">
                  <div className="relative">
                    <span className="w-10 h-10 rounded-full bg-coffee text-paper flex items-center justify-center shadow-lg border-2 border-paper">
                      <span className="w-3 h-3 rounded-full bg-marigold animate-ping absolute" />
                      <span className="w-3 h-3 rounded-full bg-marigold" />
                    </span>
                  </div>
                  <div className="mt-2 bg-paper/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-espresso/20 shadow-md text-center">
                    <span className="font-serif text-xs font-bold text-espresso block">
                      Mitti Cafe
                    </span>
                    <span className="font-hand text-[11px] text-coffee block">
                      Beside Old Red Postal Gate
                    </span>
                  </div>
                </div>

                {/* Bottom Map Note */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-espresso/70 pt-2 border-t border-espresso/10">
                  <span>8 min walk from Swaroop Nagar Circle</span>
                  <a
                    href={gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif font-bold text-coffee hover:underline"
                  >
                    Open Live Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Handwritten annotation under map */}
              <div className="mt-4 px-1 flex items-center justify-between">
                <span className="font-hand text-xs text-coffee">
                  look for the terracotta sign & black iron lamps
                </span>
                <span className="font-hand text-xs text-marigold font-bold">
                  208001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
