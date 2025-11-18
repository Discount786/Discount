"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-luxury border-b border-luxury-gold/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-luxury-gold font-serif"
            >
              Discount DR
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/destinations"
              className="text-luxury-cream hover:text-luxury-gold transition-colors font-medium"
            >
              Destinations
            </Link>
            <Link
              href="/#hotels"
              className="text-luxury-cream hover:text-luxury-gold transition-colors font-medium"
            >
              Hotels
            </Link>
            <Link
              href="/about"
              className="text-luxury-cream hover:text-luxury-gold transition-colors font-medium"
            >
              About
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book"
                className="px-8 py-3 bg-luxury-gold text-luxury-navy rounded-lg hover:bg-luxury-gold/90 transition-all font-semibold shadow-lg shadow-luxury-gold/20"
              >
                BOOK NOW
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-luxury-cream hover:text-luxury-gold"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <Link
              href="/destinations"
              className="block text-luxury-cream hover:text-luxury-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="/#hotels"
              className="block text-luxury-cream hover:text-luxury-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hotels
            </Link>
            <Link
              href="/about"
              className="block text-luxury-cream hover:text-luxury-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-4">
              <Link
                href="/book"
                className="block px-6 py-3 bg-luxury-gold text-luxury-navy rounded-lg text-center font-semibold"
                onClick={() => setIsOpen(false)}
              >
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

