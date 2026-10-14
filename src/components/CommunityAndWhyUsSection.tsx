"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Users, Sparkles } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

interface CommunityAndWhyUsSectionProps {
  onCommunityClick?: () => void;
}

const GALLERY_IMAGES = [
  { id: 1, src: "/images/why_pizza_pull.jpg", alt: "Fresh baked tavern crust pizza cheese pull" },
  { id: 2, src: "/images/why_pasta_bowl.jpg", alt: "Sharing pasta skillet and craft beer at table" },
  { id: 3, src: "/images/why_friends.jpg", alt: "Friends enjoying pizza outdoors on restaurant patio" },
  { id: 4, src: "/images/why_whole_pizza.jpg", alt: "Square cut Chicago thin crust supreme pizza" },
  { id: 5, src: "/images/why_sharing_pan.jpg", alt: "Friends sharing fresh warm focaccia and pizza" },
  { id: 6, src: "/images/why_takeout.jpg", alt: "Crust Pizza Co. handcrafted pizza box" },
];

export const CommunityAndWhyUsSection: React.FC<CommunityAndWhyUsSectionProps> = ({
  onCommunityClick,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="w-full py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Community Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 pt-4">
            <div>
              {/* Social Handle */}
              <div className="flex items-center space-x-1.5 text-stone-700 font-bold text-xs tracking-wider mb-2">
                <InstagramIcon size={14} className="text-[#EA6A28]" />
                <span>@crustpizzaco</span>
              </div>

              {/* Heading */}
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1A1816] leading-tight">
                LET&apos;S WORK TOGETHER
                <br />
                FOR OUR COMMUNITY
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-stone-700 font-sans leading-relaxed max-w-lg">
                We take immense pride in supporting local schools, youth sports leagues, charity events, and neighborhood first responders. Through our Slice of Giving program, 20% of designated fundraiser night sales go directly to your organization.
              </p>
            </div>

            {/* Community Vector Illustration Card */}
            <div className="pt-2">
              <div className="bg-[#F2ECE0] rounded-2xl p-6 border border-[#E4DCB8]/60 flex items-center justify-between shadow-xs">
                {/* SVG Illustration of Team with Community Box */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-36 h-28 flex-shrink-0">
                    <svg viewBox="0 0 160 120" className="w-full h-full drop-shadow-sm">
                      {/* Left person */}
                      <circle cx="50" cy="36" r="14" fill="#F8D3B0" />
                      <path d="M 40 30 Q 50 16 62 26 Q 58 18 48 20 Z" fill="#4B3621" />
                      <path d="M 34 55 Q 50 48 66 55 L 66 90 L 34 90 Z" fill="#EA6A28" />
                      {/* Apron strap */}
                      <path d="M 42 52 L 46 66 L 54 66 L 58 52" stroke="#1A1816" strokeWidth="2" fill="none" />
                      <rect x="42" y="66" width="16" height="24" rx="2" fill="#1A1816" />

                      {/* Right person */}
                      <circle cx="110" cy="36" r="14" fill="#F4C29D" />
                      <path d="M 98 28 Q 110 14 122 28 Q 124 20 110 18 Z" fill="#8B4513" />
                      <path d="M 94 55 Q 110 48 126 55 L 126 90 L 94 90 Z" fill="#2A7B88" />
                      <rect x="102" y="66" width="16" height="24" rx="2" fill="#1A1816" />

                      {/* Hands holding the box */}
                      <rect
                        x="48"
                        y="60"
                        width="64"
                        height="40"
                        rx="4"
                        fill="#D9822B"
                        stroke="#8A4A0A"
                        strokeWidth="1.5"
                      />
                      <rect x="52" y="64" width="56" height="32" rx="2" fill="#FAF7F0" />
                      <text
                        x="80"
                        y="77"
                        textAnchor="middle"
                        fontSize="6.5"
                        fontWeight="800"
                        fill="#EA6A28"
                        fontFamily="sans-serif"
                      >
                        CRUST GIVES
                      </text>
                      <text
                        x="80"
                        y="88"
                        textAnchor="middle"
                        fontSize="5"
                        fontWeight="700"
                        fill="#1A1816"
                        fontFamily="sans-serif"
                      >
                        COMMUNITY FUND
                      </text>

                      {/* Floating hearts */}
                      <path
                        d="M 80 20 Q 80 14 84 14 A 3 3 0 0 1 87 17 Q 87 23 80 28 Q 73 23 73 17 A 3 3 0 0 1 76 14 Q 80 14 80 20 Z"
                        fill="#EA6A28"
                        opacity="0.9"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#1A1816]">
                      FUNDRAISERS & SPONSORSHIPS
                    </h4>
                    <p className="text-[11px] text-stone-600 font-sans mt-0.5">
                      Host your next school or sports night with Crust Pizza Co.
                    </p>
                    <button
                      onClick={onCommunityClick}
                      className="mt-2 text-xs font-bold text-[#EA6A28] hover:text-[#D75918] tracking-wider uppercase underline underline-offset-2 flex items-center space-x-1 cursor-pointer"
                    >
                      <span>START A FUNDRAISER</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WHY CHOOSE US Card with 6-Photo Grid (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-stone-200/90">
              
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1A1816] mb-4">
                WHY CHOOSE US
              </h3>

              {/* 3x2 Photo Grid */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {GALLERY_IMAGES.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setSelectedPhoto(img.src)}
                    className="relative aspect-square rounded-xl overflow-hidden bg-stone-100 group cursor-pointer border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-200"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 30vw, 160px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>

              {/* Bottom tag line */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
                <span className="font-medium text-stone-600">Fresh Ingredients • Scratch Dough • Real Mozzarella</span>
                <span className="font-bold text-[#EA6A28]">#CrustPizzaCo</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Photo inspection */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs cursor-zoom-out"
        >
          <div className="relative max-w-2xl max-h-[85vh] w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={selectedPhoto}
              alt="Enlarged gallery photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
