import React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { LeafDoodle, HandArrowDoodle } from "./Doodles";

export function Signatures() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}?text=${encodeURIComponent("Namaste! I'd like to reserve a table to try your signature specials.")}`;

  return (
    <section id="signatures" className="py-20 md:py-32 relative overflow-hidden bg-surface/30">
      {/* Subtle craft dividers top and bottom */}
      <div className="absolute top-0 inset-x-0 divider-dashed" />
      <div className="absolute bottom-0 inset-x-0 divider-dotted" />

      {/* Decorative leaf doodle in margin */}
      <div className="hidden lg:block absolute top-16 right-16 pointer-events-none opacity-30">
        <LeafDoodle className="w-16 h-16 text-sage transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Organic Editorial Feel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-hand text-xl text-marigold tracking-wide">
                crafted by hand every morning
              </span>
              <HandArrowDoodle className="w-8 h-4 text-marigold transform -rotate-6" />
            </div>
            <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-tight text-espresso">
              Our Five House Signatures
            </h2>
          </div>
          <p className="max-w-md text-espresso/75 text-base sm:text-[17px] leading-relaxed">
            The recipes we spent months obsessing over before opening our doors. Earthen clay, slow fire, honest ingredients, zero rush.
          </p>
        </div>

        {/* Staggered Organic Polaroid Spread - NOT a rigid grid */}
        <div className="relative">
          {/* Row 1: Items 1 & 2 (Staggered offset) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Item 1: Jaggery Cortado (cols 1-6) */}
            <div className="md:col-span-6 lg:col-span-5 md:ml-4">
              <div
                style={{
                  transform: "rotate(-1.8deg)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="group relative bg-[#FFFDF8] p-4 sm:p-5 pb-8 rounded-cafe border border-espresso/15 polaroid-shadow transition-all duration-500 ease-spring-soft hover:!rotate-0 hover:z-20 max-w-[380px] mx-auto md:mx-0"
              >
                {/* Washi Tape */}
                <div className="absolute -top-3 left-10 w-16 h-4 bg-marigold/30 border border-marigold/40 rounded-sm transform -rotate-3" />
                
                {/* Image slot with warm placeholder and detailed photograph brief comment */}
                {/* IMAGE BRIEF: Cortado in a ribbed terracotta tumbler, microfoam latte art, warm morning ray from left, wooden coaster */}
                <div className="relative w-full h-[230px] sm:h-[260px] overflow-hidden rounded-[10px] bg-surface">
                  <Image
                    src={siteConfig.signatures[0].imageUrl}
                    alt={siteConfig.signatures[0].imageAlt}
                    fill
                    sizes="(max-width: 640px) 340px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Handwritten tag attached to photo corner */}
                  <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-espresso/15 shadow-sm">
                    <span className="font-hand text-sm text-coffee font-bold">
                      {siteConfig.signatures[0].annotation}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-espresso">
                      {siteConfig.signatures[0].title}
                    </h3>
                    <p className="mt-2 text-sm text-espresso/75 leading-relaxed">
                      {siteConfig.signatures[0].description}
                    </p>
                  </div>
                  <span className="font-hand text-xl text-marigold font-bold whitespace-nowrap bg-marigold/10 px-2.5 py-0.5 rounded-full border border-marigold/20">
                    ₹{siteConfig.signatures[0].price}
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2: Truffle Mushroom Sourdough (cols 7-12) */}
            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 md:mt-12">
              <div
                style={{
                  transform: "rotate(1.5deg)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="group relative bg-[#FFFDF8] p-4 sm:p-5 pb-8 rounded-cafe border border-espresso/15 polaroid-shadow transition-all duration-500 ease-spring-soft hover:!rotate-0 hover:z-20 max-w-[400px] mx-auto md:ml-auto"
              >
                {/* Washi Tape */}
                <div className="absolute -top-3 right-12 w-16 h-4 bg-sage/35 border border-sage/40 rounded-sm transform rotate-2" />

                {/* IMAGE BRIEF: Sourdough toast laden with golden pan-seared mushrooms and herbs on handcrafted pottery plate, textured linen backdrop */}
                <div className="relative w-full h-[240px] sm:h-[270px] overflow-hidden rounded-[10px] bg-surface">
                  <Image
                    src={siteConfig.signatures[1].imageUrl}
                    alt={siteConfig.signatures[1].imageAlt}
                    fill
                    sizes="(max-width: 640px) 340px, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-paper/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-espresso/15 shadow-sm">
                    <span className="font-hand text-sm text-sage font-bold">
                      {siteConfig.signatures[1].annotation}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-espresso">
                      {siteConfig.signatures[1].title}
                    </h3>
                    <p className="mt-2 text-sm text-espresso/75 leading-relaxed">
                      {siteConfig.signatures[1].description}
                    </p>
                  </div>
                  <span className="font-hand text-xl text-marigold font-bold whitespace-nowrap bg-marigold/10 px-2.5 py-0.5 rounded-full border border-marigold/20">
                    ₹{siteConfig.signatures[1].price}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Item 3 - Prominent Center Feature (Mitti Kulhad Chai) */}
          <div className="max-w-[480px] mx-auto my-8 md:my-14 relative z-10">
            <div
              style={{
                transform: "rotate(-1.1deg)",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="group relative bg-[#FFFBF3] p-5 sm:p-6 pb-9 rounded-cafe border-2 border-coffee/20 polaroid-shadow transition-all duration-500 ease-spring-soft hover:!rotate-0 hover:z-20"
            >
              {/* Double Washi Tape */}
              <div className="absolute -top-3 left-14 w-14 h-4 bg-coffee/20 border border-coffee/30 rounded-sm transform -rotate-3" />
              <div className="absolute -top-3 right-14 w-14 h-4 bg-marigold/30 border border-marigold/40 rounded-sm transform rotate-4" />

              {/* IMAGE BRIEF: Earthen kulhad overflowing with frothy steaming chai, crushed whole spices alongside on warm timber table */}
              <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-[10px] bg-surface">
                <Image
                  src={siteConfig.signatures[2].imageUrl}
                  alt={siteConfig.signatures[2].imageAlt}
                  fill
                  sizes="(max-width: 640px) 340px, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-coffee text-paper px-3 py-1 rounded-full text-xs font-serif shadow-sm">
                  Kanpur Legend
                </div>
                <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm px-3 py-1 rounded-md border border-espresso/15 shadow-sm">
                  <span className="font-hand text-sm text-coffee font-bold">
                    {siteConfig.signatures[2].annotation}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-espresso">
                    {siteConfig.signatures[2].title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-espresso/75 leading-relaxed">
                    {siteConfig.signatures[2].description}
                  </p>
                </div>
                <span className="font-hand text-2xl text-marigold font-bold whitespace-nowrap bg-marigold/10 px-3 py-1 rounded-full border border-marigold/20">
                  ₹{siteConfig.signatures[2].price}
                </span>
              </div>
            </div>
          </div>

          {/* Row 3: Items 4 & 5 (Staggered offset) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mt-12 md:mt-16">
            {/* Item 4: Burnt Butter Gnocchi (cols 1-6) */}
            <div className="md:col-span-6 lg:col-span-5 md:col-start-2">
              <div
                style={{
                  transform: "rotate(1.7deg)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="group relative bg-[#FFFDF8] p-4 sm:p-5 pb-8 rounded-cafe border border-espresso/15 polaroid-shadow transition-all duration-500 ease-spring-soft hover:!rotate-0 hover:z-20 max-w-[390px] mx-auto md:mx-0"
              >
                {/* Washi Tape */}
                <div className="absolute -top-3 left-12 w-16 h-4 bg-sage/35 border border-sage/40 rounded-sm transform rotate-1" />

                {/* IMAGE BRIEF: Hand-rolled gnocchi glistening with sage brown butter, shallow stoneware bowl, overhead angled daylight */}
                <div className="relative w-full h-[230px] sm:h-[260px] overflow-hidden rounded-[10px] bg-surface">
                  <Image
                    src={siteConfig.signatures[3].imageUrl}
                    alt={siteConfig.signatures[3].imageAlt}
                    fill
                    sizes="(max-width: 640px) 340px, 390px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-espresso/15 shadow-sm">
                    <span className="font-hand text-sm text-coffee font-bold">
                      {siteConfig.signatures[3].annotation}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-espresso">
                      {siteConfig.signatures[3].title}
                    </h3>
                    <p className="mt-2 text-sm text-espresso/75 leading-relaxed">
                      {siteConfig.signatures[3].description}
                    </p>
                  </div>
                  <span className="font-hand text-xl text-marigold font-bold whitespace-nowrap bg-marigold/10 px-2.5 py-0.5 rounded-full border border-marigold/20">
                    ₹{siteConfig.signatures[3].price}
                  </span>
                </div>
              </div>
            </div>

            {/* Item 5: Warm Spiced Date Cake (cols 7-12) */}
            <div className="md:col-span-6 lg:col-span-5 lg:col-start-8 md:-mt-8">
              <div
                style={{
                  transform: "rotate(-1.4deg)",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="group relative bg-[#FFFDF8] p-4 sm:p-5 pb-8 rounded-cafe border border-espresso/15 polaroid-shadow transition-all duration-500 ease-spring-soft hover:!rotate-0 hover:z-20 max-w-[390px] mx-auto md:ml-auto"
              >
                {/* Washi Tape */}
                <div className="absolute -top-3 right-10 w-16 h-4 bg-marigold/30 border border-marigold/40 rounded-sm transform -rotate-2" />

                {/* IMAGE BRIEF: Dark rich date cake slice dripping with warm toffee sauce, speckled pottery dish, small vintage brass spoon */}
                <div className="relative w-full h-[230px] sm:h-[260px] overflow-hidden rounded-[10px] bg-surface">
                  <Image
                    src={siteConfig.signatures[4].imageUrl}
                    alt={siteConfig.signatures[4].imageAlt}
                    fill
                    sizes="(max-width: 640px) 340px, 390px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-paper/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-espresso/15 shadow-sm">
                    <span className="font-hand text-sm text-marigold font-bold">
                      {siteConfig.signatures[4].annotation}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-espresso">
                      {siteConfig.signatures[4].title}
                    </h3>
                    <p className="mt-2 text-sm text-espresso/75 leading-relaxed">
                      {siteConfig.signatures[4].description}
                    </p>
                  </div>
                  <span className="font-hand text-xl text-marigold font-bold whitespace-nowrap bg-marigold/10 px-2.5 py-0.5 rounded-full border border-marigold/20">
                    ₹{siteConfig.signatures[4].price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="font-hand text-lg text-coffee/85 mb-3">
            Want to reserve one of our terrace tables for breakfast?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-coffee transition-colors underline decoration-marigold decoration-2 underline-offset-4"
          >
            <span>Message on WhatsApp (+91 90000 00000)</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
