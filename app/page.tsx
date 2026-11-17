import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Signatures } from "@/components/Signatures";
import { Menu } from "@/components/Menu";
import { Story } from "@/components/Story";
import { Ambience } from "@/components/Ambience";
import { Happenings } from "@/components/Happenings";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-espresso selection:bg-marigold/30 selection:text-espresso">
      <Navbar />
      <Hero />
      <Signatures />
      <Menu />
      <Story />
      <Ambience />
      <Happenings />
      <Reviews />
      <Visit />
    </main>
  );
}
