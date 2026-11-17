"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { LeafDoodle, HandArrowDoodle } from "./Doodles";

export function Ambience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -450 : 450;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const galleryItems = [
    {
      title: "The Winter Reading Corner",
      caption: "Soft morning sunlight, deep teak armchairs, and stacks of second-hand paperbacks.",
      width: "w-[360px] sm:w-[480px]",
      height: "h-[260px] sm:h-[320px]",
      aspect: "aspect-[4/3]",
      url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
      brief: "Wide view of cosy sunlit cafe interior with brick walls, green potted ferns, wooden communal tables, and soft warm lighting",
      tag: "Corner No. 4",
      rotation: -1.2,
    },
    {
      title: "Fresh Out of The Deck Oven",
      caption: "Sourdough batards cooling on wire racks at 7:15 AM. Flaky, blistering crust.",
      width: "w-[280px] sm:w-[340px]",
      height: "h-[320px] sm:h-[400px]",
      aspect: "aspect-[3/4]",
      url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      brief: "Artisan sourdough loaves cooling on wire rack dusted with flour, deep crusty golden brown",
      tag: "Bakehouse",
      rotation: 1.5,
    },
    {
      title: "Filament Glow & Poetry",
      caption: "Low-lit Friday evenings when the espresso grinder stops and the acoustic sets begin.",
      width: "w-[300px] sm:w-[360px]",
      height: "h-[290px] sm:h-[360px]",
      aspect: "aspect-[4/5]",
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      brief: "Acoustic guitar leaning against a brick wall under a low hanging vintage warm bulb, intimate warm cafe ambiance",
      tag: "Friday Sessions",
      rotation: -0.9,
    },
    {
      title: "The Mezzanine Library",
      caption: "Leave a book you loved, take one you haven't read yet. Over 400 titles donated by regulars.",
      width: "w-[380px] sm:w-[520px]",
      height: "h-[260px] sm:h-[320px]",
      aspect: "aspect-[16/10]",
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80",
      brief: "Rustic wooden bookshelves overflowing with dog-eared novels, small terracotta succulent pots, warm reading lamp",
      tag: "Book Exchange",
      rotation: 1.1,
    },
  ];

  return (
    <section id="ambience" className="py-20 md:py-32 relative bg-surface/40 overflow-hidden">
      {/* Decorative dividers */}
      <div className="absolute top-0 inset-x-0 divider-dotted" />
      <div className="absolute bottom-0 inset-x-0 divider-dashed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-hand text-xl text-marigold">
                take a slow walk around
              </span>
              <HandArrowDoodle className="w-8 h-4 text-marigold transform -rotate-6" />
            </div>
            <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-tight text-espresso">
              Corners of Mitti
            </h2>
            <p className="mt-2 text-espresso/75 text-base sm:text-[17px] max-w-xl">
              Baked brick, lime wash, reclaimed sal wood, and the aroma of roasted beans. A gallery of our everyday rhythm.
            </p>
          </div>

          {/* Desktop Arrow Buttons for Scroll */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll gallery left"
              className="w-12 h-12 rounded-full border border-espresso/20 bg-paper text-espresso flex items-center justify-center hover:bg-espresso hover:text-paper transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll gallery right"
              className="w-12 h-12 rounded-full border border-espresso/20 bg-paper text-espresso flex items-center justify-center hover:bg-espresso hover:text-paper transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery Strip */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-8 pt-4 px-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                transform: `rotate(${item.rotation}deg)`,
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className={`flex-shrink-0 ${item.width} bg-[#FFFDF8] p-3 sm:p-4 pb-6 rounded-cafe border border-espresso/15 polaroid-shadow transition-transform duration-500 ease-spring-soft hover:!rotate-0 snap-start group`}
            >
              {/* Washi Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-sage/30 border border-sage/40 rounded-sm transform rotate-1" />

              {/* Photo Frame */}
              <div className={`relative w-full ${item.height} overflow-hidden rounded-[10px] bg-paper`}>
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 300px, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-espresso/80 backdrop-blur-sm text-paper px-2.5 py-1 rounded text-xs font-hand">
                  {item.tag}
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 px-1">
                <h3 className="font-serif text-lg text-espresso font-bold">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-espresso/75 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mt-2">
          <span className="font-hand text-sm text-coffee/70">
            swipe horizontally to explore all corners &rarr;
          </span>
        </div>
      </div>
    </section>
  );
}
