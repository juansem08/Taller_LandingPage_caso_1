"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Gift, Award } from "lucide-react";

interface FranchiseAndCtaSectionProps {
  onFranchiseRequest?: () => void;
  onLocationClick?: () => void;
  onGiftCardsClick?: () => void;
  onRewardsClick?: () => void;
}

export const FranchiseAndCtaSection: React.FC<FranchiseAndCtaSectionProps> = ({
  onFranchiseRequest,
  onLocationClick,
  onGiftCardsClick,
  onRewardsClick,
}) => {
  return (
    <section id="franchise" className="w-full py-16 border-t border-[#E9E3D5]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Franchise Pitch (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1A1816] leading-tight">
              WANT TO OWN
              <br />
              YOUR OWN
              <br />
              CRUST PIZZA CO.?
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              Bring Chicago&apos;s favorite tavern-style pizza to your neighborhood. Full franchise training, site selection, and continuous operational support.
            </p>

            <div className="pt-2">
              <button
                onClick={onFranchiseRequest}
                className="px-6 py-2.5 bg-[#EA6A28] hover:bg-[#D75918] text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
              >
                <span>SUBMIT A REQUEST</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Center Column: Storefront Exterior Photo (4 cols) */}
          <div className="md:col-span-4">
            <div className="relative w-full h-52 sm:h-56 md:h-60 rounded-2xl overflow-hidden shadow-lg border border-stone-200/80 group">
              <Image
                src="/images/storefront.jpg"
                alt="Crust Pizza Co. restaurant exterior at dusk"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-xs font-heading font-bold tracking-wider drop-shadow-md">
                NOW EXPANDING NATIONWIDE
              </div>
            </div>
          </div>

          {/* Right Column: Quick Action Pills (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1A1816]">
              SUBMIT A REQUEST
            </h3>

            <p className="text-xs text-stone-600 font-sans">
              Looking for a location near you, ordering corporate gift cards, or joining our loyalty rewards?
            </p>

            {/* 3 Action Buttons */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <button
                onClick={onLocationClick}
                className="py-3 px-2 bg-[#EA6A28] hover:bg-[#D75918] text-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center group cursor-pointer"
              >
                <MapPin size={18} className="mb-1 text-white group-hover:scale-110 transition-transform" />
                <span className="font-heading text-[11px] font-bold tracking-wider uppercase text-center leading-tight">
                  LOCATIONS
                </span>
              </button>

              <button
                onClick={onGiftCardsClick}
                className="py-3 px-2 bg-[#EA6A28] hover:bg-[#D75918] text-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center group cursor-pointer"
              >
                <Gift size={18} className="mb-1 text-white group-hover:scale-110 transition-transform" />
                <span className="font-heading text-[11px] font-bold tracking-wider uppercase text-center leading-tight">
                  GIFT CARDS
                </span>
              </button>

              <button
                onClick={onRewardsClick}
                className="py-3 px-2 bg-[#EA6A28] hover:bg-[#D75918] text-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center group cursor-pointer"
              >
                <Award size={18} className="mb-1 text-white group-hover:scale-110 transition-transform" />
                <span className="font-heading text-[11px] font-bold tracking-wider uppercase text-center leading-tight">
                  REWARDS
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
