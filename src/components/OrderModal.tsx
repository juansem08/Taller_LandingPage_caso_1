"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ShoppingBag, MapPin, Sparkles } from "lucide-react";

export type ModalType = "order" | "menu" | "franchise" | "locations" | null;

interface OrderModalProps {
  type: ModalType;
  selectedItem?: { name: string; price: string; image: string } | null;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  type,
  selectedItem,
  onClose,
}) => {
  const [orderMethod, setOrderMethod] = useState<"pickup" | "delivery">("pickup");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [location, setLocation] = useState("Lincoln Park • Chicago, IL");

  if (!type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F0] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-200/80 hover:bg-[#EA6A28] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <Check size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase text-[#1A1816]">
              Request Received!
            </h3>
            <p className="text-sm text-stone-600 font-sans">
              Thank you for choosing Crust Pizza Co. Our team is preparing your order with fresh handcrafted ingredients.
            </p>
          </div>
        ) : (
          <>
            {/* Modal Content based on type */}
            {type === "order" && (
              <div>
                <div className="flex items-center space-x-2 text-[#EA6A28] font-bold text-xs uppercase tracking-wider mb-1">
                  <ShoppingBag size={16} />
                  <span>Crust Pizza Co. Online Ordering</span>
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-[#1A1816] tracking-tight">
                  {selectedItem ? `Add to Order: ${selectedItem.name}` : "Start Your Order"}
                </h3>
                
                {selectedItem && (
                  <div className="mt-4 flex items-center space-x-4 bg-white p-3 rounded-2xl border border-stone-200">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#1A1816]">
                        {selectedItem.name}
                      </h4>
                      <p className="text-sm font-bold text-[#EA6A28]">
                        {selectedItem.price}
                      </p>
                    </div>
                  </div>
                )}

                {/* Pickup vs Delivery Tabs */}
                <div className="mt-5 grid grid-cols-2 gap-2 bg-stone-200/70 p-1 rounded-full">
                  <button
                    type="button"
                    onClick={() => setOrderMethod("pickup")}
                    className={`py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                      orderMethod === "pickup"
                        ? "bg-[#EA6A28] text-white shadow-xs"
                        : "text-stone-700 hover:text-black"
                    }`}
                  >
                    Curbside / In-Store Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderMethod("delivery")}
                    className={`py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                      orderMethod === "delivery"
                        ? "bg-[#EA6A28] text-white shadow-xs"
                        : "text-stone-700 hover:text-black"
                    }`}
                  >
                    Direct Delivery
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Select Location
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:border-[#EA6A28]"
                    >
                      <option>Lincoln Park • 2145 N Halsted St, Chicago, IL</option>
                      <option>Wicker Park • 1520 N Damen Ave, Chicago, IL</option>
                      <option>West Loop • 832 W Randolph St, Chicago, IL</option>
                      <option>Naperville • 120 Water St, Naperville, IL</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Your Name & Phone
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#EA6A28]"
                      />
                      <input
                        required
                        type="tel"
                        placeholder="(312) 555-0199"
                        className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#EA6A28]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 bg-[#EA6A28] hover:bg-[#D75918] text-white font-heading font-semibold text-sm tracking-wider uppercase rounded-full shadow-md transition-all cursor-pointer"
                  >
                    Confirm & Proceed to Checkout
                  </button>
                </form>
              </div>
            )}

            {type === "franchise" && (
              <div>
                <div className="flex items-center space-x-2 text-[#EA6A28] font-bold text-xs uppercase tracking-wider mb-1">
                  <Sparkles size={16} />
                  <span>Franchise Inquiry</span>
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-[#1A1816]">
                  Own A Crust Pizza Co.
                </h3>
                <p className="mt-1 text-xs text-stone-600 font-sans">
                  Join our expanding family of tavern-style pizza franchise owners. Complete this form to receive our franchise disclosure packet.
                </p>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Target City & State
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Austin, TX or Denver, CO"
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#EA6A28]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        First & Last Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#EA6A28]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#EA6A28]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Liquid Capital Available
                    </label>
                    <select className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#EA6A28]">
                      <option>$100,000 - $250,000</option>
                      <option>$250,000 - $500,000</option>
                      <option>$500,000+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 bg-[#EA6A28] hover:bg-[#D75918] text-white font-heading font-semibold text-sm tracking-wider uppercase rounded-full shadow-md transition-all cursor-pointer"
                  >
                    Submit Franchise Request
                  </button>
                </form>
              </div>
            )}

            {(type === "locations" || type === "menu") && (
              <div>
                <div className="flex items-center space-x-2 text-[#EA6A28] font-bold text-xs uppercase tracking-wider mb-1">
                  <MapPin size={16} />
                  <span>Crust Pizza Co. Chicagoland</span>
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-[#1A1816]">
                  Our Store Locations
                </h3>
                <div className="mt-4 space-y-3 max-h-72 overflow-y-auto pr-1">
                  {[
                    { name: "Lincoln Park", address: "2145 N Halsted St, Chicago, IL 60614", hours: "11am - 10pm Daily" },
                    { name: "Wicker Park", address: "1520 N Damen Ave, Chicago, IL 60622", hours: "11am - 11pm Fri-Sat" },
                    { name: "West Loop", address: "832 W Randolph St, Chicago, IL 60607", hours: "11am - 10pm Daily" },
                    { name: "Naperville Downtown", address: "120 Water St, Naperville, IL 60540", hours: "11am - 9pm Sun-Thu" },
                  ].map((loc, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#1A1816]">{loc.name}</h4>
                        <p className="text-xs text-stone-600">{loc.address}</p>
                        <p className="text-[11px] text-[#EA6A28] font-semibold mt-0.5">{loc.hours}</p>
                      </div>
                      <button
                        onClick={() => {
                          setLocation(`${loc.name} • ${loc.address}`);
                          onClose();
                        }}
                        className="px-3 py-1.5 bg-[#EA6A28] text-white text-xs font-bold rounded-full hover:bg-[#D75918]"
                      >
                        Order Here
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};
