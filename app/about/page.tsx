"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HotelBackgroundAnimation from "@/components/HotelBackgroundAnimation";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-luxury-navy relative overflow-hidden">
      <HotelBackgroundAnimation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy via-luxury-charcoal to-luxury-navy opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            About <span className="text-luxury-gold">Discount DR</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-luxury-cream/80 max-w-3xl mx-auto"
          >
            Your trusted partner in luxury travel, delivering exclusive savings on the world's finest hotels
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Our Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="glass-luxury rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Our <span className="text-luxury-gold">Story</span>
            </h2>
            <div className="space-y-6 text-luxury-cream/80 text-lg leading-relaxed">
              <p>
                Discount DR Services has been a trusted name in the luxury travel industry for over <span className="text-luxury-gold font-semibold">5 years</span>, 
                establishing ourselves as a credible and reliable partner in the majorly discounted hotels space.
              </p>
              <p>
                We specialize in providing exclusive access to premium hotel accommodations at significantly reduced rates through our strategic partnerships 
                with the world's most prestigious hotel brands, including Marriott, IHG, and Hilton.
              </p>
              <p>
                Over the years, we have successfully worked with <span className="text-luxury-gold font-semibold">hundreds of customers</span>, helping them 
                experience luxury travel at a fraction of the standard cost. Our commitment to excellence and customer satisfaction has made us a trusted 
                choice for travelers seeking premium accommodations without the premium price tag.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-luxury rounded-2xl p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl font-serif font-bold text-luxury-gold mb-4"
              >
                5+
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Years of Excellence</h3>
              <p className="text-luxury-cream/70">Trusted service in luxury travel</p>
            </div>
            <div className="glass-luxury rounded-2xl p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl font-serif font-bold text-luxury-gold mb-4"
              >
                100+
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Happy Customers</h3>
              <p className="text-luxury-cream/70">Satisfied travelers worldwide</p>
            </div>
            <div className="glass-luxury rounded-2xl p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-5xl font-serif font-bold text-luxury-gold mb-4"
              >
                50%
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Average Savings</h3>
              <p className="text-luxury-cream/70">Up to half price on luxury hotels</p>
            </div>
          </div>
        </motion.section>

        {/* What We Offer Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="glass-luxury rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              What We <span className="text-luxury-gold">Offer</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Exclusive Partnerships",
                  description: "Strategic relationships with Marriott, IHG, and Hilton give us access to exclusive rates and availability.",
                  icon: "🤝",
                },
                {
                  title: "Premium Properties",
                  description: "Access to the world's most prestigious hotel brands including St. Regis, Ritz-Carlton, Waldorf Astoria, and more.",
                  icon: "🏨",
                },
                {
                  title: "Significant Savings",
                  description: "Enjoy up to 50% off on luxury hotel bookings, making premium travel accessible to more travelers.",
                  icon: "💰",
                },
                {
                  title: "Personalized Service",
                  description: "Dedicated support to help you find the perfect accommodation that meets your needs and budget.",
                  icon: "✨",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-luxury-cream/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Partners Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our <span className="text-luxury-gold">Partners</span>
            </h2>
            <p className="text-luxury-cream/70 text-lg">
              We work exclusively with the world's most prestigious hotel brands
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Marriott", properties: "St. Regis, Ritz-Carlton, JW Marriott" },
              { name: "IHG", properties: "InterContinental, Kimpton, Regent" },
              { name: "Hilton", properties: "Waldorf Astoria, Conrad, LXR" },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-luxury rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-serif font-bold text-luxury-gold mb-4">{brand.name}</h3>
                <p className="text-luxury-cream/70">{brand.properties}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass-luxury rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Experience <span className="text-luxury-gold">Luxury Travel</span>?
            </h2>
            <p className="text-luxury-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have discovered the joy of luxury travel at half the price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#hotels"
                  className="px-8 py-4 bg-luxury-gold text-luxury-navy rounded-lg hover:bg-luxury-gold/90 transition-all font-semibold text-lg shadow-lg shadow-luxury-gold/30"
                >
                  Explore Hotels
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/book"
                  className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold/10 transition-all font-semibold text-lg"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

