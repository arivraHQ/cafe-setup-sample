import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { SteamDoodle, HandArrowDoodle, StarSparkle } from "./Doodles";

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(siteConfig.whatsappDefaultMsg)}`;

  return (
    <section className="relative overflow-hidden pt-4 pb-12 md:pt-12 md:pb-24">
      {/* Decorative craft background watermarks */}
      <div className="hidden sm:block absolute top-4 left-10 md:left-16 pointer-events-none opacity-20">
        <SteamDoodle className="w-12 h-12 text-coffee" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-espresso/15 mb-4 shadow-sm">
              <StarSparkle className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-coffee uppercase">
                ESTD. 2021 • SWAROOP NAGAR, KANPUR
              </span>
            </div>

            {/* Big Serif Headline: 88px desktop / 48px mobile */}
            <h1 className="font-serif text-[42px] sm:text-[64px] lg:text-[84px] leading-[1.03] text-espresso tracking-tight">
              Slow mornings. <br />
              <span className="text-coffee inline-flex items-center gap-2 sm:gap-3 flex-wrap">
                Strong coffee.
                <SteamDoodle className="w-7 h-7 sm:w-11 sm:h-11 text-marigold inline-block animate-pulse" />
              </span>
            </h1>

            {/* Short Line: Warm, real, earthy */}
            <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-espresso/85 max-w-xl">
              {siteConfig.subheadline}
            </p>

            {/* CTAs and Handwritten Note */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto relative">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-coffee text-paper font-medium text-base hover:bg-espresso active:scale-95 transition-all duration-200 shadow-md border border-coffee/30 cursor-pointer"
              >
                <span>Reserve on WhatsApp</span>
                <svg
                  className="w-4 h-4 ml-2 text-paper/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <Link
                href="#menu"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-surface text-espresso font-medium text-base hover:bg-paper active:scale-95 transition-all duration-200 border-2 border-dashed border-espresso/30 cursor-pointer"
              >
                See Full Menu
              </Link>

              {/* Handwritten micro annotation with arrow (desktop) */}
              <div className="hidden sm:flex absolute -bottom-10 left-52 items-center gap-2 pointer-events-none">
                <HandArrowDoodle className="w-8 h-5 text-marigold transform -rotate-12" />
                <span className="font-hand text-base text-coffee transform rotate-2">
                  fresh sourdough at 7:30 AM!
                </span>
              </div>
            </div>

            {/* Quick trust metrics: hours & location */}
            <div className="mt-8 sm:mt-12 pt-4 border-t border-espresso/15 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-espresso/75">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage" />
                <span>Open all 7 days: 8:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-marigold" />
                <span>Mall Road, Opp. Phool Bagh lane</span>
              </div>
            </div>
          </div>

          {/* Right Column: Collage of 3 Overlapping Tilted Polaroids (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] h-[390px] sm:h-[490px] mx-auto">
              {/* Polaroid 1 (Top Left: Sourdough & Pour-over) */}
              {/* IMAGE BRIEF: Morning pour-over dripping into handmade ceramic cup on aged teak table, steam rising gently, window light filtering through linen curtains */}
              <div
                style={{
                  transform: "rotate(-2.4deg)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="absolute top-0 left-0 w-[170px] sm:w-[235px] p-2 sm:p-2.5 pb-4 sm:pb-6 bg-surface rounded-cafe border border-espresso/15 polaroid-shadow transition-transform duration-500 ease-spring-soft hover:!rotate-0 hover:z-30 cursor-pointer group"
              >
                {/* Washi tape graphic */}
                <div className="absolute -top-2.5 left-6 w-11 sm:w-14 h-3.5 sm:h-4 bg-marigold/30 border border-marigold/40 rounded-sm transform -rotate-3" />
                <div className="relative w-full h-[125px] sm:h-[180px] overflow-hidden rounded-[10px] bg-paper">
                  <Image
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                    alt={siteConfig.heroCollage[0].title}
                    fill
                    sizes="(max-width: 640px) 170px, 235px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="mt-2 px-1 flex items-center justify-between">
                  <span className="font-serif text-[10px] sm:text-xs text-espresso font-semibold">
                    Slow Pour-over
                  </span>
                  <span className="font-hand text-[11px] sm:text-xs text-coffee">08:15 AM</span>
                </div>
              </div>

              {/* Polaroid 2 (Top Right: Terracotta sunlit corner) */}
              {/* IMAGE BRIEF: Sunlit cosy cafe nook with terracotta planter, open paperback book, half-eaten walnut cake on speckled ceramic plate */}
              <div
                style={{
                  transform: "rotate(2.2deg)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="absolute top-0 right-0 w-[175px] sm:w-[240px] p-2 sm:p-2.5 pb-4 sm:pb-6 bg-surface rounded-cafe border border-espresso/15 polaroid-shadow transition-transform duration-500 ease-spring-soft hover:!rotate-0 hover:z-30 cursor-pointer group z-10"
              >
                {/* Top caption for unobstructed readability */}
                <div className="mb-1.5 px-1 flex items-center justify-between">
                  <span className="font-serif text-[10px] sm:text-xs text-espresso font-semibold">
                    Sunlit Nook
                  </span>
                  <span className="font-hand text-[11px] sm:text-xs text-sage font-bold">
                    Terracotta
                  </span>
                </div>
                {/* Washi tape graphic */}
                <div className="absolute -top-2.5 right-6 w-11 sm:w-14 h-3.5 sm:h-4 bg-sage/30 border border-sage/40 rounded-sm transform rotate-4" />
                <div className="relative w-full h-[125px] sm:h-[180px] overflow-hidden rounded-[10px] bg-paper">
                  <Image
                    src={siteConfig.heroCollage[1].imageUrl}
                    alt={siteConfig.heroCollage[1].title}
                    fill
                    sizes="(max-width: 640px) 175px, 240px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Polaroid 3 (Foreground Center-Bottom: Clay Kulhad Chai) */}
              {/* IMAGE BRIEF: Clay earthen kulhad filled with steaming masala chai, scattered crushed green cardamom and cinnamon bark on raw wooden counter */}
              <div
                style={{
                  transform: "rotate(-0.8deg)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[195px] sm:w-[260px] p-2 sm:p-3 pb-4 sm:pb-8 bg-[#FFFBF3] rounded-cafe border border-espresso/20 polaroid-shadow transition-transform duration-500 ease-spring-soft hover:!rotate-0 hover:z-30 cursor-pointer group z-20"
              >
                {/* Washi tape graphic */}
                <div className="absolute -top-2.5 left-8 w-12 sm:w-16 h-3.5 sm:h-4 bg-coffee/20 border border-coffee/30 rounded-sm transform -rotate-1" />
                <div className="relative w-full h-[145px] sm:h-[200px] overflow-hidden rounded-[10px] bg-paper">
                  <Image
                    src={siteConfig.heroCollage[2].imageUrl}
                    alt={siteConfig.heroCollage[2].title}
                    fill
                    sizes="(max-width: 640px) 195px, 260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="mt-2 px-1 flex items-center justify-between">
                  <div>
                    <span className="font-serif text-[11px] sm:text-sm text-espresso font-bold block">
                      Mitti Kulhad Chai
                    </span>
                    <span className="font-hand text-[10px] sm:text-xs text-coffee/75 block">
                      Slow simmered in clay
                    </span>
                  </div>
                  <span className="font-hand text-xs sm:text-sm text-marigold font-bold bg-marigold/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-marigold/20">
                    ₹120
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
