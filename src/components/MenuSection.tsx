"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "chicken-parm",
    name: "CHICKEN PARM",
    price: "$14",
    description: "Hand-breaded chicken cutlet baked in house marinara with molten Wisconsin mozzarella cheese.",
    image: "/images/menu_chicken_parm.jpg",
  },
  {
    id: "chicken-alfredo",
    name: "CHICKEN ALFREDO",
    price: "$15",
    description: "Tender grilled chicken tossed in rich parmesan garlic cream sauce over fresh imported pasta.",
    image: "/images/menu_chicken_alfredo.jpg",
  },
  {
    id: "spaghetti-meatballs",
    name: "SPAGHETTI & MEATBALLS",
    price: "$12",
    description: "Signature grandma-recipe beef & pork meatballs simmered in slow-cooked vine-ripened tomato sauce.",
    image: "/images/menu_spaghetti_meatballs.jpg",
  },
  {
    id: "baked-mac-cheese",
    name: "BAKED MAC & CHEESE",
    price: "$13",
    description: "Artisanal pasta baked bubbling hot in sharp cheddar, fontina, and provolone with crispy herbed crust.",
    image: "/images/menu_baked_mac_cheese.jpg",
  },
];

interface MenuSectionProps {
  onSelectItem?: (item: MenuItem) => void;
  onViewAll?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onViewAll,
}) => {
  return (
    <section id="menu" className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1816] uppercase mb-6">
          OUR MENU
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-stone-200/80 group"
            >
              {/* Food Image with Price Badge */}
              <div className="relative w-full h-44 overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Orange Price Tag */}
                <div className="absolute top-3 right-3 bg-[#EA6A28] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                  {item.price}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1A1816] tracking-wide uppercase">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 font-sans line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#EA6A28] tracking-wider uppercase">
                    ADD TO ORDER
                  </span>
                  
                  <button
                    onClick={() => onSelectItem?.(item)}
                    aria-label={`Add ${item.name} to order`}
                    className="w-8 h-8 rounded-full bg-[#EA6A28] text-white flex items-center justify-center hover:bg-[#D75918] transition-colors shadow-sm transform hover:rotate-90 duration-200 cursor-pointer"
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Our Complete Menu CTA */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onViewAll}
            className="px-8 py-3 bg-[#EA6A28] text-white font-heading font-semibold text-sm tracking-wider uppercase rounded-full shadow-md hover:bg-[#D75918] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
          >
            <span>VIEW OUR COMPLETE MENU</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
