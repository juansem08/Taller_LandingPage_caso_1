"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { ChicagoStyleSection } from "@/components/ChicagoStyleSection";
import { WaysToEnjoySection } from "@/components/WaysToEnjoySection";
import { CommunityAndWhyUsSection } from "@/components/CommunityAndWhyUsSection";
import { FranchiseAndCtaSection } from "@/components/FranchiseAndCtaSection";
import { Footer } from "@/components/Footer";
import { OrderModal, ModalType } from "@/components/OrderModal";

export default function Home() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    price: string;
    image: string;
  } | null>(null);

  const handleOpenOrder = (item?: { name: string; price: string; image: string }) => {
    setSelectedItem(item || null);
    setModalType("order");
  };

  const handleOpenFranchise = () => {
    setModalType("franchise");
  };

  const handleOpenLocations = () => {
    setModalType("locations");
  };

  const handleCloseModal = () => {
    setModalType(null);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1A1816] flex flex-col font-sans selection:bg-[#EA6A28] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenOrder={() => handleOpenOrder()} />

      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section with Pizza photography & Washi Tape Dark Badge */}
        <HeroSection onOrderClick={() => handleOpenOrder()} />

        {/* Our Menu Highlight Section */}
        <MenuSection
          onSelectItem={(item) => handleOpenOrder(item)}
          onViewAll={() => handleOpenOrder()}
        />

        {/* Chicago-Style Thin Crust + Polaroid Staff Section */}
        <ChicagoStyleSection
          onLearnMore={() => handleOpenOrder()}
          onSeeLocations={() => handleOpenLocations()}
          onSelectFeature={(feat) => {
            if (feat.includes("LOCATION") || feat.includes("PICKUP")) {
              handleOpenLocations();
            } else {
              handleOpenOrder();
            }
          }}
        />

        {/* Ways To Enjoy Section (Stamped Pizza + Dark Info Cards) */}
        <WaysToEnjoySection
          onAwardLearnMore={() => handleOpenOrder()}
          onKidsMenuClick={() => handleOpenOrder()}
        />

        {/* Community & Why Choose Us 6-Photo Gallery */}
        <CommunityAndWhyUsSection
          onCommunityClick={() => handleOpenFranchise()}
        />

        {/* Franchise Inquiry & Storefront Section */}
        <FranchiseAndCtaSection
          onFranchiseRequest={() => handleOpenFranchise()}
          onLocationClick={() => handleOpenLocations()}
          onGiftCardsClick={() => handleOpenOrder()}
          onRewardsClick={() => handleOpenOrder()}
        />
      </main>

      {/* Footer with Logo, CTA and navigation */}
      <Footer onOrderNow={() => handleOpenOrder()} />

      {/* Interactive Modal */}
      <OrderModal
        type={modalType}
        selectedItem={selectedItem}
        onClose={handleCloseModal}
      />
    </div>
  );
}
