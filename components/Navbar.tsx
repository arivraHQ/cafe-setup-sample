"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { LeafDoodle } from "./Doodles";

export function Navbar() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if current hour in IST is within 8:00 AM to 11:00 PM
    const now = new Date();
    // Use local or India hour
    const currentHour = now.getHours();
    setIsOpenNow(
      currentHour >= siteConfig.hours.openHour &&
        currentHour < siteConfig.hours.closeHour
    );
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(siteConfig.whatsappDefaultMsg)}`;

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-espresso/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark Left */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee rounded-md p-1"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl text-espresso tracking-tight group-hover:text-coffee transition-colors">
                Mitti Cafe
              </span>
              <LeafDoodle className="w-5 h-5 text-sage transform rotate-12 transition-transform group-hover:rotate-45" />
            </div>
            <span className="font-hand text-xs sm:text-sm text-coffee/80 tracking-wide -mt-1 ml-0.5">
              Swaroop Nagar, Kanpur
            </span>
          </Link>

          {/* Live Open / Closed Chip */}
          <div className="hidden md:flex items-center">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
                isOpenNow
                  ? "bg-sage/15 text-sage border-sage/30"
                  : "bg-marigold/15 text-marigold border-marigold/30"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpenNow ? "bg-sage animate-pulse" : "bg-marigold"
                }`}
              />
              <span>
                {isOpenNow ? "Open now • till 11 PM" : "Closed now • opens 8 AM"}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-[16px] font-medium text-espresso/85"
          >
            <Link
              href="#signatures"
              className="hover:text-coffee transition-colors relative py-1 hover:border-b-2 hover:border-marigold"
            >
              Signatures
            </Link>
            <Link
              href="#menu"
              className="hover:text-coffee transition-colors relative py-1 hover:border-b-2 hover:border-marigold"
            >
              Menu
            </Link>
            <Link
              href="#story"
              className="hover:text-coffee transition-colors relative py-1 hover:border-b-2 hover:border-marigold"
            >
              Our Story
            </Link>
            <Link
              href="#ambience"
              className="hover:text-coffee transition-colors relative py-1 hover:border-b-2 hover:border-marigold"
            >
              Ambience
            </Link>
            <Link
              href="#happenings"
              className="hover:text-coffee transition-colors relative py-1 hover:border-b-2 hover:border-marigold"
            >
              Happenings
            </Link>
            <Link
              href="#visit"
              className="hover:text-coffee transition-colors relative py-1 hover:border-b-2 hover:border-marigold"
            >
              Visit
            </Link>
          </nav>

          {/* Reserve a Table Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-coffee text-paper font-medium text-sm hover:bg-espresso active:scale-95 transition-all duration-200 shadow-sm border border-coffee/30 cursor-pointer"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                isOpenNow
                  ? "bg-sage/15 text-sage border-sage/30"
                  : "bg-marigold/15 text-marigold border-marigold/30"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOpenNow ? "bg-sage animate-pulse" : "bg-marigold"
                }`}
              />
              <span>{isOpenNow ? "Open" : "Closed"}</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-espresso hover:bg-surface border border-espresso/15 focus:outline-none focus:ring-2 focus:ring-coffee"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-espresso/15 bg-surface px-6 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-lg font-medium text-espresso">
            <Link
              href="#signatures"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-coffee border-b border-espresso/5"
            >
              Signatures
            </Link>
            <Link
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-coffee border-b border-espresso/5"
            >
              Menu
            </Link>
            <Link
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-coffee border-b border-espresso/5"
            >
              Our Story
            </Link>
            <Link
              href="#ambience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-coffee border-b border-espresso/5"
            >
              Ambience
            </Link>
            <Link
              href="#happenings"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-coffee border-b border-espresso/5"
            >
              Happenings
            </Link>
            <Link
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-coffee border-b border-espresso/5"
            >
              Visit & Timings
            </Link>
          </nav>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-coffee text-paper font-medium text-base hover:bg-espresso active:scale-95 transition-all shadow-sm"
            >
              Reserve a Table on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
