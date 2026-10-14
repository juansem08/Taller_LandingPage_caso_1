"use client";

import React from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Car,
  Store,
  Clock,
  UtensilsCrossed,
  Gift,
  ArrowRight,
} from "lucide-react";

interface ChicagoStyleSectionProps {
  onLearnMore?: () => void;
  onSeeLocations?: () => void;
  onSelectFeature?: (name: string) => void;
}

const FEATURES = [
  { id: "online", label: "ORDER ONLINE", icon: ShoppingBag },
  { id: "curbside", label: "CURBSIDE PICKUP", icon: Car },
  { id: "pickup", label: "IN-STORE PICKUP", icon: Store },
  { id: "lunch", label: "LUNCH MENU", icon: Clock },
  { id: "catering", label: "CATERING MENU", icon: UtensilsCrossed },
  { id: "trays", label: "PARTY TRAYS", icon: Gift },
];

export const ChicagoStyleSection: React.FC<ChicagoStyleSectionProps> = ({
  onLearnMore,
  onSeeLocations,
  onSelectFeature,
}) => {
  return (
    <section id="about" className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1A1816] leading-[1.08]">
              HOME OF THE
              <br />
              CHICAGO-STYLE
              <br />
              THIN CRUST PIZZA
            </h2>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-xl font-sans">
              Unlike deep dish, real Chicagoans grew up on tavern-style thin crust: rolled paper-thin, layered edge-to-edge with our slow-simmered spiced tomato sauce, blanketed in 100% whole milk mozzarella, and baked until the crust snaps with that signature tavern crunch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onLearnMore}
                className="px-6 py-2.5 bg-[#EA6A28] text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md hover:bg-[#D75918] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                LEARN MORE
              </button>

              <button
                onClick={onSeeLocations}
                className="px-6 py-2.5 bg-transparent border-2 border-[#1A1816] text-[#1A1816] font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-[#1A1816] hover:text-white transition-all duration-200 cursor-pointer"
              >
                SEE LOCATIONS
              </button>
            </div>

            {/* 6 Orange Badges Grid */}
            <div className="pt-6 grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 max-w-md">
              {FEATURES.map((feat) => {
                const Icon = feat.icon;
                return (
                  <button
                    key={feat.id}
                    onClick={() => onSelectFeature?.(feat.label)}
                    className="flex flex-col items-center justify-center p-3 sm:p-4 bg-[#EA6A28] hover:bg-[#D75918] text-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-center tracking-wider leading-tight">
                      {feat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Overlapping Polaroid Photos (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-8">
            <div className="relative w-full max-w-[380px] h-[380px] sm:h-[420px]">
              
              {/* Polaroid 1 (Left - Male Manager) */}
              <div className="absolute left-2 sm:left-4 top-4 w-[210px] sm:w-[240px] polaroid-frame -rotate-4 rounded-xs shadow-xl z-10 transition-all duration-300 hover:z-30">
                {/* Washi tape on top-left corner */}
                <div className="absolute -top-3.5 -left-3.5 w-20 h-6 washi-tape -rotate-25 z-20 pointer-events-none" />
                
                {/* Photo container */}
                <div className="relative w-full aspect-square overflow-hidden rounded-xs bg-stone-100">
                  <Image
                    src="/images/polaroid_male.jpg"
                    alt="Crust Pizza Co. Store Manager"
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="font-heading text-xs font-bold tracking-wider text-stone-700 uppercase">
                    MARCUS • GM
                  </span>
                </div>
              </div>

              {/* Polaroid 2 (Right - Female Team Member) */}
              <div className="absolute right-2 sm:right-4 top-16 sm:top-14 w-[200px] sm:w-[230px] polaroid-frame rotate-6 rounded-xs shadow-2xl z-20 transition-all duration-300 hover:z-30">
                {/* Washi tape on top-right corner */}
                <div className="absolute -top-3 -right-3 w-20 h-6 washi-tape rotate-12 z-20 pointer-events-none" />
                {/* Washi tape on bottom-left corner */}
                <div className="absolute -bottom-3 -left-3 w-16 h-5 washi-tape rotate-45 z-20 pointer-events-none" />
                
                {/* Photo container */}
                <div className="relative w-full aspect-square overflow-hidden rounded-xs bg-stone-100">
                  <Image
                    src="/images/polaroid_female.jpg"
                    alt="Crust Pizza Co. Team Member"
                    fill
                    className="object-cover"
                    sizes="230px"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="font-heading text-xs font-bold tracking-wider text-stone-700 uppercase">
                    ELENA • LEAD PIZZAIOLO
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
