"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-luxury-navy border-t border-luxury-gold/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-luxury-gold mb-4">Discount DR</h3>
            <p className="text-luxury-cream/70 text-sm">
              Your gateway to luxury travel, redefined. Exclusive savings on the world's finest hotels.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/#hotels" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-luxury-cream/70 text-sm mb-4">
              Get exclusive deals delivered to your inbox
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold text-sm"
              />
              <button className="px-4 py-2 bg-luxury-gold text-luxury-navy rounded-lg hover:bg-luxury-gold/90 transition-all font-semibold text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-luxury-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-luxury-cream/60 text-sm">
            © 2024 Discount DR. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-luxury-cream/60 text-sm">🔒 Secure Booking</span>
            <span className="text-luxury-cream/60 text-sm">✓ Best Price Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

