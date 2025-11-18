"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "Incredible savings on our Paris honeymoon! The St. Regis was absolutely stunning, and we saved over $2,000. Highly recommend!",
  },
  {
    name: "James Chen",
    location: "Singapore",
    rating: 5,
    text: "As a frequent traveler, the membership has been a game-changer. The exclusive rates at luxury properties are unbeatable.",
  },
  {
    name: "Emma Thompson",
    location: "London, UK",
    rating: 5,
    text: "The room upgrade at the Ritz-Carlton Dubai was incredible. The service and savings make this membership worth every penny.",
  },
];

export default function Testimonials() {
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
            What Our <span className="text-luxury-gold">Customers Say</span>
          </h2>
          <p className="text-xl text-luxury-cream/80 max-w-3xl mx-auto">
            Join thousands of satisfied luxury travelers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-luxury rounded-2xl p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-luxury-cream mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-luxury-cream/60">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

