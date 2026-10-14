"use client";

import React from "react";
import Link from "next/link";
import { CrustLogo } from "./CrustLogo";
import { ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";

interface FooterProps {
  onOrderNow?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOrderNow }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#FAF7F0] border-t border-[#E9E3D5] pt-10 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E9E3D5]">
          
          {/* Left: Logo + Want to place order prompt */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <CrustLogo variant="dark" size={56} />
            <div>
              <h4 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1A1816]">
                WANT TO PLACE AN
                <br className="hidden sm:inline" />
                {" "}ORDER NOW?
              </h4>
              <button
                onClick={onOrderNow}
                className="mt-1 text-xs font-bold text-[#EA6A28] hover:text-[#D75918] tracking-widest uppercase underline underline-offset-2 cursor-pointer"
              >
                START ONLINE ORDER &rarr;
              </button>
            </div>
          </div>

          {/* Right: Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-widest text-[#1A1816] uppercase">
            <Link href="#menu" className="hover:text-[#EA6A28] transition-colors">
              MENU
            </Link>
            <Link href="#catering" className="hover:text-[#EA6A28] transition-colors">
              CATERING
            </Link>
            <button
              onClick={onOrderNow}
              className="hover:text-[#EA6A28] transition-colors cursor-pointer"
            >
              ORDERING
            </button>
            <Link href="#community" className="hover:text-[#EA6A28] transition-colors">
              COMMISSIONS
            </Link>
            <Link href="#privacy" className="hover:text-[#EA6A28] transition-colors">
              PRIVACY
            </Link>
            <Link href="#terms" className="hover:text-[#EA6A28] transition-colors">
              TERMS
            </Link>
          </nav>

        </div>

        {/* Bottom Details Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-600 gap-4">
          <p>© 2026 Crust Pizza Co. All rights reserved. Chicago-Style Thin Crust Pizza.</p>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone-600 hover:text-[#EA6A28] transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-stone-600 hover:text-[#EA6A28] transition-colors"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-stone-600 hover:text-[#EA6A28] transition-colors"
            >
              <TwitterIcon size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-stone-200 hover:bg-[#EA6A28] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
