"use client";

import { motion } from "framer-motion";
import HotelBrandSection from "@/components/HotelBrandSection";

export default function DestinationsPage() {
  // Mock hotel data - All hotels available with points (prices in GBP from original websites)
  // Showing hotels from multiple popular destinations
  const marriottHotels = [
    {
      name: "The Ritz-Carlton",
      location: "Paris",
      priceGBP: 350,
      rating: 5,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
      amenities: ["Spa", "Pool", "Fine Dining"],
      pointsAvailable: true,
    },
    {
      name: "JW Marriott",
      location: "Dubai",
      priceGBP: 280,
      rating: 5,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800",
      amenities: ["Fitness Center", "Business Center", "Restaurant"],
      pointsAvailable: true,
    },
    {
      name: "St. Regis",
      location: "New York",
      priceGBP: 420,
      rating: 5,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
      amenities: ["Butler Service", "Spa", "Fine Dining"],
      pointsAvailable: true,
    },
  ];

  const ihgHotels = [
    {
      name: "InterContinental",
      location: "London",
      priceGBP: 320,
      rating: 5,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800",
      amenities: ["Spa", "Pool", "Club Lounge"],
      pointsAvailable: true,
    },
    {
      name: "Kimpton",
      location: "Tokyo",
      priceGBP: 240,
      rating: 4,
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800",
      amenities: ["Pet Friendly", "Rooftop Bar", "Fitness Center"],
      pointsAvailable: true,
    },
    {
      name: "Regent",
      location: "Bali",
      priceGBP: 380,
      rating: 5,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
      amenities: ["Spa", "Fine Dining", "Concierge"],
      pointsAvailable: true,
    },
  ];

  const hiltonHotels = [
    {
      name: "Waldorf Astoria",
      location: "Paris",
      priceGBP: 400,
      rating: 5,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
      amenities: ["Spa", "Pool", "Fine Dining"],
      pointsAvailable: true,
    },
    {
      name: "Conrad",
      location: "Dubai",
      priceGBP: 290,
      rating: 5,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
      amenities: ["Fitness Center", "Business Center", "Restaurant"],
      pointsAvailable: true,
    },
    {
      name: "LXR",
      location: "London",
      priceGBP: 360,
      rating: 5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      amenities: ["Spa", "Pool", "Club Lounge"],
      pointsAvailable: true,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Hotels in <span className="text-luxury-gold">Your Destination</span>
          </h1>
          <p className="text-luxury-cream/70 text-lg">
            Explore luxury hotels with exclusive 50% savings
          </p>
        </motion.div>

        {/* Marriott Section */}
        <HotelBrandSection
          brand="Marriott"
          hotels={marriottHotels}
          brandColor="from-blue-600 to-blue-800"
          delay={0}
        />

        {/* IHG Section */}
        <HotelBrandSection
          brand="IHG"
          hotels={ihgHotels}
          brandColor="from-red-600 to-red-800"
          delay={0.2}
        />

        {/* Hilton Section */}
        <HotelBrandSection
          brand="Hilton"
          hotels={hiltonHotels}
          brandColor="from-blue-500 to-blue-700"
          delay={0.4}
        />
      </div>
    </div>
  );
}

