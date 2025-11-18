"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  "Up to 50% off luxury hotel stays",
  "Complimentary room upgrades (when available)",
  "Late checkout privileges",
  "Welcome amenities at select properties",
  "Exclusive member-only rates",
  "Priority customer support",
  "Free cancellation on most bookings",
  "Earn points toward future stays",
];

export default function MembershipBenefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Membership <span className="text-luxury-gold">Benefits</span>
            </h2>
            <p className="text-xl text-luxury-cream/80 mb-8">
              Join thousands of luxury travelers enjoying exclusive perks and unbeatable savings
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-luxury-gold text-xl">✓</span>
                  <span className="text-luxury-cream">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/join"
                className="inline-block px-8 py-4 bg-luxury-gold text-luxury-navy rounded-lg font-semibold text-lg hover:bg-luxury-gold/90 transition-all shadow-lg shadow-luxury-gold/30"
              >
                Join Free Today
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-luxury rounded-2xl p-8"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">
              Savings Comparison
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-luxury-cream">Regular Rate</span>
                <span className="text-luxury-cream/60 line-through">$600/night</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-luxury-gold/20 rounded-lg border border-luxury-gold/30">
                <span className="text-luxury-gold font-semibold">Member Rate</span>
                <span className="text-luxury-gold font-bold text-xl">$300/night</span>
              </div>
              <div className="text-center pt-4">
                <span className="text-luxury-gold text-2xl font-bold">Save 50%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

