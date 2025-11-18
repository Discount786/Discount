"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import HotelBrandSection from "@/components/HotelBrandSection";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = searchParams.get("guests") || "2";

  // Get location-specific image based on city
  const getLocationImage = (cityName: string) => {
    const cityLower = cityName.toLowerCase();
    const imageMap: { [key: string]: string } = {
      paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
      dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
      tokyo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800",
      "new york": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800",
      bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
      london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800",
    };
    return imageMap[cityLower] || "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800";
  };

  const locationImage = getLocationImage(city);

  // Mock hotel data - Only hotels available with points (prices in GBP from original websites)
  // All images are unique luxury hotel images
  const marriottHotels = [
    {
      name: "The Ritz-Carlton",
      location: city,
      priceGBP: 350, // Value in GBP from Marriott website
      rating: 5,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
      amenities: ["Spa", "Pool", "Fine Dining"],
      pointsAvailable: true,
    },
    {
      name: "JW Marriott",
      location: city,
      priceGBP: 280,
      rating: 5,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800",
      amenities: ["Fitness Center", "Business Center", "Restaurant"],
      pointsAvailable: true,
    },
    {
      name: "St. Regis",
      location: city,
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
      location: city,
      priceGBP: 320,
      rating: 5,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800",
      amenities: ["Spa", "Pool", "Club Lounge"],
      pointsAvailable: true,
    },
    {
      name: "Kimpton",
      location: city,
      priceGBP: 240,
      rating: 4,
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800",
      amenities: ["Pet Friendly", "Rooftop Bar", "Fitness Center"],
      pointsAvailable: true,
    },
    {
      name: "Regent",
      location: city,
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
      location: city,
      priceGBP: 400,
      rating: 5,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
      amenities: ["Spa", "Pool", "Fine Dining"],
      pointsAvailable: true,
    },
    {
      name: "Conrad",
      location: city,
      priceGBP: 290,
      rating: 5,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
      amenities: ["Fitness Center", "Business Center", "Restaurant"],
      pointsAvailable: true,
    },
    {
      name: "LXR",
      location: city,
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
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Hotels in <span className="text-luxury-gold">{city || "Your Destination"}</span>
          </h1>
          {checkIn && checkOut && (
            <p className="text-luxury-cream/70">
              {new Date(checkIn).toLocaleDateString()} - {new Date(checkOut).toLocaleDateString()} • {guests} {guests === "1" ? "Guest" : "Guests"}
            </p>
          )}
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

