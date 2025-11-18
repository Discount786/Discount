"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Hotel {
  name: string;
  location: string;
  priceGBP: number;
  rating: number;
  image: string;
  amenities: string[];
  pointsAvailable: boolean;
}

interface HotelBrandSectionProps {
  brand: string;
  hotels: Hotel[];
  brandColor: string;
  delay: number;
}

export default function HotelBrandSection({
  brand,
  hotels,
  brandColor,
  delay,
}: HotelBrandSectionProps) {
  // Filter to only show hotels available with points
  const pointsHotels = hotels.filter((hotel) => hotel.pointsAvailable);

  if (pointsHotels.length === 0) {
    return null; // Don't show section if no points hotels available
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
          {brand} <span className="text-luxury-gold">Hotels</span>
        </h2>
        <Link
          href={`https://www.${brand.toLowerCase()}.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-luxury-gold hover:text-luxury-gold/80 transition-colors text-sm font-medium"
        >
          View All on {brand} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pointsHotels.map((hotel, index) => (
          <motion.div
            key={hotel.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-luxury rounded-2xl overflow-hidden cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-1">
                {[...Array(hotel.rating)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-lg">★</span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-white mb-2">{hotel.name}</h3>
              <p className="text-luxury-cream/70 text-sm mb-4">{hotel.location}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.slice(0, 3).map((amenity) => (
                  <span
                    key={amenity}
                    className="px-2 py-1 bg-white/10 text-luxury-cream/80 rounded text-xs"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-xl font-serif text-luxury-cream/50 line-through">
                      £{hotel.priceGBP}
                    </span>
                    <span className="text-2xl font-serif font-bold text-luxury-gold">
                      £{Math.round(hotel.priceGBP * 0.5)}
                    </span>
                    <span className="text-sm font-semibold text-green-400">
                      Save 50%
                    </span>
                  </div>
                  <p className="text-luxury-cream/60 text-xs mt-1">per night (from {brand} website)</p>
                </div>
                <Link
                  href={`/book?hotel=${encodeURIComponent(hotel.name)}&location=${encodeURIComponent(hotel.location)}`}
                  className="px-4 py-2 bg-luxury-gold text-luxury-navy rounded-lg hover:bg-luxury-gold/90 transition-all font-semibold text-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

