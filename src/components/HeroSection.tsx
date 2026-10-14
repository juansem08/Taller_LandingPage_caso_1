"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOrderClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
  return (
    <section id="home" className="w-full pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Card Container with rounded corners */}
        <div className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-stone-800/10">
          
          {/* Main Hero Pizza Image */}
          <Image
            src="/images/hero_pizza.jpg"
            alt="Handcrafted Chicago-style thin crust pizza shared among friends"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          {/* Subtle gradient vignette over image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Overlaid Badge / Card on the Left */}
          <div className="absolute top-8 sm:top-12 left-6 sm:left-12 z-20 max-w-[340px] sm:max-w-[420px]">
            
            {/* Washi Masking Tape Accent pinned across top corner */}
            <div className="absolute -top-4 -left-4 w-28 h-7 washi-tape -rotate-12 z-30 opacity-90 rounded-xs pointer-events-none border-t border-b border-amber-200/50" />

            {/* Dark Charcoal Card */}
            <div className="bg-[#191715]/95 backdrop-blur-xs text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-stone-800/60 relative">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.08] tracking-tight text-white">
                FOR DELICIOUS,
                <br />
                MADE-FROM
                <br />
                SCRATCH PIZZAS
              </h1>

              <p className="mt-3 text-xs sm:text-sm text-stone-300 font-sans leading-relaxed tracking-wide">
                Crispy golden edges, secret family spiced tomato sauce, and 100% whole milk Wisconsin mozzarella.
              </p>

              {/* Orange Pill CTA Button */}
              <div className="mt-6">
                <button
                  onClick={onOrderClick}
                  className="group inline-flex items-center space-x-2 px-6 py-2.5 sm:px-7 sm:py-3 bg-[#EA6A28] text-white font-heading font-semibold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-lg hover:bg-[#D75918] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Order Online</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
