"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function LogoDisplay({ brand }: { brand: { name: string; logo: string } }) {
  const getLogoSVG = () => {
    switch (brand.name) {
      case "Marriott":
        return (
          <svg width="200" height="64" viewBox="0 0 200 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="100" y="40" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#D4AF37" textAnchor="middle">
              MARRIOTT
            </text>
            <circle cx="30" cy="32" r="8" fill="#D4AF37"/>
            <circle cx="170" cy="32" r="8" fill="#D4AF37"/>
          </svg>
        );
      case "IHG":
        return (
          <svg width="200" height="64" viewBox="0 0 200 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="10" width="100" height="44" rx="4" fill="#D4AF37"/>
            <text x="100" y="42" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#0a1628" textAnchor="middle">
              IHG
            </text>
          </svg>
        );
      case "Hilton":
        return (
          <svg width="200" height="64" viewBox="0 0 200 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="100" y="40" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#D4AF37" textAnchor="middle">
              HILTON
            </text>
            <line x1="50" y1="20" x2="150" y2="20" stroke="#D4AF37" strokeWidth="2"/>
            <line x1="50" y1="44" x2="150" y2="44" stroke="#D4AF37" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-6 flex items-center justify-center h-16">
      {getLogoSVG()}
    </div>
  );
}

const brands = [
  {
    name: "Marriott",
    properties: ["St. Regis", "Ritz-Carlton", "JW Marriott", "The Luxury Collection"],
    color: "from-blue-600 to-blue-800",
    logo: "",
  },
  {
    name: "IHG",
    properties: ["InterContinental", "Kimpton", "Regent", "Six Senses"],
    color: "from-red-600 to-red-800",
    logo: "",
  },
  {
    name: "Hilton",
    properties: ["Waldorf Astoria", "Conrad", "LXR", "Canopy"],
    color: "from-blue-500 to-blue-700",
    logo: "",
  },
];

export default function HotelBrandShowcase() {
  return (
    <section id="hotels" className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-charcoal scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Premium <span className="text-luxury-gold">Hotel Brands</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 max-w-3xl mx-auto">
            Access exclusive rates at the world's most prestigious hotel collections
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-luxury rounded-2xl p-8 border-2 border-luxury-gold/40 hover:border-luxury-gold/80 transition-all duration-300"
            >
              <LogoDisplay brand={brand} />
              <div className="space-y-3 mt-6">
                {brand.properties.map((property) => (
                  <div
                    key={property}
                    className="flex items-center gap-3 text-luxury-cream/80 hover:text-luxury-gold transition-colors"
                  >
                    <span className="text-luxury-gold">✦</span>
                    <span className="font-medium">{property}</span>
                  </div>
                ))}
              </div>
              <Link
                href={
                  brand.name === "Marriott"
                    ? "https://www.marriott.com"
                    : brand.name === "IHG"
                    ? "https://www.ihg.com"
                    : "https://www.hilton.com"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full px-6 py-3 border border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold/10 transition-all font-medium"
                >
                  Explore {brand.name} Properties
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

