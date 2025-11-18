"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const luxuryDestinations = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    name: "Paris",
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    name: "Dubai",
  },
  {
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094",
    name: "Tokyo",
  },
  {
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070",
    name: "New York",
  },
  {
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070",
    name: "Bali",
  },
  {
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
    name: "London",
  },
];

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % luxuryDestinations.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${luxuryDestinations[currentImageIndex].image}')`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/80 via-luxury-navy/60 to-luxury-navy/80" />

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {luxuryDestinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 bg-luxury-gold"
                  : "w-2 bg-luxury-cream/40 hover:bg-luxury-cream/60"
              }`}
              aria-label={`Go to ${luxuryDestinations[index].name}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
            Insider <span className="text-luxury-gold">Access.</span>
            <br />
            Unforgettable <span className="text-luxury-gold">Savings.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-luxury-cream/80 mb-8"
          >
            Experience Marriott, IHG, and Hilton properties worldwide
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-luxury rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-2">Check In</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-2">Check Out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-2">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num} className="bg-luxury-navy">
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Link href={`/search?city=${encodeURIComponent(destination)}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-8 py-4 bg-luxury-gold text-luxury-navy rounded-lg font-semibold text-lg hover:bg-luxury-gold/90 transition-all shadow-lg shadow-luxury-gold/30"
              >
                Search Exclusive Offers
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Partnership Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-luxury-cream/60 text-sm mb-4">Trusted Partners</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["Marriott", "IHG", "Hilton"].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-luxury-gold font-serif text-2xl font-semibold"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

