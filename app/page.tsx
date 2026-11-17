import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-espresso selection:bg-marigold/30 selection:text-espresso">
      <Navbar />
      <Hero />
    </main>
  );
}
