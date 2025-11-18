"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const destinations = [
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
    price: 299,
    savings: 45,
    description: "City of Light",
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    price: 399,
    savings: 50,
    description: "Desert Luxury",
  },
  {
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094",
    price: 349,
    savings: 42,
    description: "Modern Elegance",
  },
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070",
    price: 379,
    savings: 48,
    description: "Urban Sophistication",
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070",
    price: 249,
    savings: 40,
    description: "Tropical Paradise",
  },
  {
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
    price: 329,
    savings: 44,
    description: "Royal Heritage",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Featured <span className="text-luxury-gold">Destinations</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 max-w-3xl mx-auto">
            Discover exclusive savings at the world's most sought-after destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-serif font-bold text-white">{destination.name}</h3>
                    <span className="px-3 py-1 bg-luxury-gold text-luxury-navy rounded-full text-sm font-semibold">
                      Save {destination.savings}%
                    </span>
                  </div>
                  <p className="text-luxury-cream/80 mb-3">{destination.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-bold text-luxury-gold">
                      ${destination.price}
                    </span>
                    <span className="text-luxury-cream/60 line-through">/night</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

