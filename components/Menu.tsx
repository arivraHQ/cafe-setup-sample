"use client";

import React, { useState } from "react";
import { siteConfig, MenuItem } from "@/content/site";
import { SteamDoodle, LeafDoodle } from "./Doodles";

export function Menu() {
  const [activeTab, setActiveTab] = useState<string>("coffee");

  const currentCategory =
    siteConfig.menuCategories.find((cat) => cat.id === activeTab) ||
    siteConfig.menuCategories[0];

  return (
    <section id="menu" className="py-20 md:py-32 relative bg-paper overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute top-10 left-8 pointer-events-none opacity-25">
        <LeafDoodle className="w-20 h-20 text-coffee transform -rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <SteamDoodle className="w-5 h-5 text-marigold" />
            <span className="font-hand text-xl text-coffee">
              freshly prepped, never microwaved
            </span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-tight text-espresso">
            The Daily Cafe Menu
          </h2>
          <p className="mt-3 text-espresso/75 text-base sm:text-[17px]">
            Single-origin coffees, whole-leaf clay pot chais, and slow-fermented bakery goods. Prices inclusive of all taxes.
          </p>
        </div>

        {/* Tab Navigation: Styled like handmade index divider tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {siteConfig.menuCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-coffee text-paper border-coffee shadow-sm scale-105"
                    : "bg-surface/80 text-espresso/85 border-espresso/15 hover:bg-surface hover:text-espresso"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Board Card Container: Tactile textured paper backing */}
        <div className="bg-[#FFFDF7] p-6 sm:p-10 md:p-14 rounded-cafe border-2 border-espresso/15 shadow-sm relative">
          {/* Top corner craft stamp */}
          <div className="absolute top-4 right-6 hidden sm:block">
            <span className="font-hand text-xs text-coffee/60 tracking-widest uppercase border border-espresso/15 px-2.5 py-1 rounded">
              MITTI • SWEET & SAVOURY
            </span>
          </div>

          {/* Active Category Intro */}
          <div className="border-b border-espresso/15 pb-6 mb-8 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-coffee">
              {currentCategory.label}
            </h3>
            <p className="font-hand text-lg text-espresso/70 mt-1">
              {currentCategory.tagline}
            </p>
          </div>

          {/* Menu Items: 2 Columns on Desktop, 1 on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {currentCategory.items.map((item: MenuItem, idx: number) => (
              <div key={idx} className="flex flex-col group">
                {/* Top line: Veg/Non-veg Dot + Name + Dotted Leader + Price */}
                <div className="flex items-baseline justify-between w-full gap-2">
                  <div className="flex items-center gap-2 flex-wrap min-w-0 pr-1">
                    {/* FSSAI style dietary indicator */}
                    <span
                      title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                      className={`inline-flex items-center justify-center w-3.5 h-3.5 border rounded-sm flex-shrink-0 ${
                        item.isVeg
                          ? "border-emerald-700 bg-emerald-50"
                          : "border-red-900 bg-red-50"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.isVeg ? "bg-emerald-700" : "bg-red-900"
                        }`}
                      />
                    </span>

                    {/* Item Name (resilient wrapping, zero truncation) */}
                    <span className="font-serif text-[16px] sm:text-[18px] text-espresso font-semibold group-hover:text-coffee transition-colors leading-snug">
                      {item.name}
                    </span>

                    {/* Bestseller handwritten tag */}
                    {item.isBestseller && (
                      <span className="font-hand text-xs text-marigold font-bold border border-marigold/30 bg-marigold/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                        bestseller
                      </span>
                    )}

                    {/* Custom handwritten note if any */}
                    {item.handwrittenNote && (
                      <span className="font-hand text-xs text-sage font-bold whitespace-nowrap">
                        ({item.handwrittenNote})
                      </span>
                    )}
                  </div>

                  {/* Dotted Leader Line */}
                  <span className="flex-grow border-b-2 border-dotted border-espresso/25 mx-2 min-w-[16px] self-end mb-1" />

                  {/* Price */}
                  <span className="font-serif text-[16px] sm:text-[18px] text-espresso font-bold flex-shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-1.5 text-xs sm:text-sm text-espresso/70 leading-relaxed pl-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Card Footer Note */}
          <div className="mt-10 pt-6 border-t border-espresso/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-espresso/70">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 border border-emerald-700 bg-emerald-50 rounded-sm inline-flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                </span>
                <span>Vegetarian</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 border border-red-900 bg-red-50 rounded-sm inline-flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-900" />
                </span>
                <span>Contains Egg / Meat</span>
              </span>
            </div>
            <p className="font-hand text-base text-coffee">
              Oat & Almond milk substitutions available for ₹40
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
