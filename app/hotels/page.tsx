"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HotelsPage() {
  return (
    <div className="min-h-screen pt-20 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Hotels in <span className="text-luxury-gold">Your Destination</span>
          </h1>
          <p className="text-luxury-cream/70 text-lg">
            Search for luxury hotels in your preferred destination
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-luxury rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <p className="text-luxury-cream/80 text-lg mb-6">
                Enter your destination to explore available luxury hotels
              </p>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-luxury-gold text-luxury-navy rounded-lg hover:bg-luxury-gold/90 transition-all font-semibold text-lg shadow-lg shadow-luxury-gold/30"
                >
                  Search Hotels
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

