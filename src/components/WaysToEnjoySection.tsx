"use client";

import React from "react";
import Image from "next/image";
import { CrustLogo } from "./CrustLogo";
import { Award, Sparkles, ArrowRight } from "lucide-react";

interface WaysToEnjoySectionProps {
  onAwardLearnMore?: () => void;
  onKidsMenuClick?: () => void;
}

export const WaysToEnjoySection: React.FC<WaysToEnjoySectionProps> = ({
  onAwardLearnMore,
  onKidsMenuClick,
}) => {
  return (
    <section className="w-full py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1816] uppercase mb-8">
          WAYS TO ENJOY
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Large Pizza Card with Stamp Overlay (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 group">
              {/* Pepperoni Pizza Photo */}
              <Image
                src="/images/pizza_pepperoni_topdown.jpg"
                alt="Chicago thin crust pepperoni pizza with Crust Pizza Co stamp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Center Stamp Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#FAF7F0]/85 backdrop-blur-[2px] p-2.5 rounded-full shadow-2xl border-2 border-[#191715]/40 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <CrustLogo
                    variant="stamp"
                    size={150}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Two Dark Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Award-Winning */}
            <div className="bg-[#191715] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-stone-800/80 relative overflow-hidden group">
              <div className="space-y-4">
                {/* Orange Circular Icon */}
                <div className="w-14 h-14 rounded-full bg-[#EA6A28] flex items-center justify-center text-white shadow-md mb-2 group-hover:scale-110 transition-transform">
                  <Award size={28} />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-tight">
                  AWARD-WINNING
                  <br />
                  PIZZA & SERVICE
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  Voted Best Chicago-Style Thin Crust 5 years running. Fresh dough proofed for 48 hours and scratch-made hospitality.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={onAwardLearnMore}
                  className="w-full py-2.5 px-4 bg-[#EA6A28] hover:bg-[#D75918] text-white font-heading font-semibold text-xs tracking-wider uppercase rounded-full shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Card 2: Kids Eat Free */}
            <div className="bg-[#191715] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-stone-800/80 relative overflow-hidden group">
              <div className="space-y-4">
                {/* Orange Circular Icon */}
                <div className="w-14 h-14 rounded-full bg-[#EA6A28] flex items-center justify-center text-white shadow-md mb-2 group-hover:scale-110 transition-transform">
                  <Sparkles size={28} />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-tight">
                  KIDS EAT FREE
                  <br />
                  TUESDAYS!
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  Family dinner is always on us. Receive a free 1-topping kids pizza with every adult entree purchase every Tuesday.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={onKidsMenuClick}
                  className="w-full py-2.5 px-4 bg-[#EA6A28] hover:bg-[#D75918] text-white font-heading font-semibold text-xs tracking-wider uppercase rounded-full shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>VIEW OUR COMPLETE MENU</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
