"use client";

import React from "react";
import { siteConfig, CustomerReview } from "@/content/site";
import { HandArrowDoodle } from "./Doodles";

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 relative bg-[#EFE3CA] overflow-hidden">
      {/* Decorative dividers */}
      <div className="absolute top-0 inset-x-0 divider-dotted" />
      <div className="absolute bottom-0 inset-x-0 divider-dashed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-hand text-xl text-coffee">
              pinned notes from our community board
            </span>
            <HandArrowDoodle className="w-8 h-4 text-marigold transform rotate-6" />
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-tight text-espresso">
            What Kanpur Says
          </h2>
          <p className="mt-3 text-espresso/75 text-base sm:text-[17px]">
            Unfiltered notes pulled straight off our wooden bulletin board by the entrance.
          </p>
        </div>

        {/* Corkboard / Wall Grid with Pinned Paper Slips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-4">
          {siteConfig.reviews.map((rev: CustomerReview, idx: number) => {
            // Apply varied offsets for organic corkboard feel
            const colSpan = idx === 3 ? "lg:col-span-1 lg:ml-8" : idx === 4 ? "lg:col-span-1 lg:-ml-8" : "";

            return (
              <div
                key={rev.id}
                style={{
                  transform: `rotate(${rev.rotation}deg)`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className={`relative ${rev.paperTone} p-6 sm:p-7 pb-8 rounded-cafe border border-espresso/20 shadow-md transition-transform duration-500 ease-spring-soft hover:!rotate-0 hover:z-20 hover:shadow-lg ${colSpan} group`}
              >
                {/* Brass / Wood Pushpin Graphic */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-coffee to-espresso border-2 border-paper shadow-sm" />
                  <span className="w-0.5 h-1.5 bg-espresso/50 -mt-0.5" />
                </div>

                {/* Review Quote */}
                <p className="text-espresso/90 text-base sm:text-[17px] leading-relaxed italic">
                  “{rev.quote}”
                </p>

                {/* Author & Kanpur Context */}
                <div className="mt-6 pt-4 border-t border-espresso/15 flex flex-col">
                  <span className="font-serif text-base text-espresso font-bold">
                    {rev.author}
                  </span>
                  <span className="font-hand text-xs sm:text-sm text-coffee/80 mt-0.5">
                    {rev.context}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom invitation */}
        <div className="mt-14 text-center">
          <p className="font-hand text-base sm:text-lg text-coffee/80">
            Write your own note when you visit—pens and paper cards are on table no. 3!
          </p>
        </div>
      </div>
    </section>
  );
}
