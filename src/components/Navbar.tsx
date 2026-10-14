"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CrustLogo } from "./CrustLogo";
import { User, Phone, Menu, X } from "lucide-react";
import { TwitterIcon } from "./SocialIcons";

interface NavbarProps {
  onOpenOrder?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF7F0] border-b border-[#E9E3D5] sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold tracking-wider uppercase">
          <Link
            href="#home"
            className="px-4 py-1.5 bg-[#EA6A28] text-white rounded-md shadow-xs hover:bg-[#D75918] transition-colors font-medium text-xs tracking-widest"
          >
            HOME
          </Link>
          <Link
            href="#menu"
            className="text-[#1A1816] hover:text-[#EA6A28] transition-colors text-xs tracking-widest font-bold"
          >
            MENU
          </Link>
          <Link
            href="#locations"
            className="text-[#1A1816] hover:text-[#EA6A28] transition-colors text-xs tracking-widest font-bold"
          >
            LOCATIONS
          </Link>
          <button
            onClick={onOpenOrder}
            className="text-[#1A1816] hover:text-[#EA6A28] transition-colors text-xs tracking-widest font-bold cursor-pointer"
          >
            ORDER ONLINE
          </button>
        </nav>

        {/* Center Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:px-6">
          <Link href="#home" className="group">
            <CrustLogo
              variant="dark"
              size={64}
              className="transform group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold tracking-wider uppercase">
          <Link
            href="#about"
            className="text-[#1A1816] hover:text-[#EA6A28] transition-colors text-xs tracking-widest font-bold"
          >
            ABOUT
          </Link>
          <Link
            href="#contact"
            className="text-[#1A1816] hover:text-[#EA6A28] transition-colors text-xs tracking-widest font-bold"
          >
            CONTACT
          </Link>

          {/* User Icon */}
          <button
            aria-label="User Account"
            className="w-7 h-7 rounded-full bg-[#EA6A28] flex items-center justify-center text-white hover:bg-[#D75918] transition-colors cursor-pointer shadow-xs"
          >
            <User size={15} />
          </button>

          {/* Twitter / Social Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-[#1A1816] hover:text-[#EA6A28] transition-colors"
          >
            <TwitterIcon size={17} className="fill-current" />
          </a>

          {/* Call Now */}
          <a
            href="tel:18005552787"
            className="flex items-center space-x-1.5 text-[#1A1816] hover:text-[#EA6A28] transition-colors text-xs tracking-widest font-bold"
          >
            <Phone size={13} className="text-[#EA6A28]" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={onOpenOrder}
            className="px-3 py-1 bg-[#EA6A28] text-white rounded text-xs font-bold tracking-wider"
          >
            ORDER
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#1A1816] hover:text-[#EA6A28] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F0] border-b border-[#E9E3D5] px-6 py-4 space-y-3 font-bold text-xs tracking-widest uppercase">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#EA6A28]"
          >
            HOME
          </Link>
          <Link
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#EA6A28]"
          >
            MENU
          </Link>
          <Link
            href="#locations"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#EA6A28]"
          >
            LOCATIONS
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrder?.();
            }}
            className="block text-left w-full hover:text-[#EA6A28]"
          >
            ORDER ONLINE
          </button>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#EA6A28]"
          >
            ABOUT
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#EA6A28]"
          >
            CONTACT
          </Link>
          <div className="pt-2 border-t border-[#E9E3D5] flex items-center justify-between">
            <a
              href="tel:18005552787"
              className="flex items-center space-x-2 text-[#EA6A28]"
            >
              <Phone size={14} />
              <span>CALL NOW: 1-800-555-CRUST</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
