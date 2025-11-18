"use client";

import { motion } from "framer-motion";

export default function ValueProposition() {
  const stats = [
    { number: "5,000+", label: "Luxury Properties" },
    { number: "50%", label: "Max Savings" },
    { number: "24/7", label: "Concierge Support" },
    { number: "100%", label: "Price Guarantee" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Your Gateway to <span className="text-luxury-gold">Luxury Travel</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 max-w-3xl mx-auto">
            Experience the world's finest hotels for less. Our exclusive partnerships give you
            members-only access to unbeatable rates at premium properties worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-luxury-gold mb-2">
                {stat.number}
              </div>
              <div className="text-luxury-cream/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔒",
              title: "Secure Booking",
              description: "Your information is protected with bank-level encryption",
            },
            {
              icon: "✓",
              title: "Best Price Guarantee",
              description: "Find a lower rate? We'll match it and give you 10% off",
            },
            {
              icon: "💎",
              title: "24/7 Concierge",
              description: "Dedicated support team available around the clock",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-luxury rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-luxury-cream/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

