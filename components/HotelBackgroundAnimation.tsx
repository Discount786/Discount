"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function HotelBackgroundAnimation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % luxuryDestinations.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/70 via-luxury-navy/60 to-luxury-navy/70" />
      </div>
    </div>
  );
}

