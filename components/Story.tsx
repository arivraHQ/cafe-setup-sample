import React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { LeafDoodle, StarSparkle } from "./Doodles";

export function Story() {
  const { story } = siteConfig;

  return (
    <section id="story" className="py-20 md:py-32 relative bg-[#F7EFE1] overflow-hidden">
      {/* Top and bottom craft dividers */}
      <div className="absolute top-0 inset-x-0 divider-dashed" />
      <div className="absolute bottom-0 inset-x-0 divider-dotted" />

      {/* Decorative leaf doodle watermark */}
      <div className="hidden lg:block absolute bottom-12 right-12 pointer-events-none opacity-20">
        <LeafDoodle className="w-24 h-24 text-sage" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <div className="flex items-center gap-2 mb-4">
          <StarSparkle className="w-4 h-4 text-marigold" />
          <span className="font-hand text-lg text-coffee tracking-wider">
            how a small idea found its ground in Kanpur
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Pull Quote + Founder Portrait (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Pull Quote Box */}
            <div className="relative bg-paper p-6 sm:p-8 rounded-cafe border border-espresso/15 shadow-sm">
              {/* Decorative quotation mark */}
              <span className="font-serif text-6xl text-coffee/20 absolute -top-4 left-4 select-none pointer-events-none">
                “
              </span>
              <blockquote className="relative z-10">
                <p className="font-serif text-2xl sm:text-3xl leading-snug text-espresso italic">
                  “{story.quote}”
                </p>
              </blockquote>
            </div>

            {/* Founder Portrait: Small Polaroid style */}
            {/* IMAGE BRIEF: Warm candid portrait of co-founder in linen apron holding an earthenware bowl, natural window light, rustic wooden kitchen background */}
            <div
              style={{
                transform: "rotate(-1.6deg)",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="w-full max-w-[280px] sm:max-w-[320px] bg-[#FFFDF8] p-3 sm:p-4 pb-6 rounded-cafe border border-espresso/15 polaroid-shadow transition-transform duration-500 ease-spring-soft hover:!rotate-0 self-center lg:self-start group"
            >
              {/* Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-marigold/30 border border-marigold/40 rounded-sm transform rotate-2" />
              
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden rounded-[10px] bg-surface">
                <Image
                  src={story.portraitUrl}
                  alt={story.founderName}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-3 px-1 flex items-baseline justify-between">
                <div>
                  <h4 className="font-serif text-base text-espresso font-bold">
                    {story.founderName}
                  </h4>
                  <p className="font-hand text-xs text-coffee/80">
                    {story.founderRole}
                  </p>
                </div>
                <span className="font-hand text-xs text-sage font-bold border border-sage/30 px-2 py-0.5 rounded-full bg-sage/10">
                  ESTD. 2021
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Prose (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-2">
            <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.1] text-espresso">
              The Living Room of Swaroop Nagar
            </h2>

            <p className="text-[17px] sm:text-[19px] leading-relaxed text-espresso/85 first-letter:font-serif first-letter:text-5xl first-letter:text-coffee first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              {story.leadParagraph}
            </p>

            <p className="text-[16px] sm:text-[18px] leading-relaxed text-espresso/80">
              {story.secondaryParagraph}
            </p>

            {/* Core Values Stamp List */}
            <div className="pt-6 border-t border-espresso/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-espresso">
              <div className="p-3 bg-paper/70 rounded-lg border border-espresso/10">
                <span className="font-serif text-sm font-bold block text-coffee">
                  01. Desi Roots
                </span>
                <span className="font-hand text-xs text-espresso/75 block mt-0.5">
                  Clay from Bithoor ghats
                </span>
              </div>
              <div className="p-3 bg-paper/70 rounded-lg border border-espresso/10">
                <span className="font-serif text-sm font-bold block text-coffee">
                  02. Zero Rush
                </span>
                <span className="font-hand text-xs text-espresso/75 block mt-0.5">
                  Sit for hours, read books
                </span>
              </div>
              <div className="p-3 bg-paper/70 rounded-lg border border-espresso/10">
                <span className="font-serif text-sm font-bold block text-coffee">
                  03. Hand Crafted
                </span>
                <span className="font-hand text-xs text-espresso/75 block mt-0.5">
                  Every bread from raw dough
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
