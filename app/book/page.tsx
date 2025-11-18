"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import HotelBackgroundAnimation from "@/components/HotelBackgroundAnimation";

function BookPageContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    customerName: "",
    hotel: searchParams.get("hotel") || "",
    location: searchParams.get("location") || "",
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    email: "",
    phoneNumber: "",
    referralCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("wp8f064FMw_4LkLcI");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Send email using EmailJS
      const templateParams = {
        customer_name: formData.customerName,
        hotel: formData.hotel,
        location: formData.location,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        email: formData.email,
        phone_number: formData.phoneNumber,
        referral_code: formData.referralCode,
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS (already initialized in useEffect)
      const result = await emailjs.send(
        "service_aq7blha", // Service ID
        "template_ti70c6m", // Your template ID
        templateParams
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData({
        customerName: "",
        hotel: "",
        location: "",
        checkIn: "",
        checkOut: "",
        email: "",
        phoneNumber: "",
        referralCode: "",
      });
    } catch (error: any) {
      console.error("Error submitting booking:", error);
      console.error("Error details:", {
        text: error?.text,
        message: error?.message,
        status: error?.status,
        statusText: error?.statusText,
        fullError: error,
      });
      
      // Extract error message - EmailJS errors can have different structures
      let errorMsg = "Unknown error occurred";
      if (error?.text) {
        errorMsg = error.text;
      } else if (error?.message) {
        errorMsg = error.message;
      } else if (error?.statusText) {
        errorMsg = error.statusText;
      } else if (typeof error === "string") {
        errorMsg = error;
      } else if (error?.response?.text) {
        errorMsg = error.response.text;
      } else if (error?.response?.data?.message) {
        errorMsg = error.response.data.message;
      }
      
      // Check for common EmailJS errors
      if (errorMsg.includes("Service ID") || errorMsg.includes("service")) {
        errorMsg = "Service ID is missing or invalid. Please check your EmailJS configuration.";
      } else if (errorMsg.includes("Template") || errorMsg.includes("template")) {
        errorMsg = "Template ID is invalid. Please check your EmailJS template configuration.";
      } else if (errorMsg.includes("Public Key") || errorMsg.includes("public")) {
        errorMsg = "Public Key is invalid. Please check your EmailJS Public Key.";
      }
      
      setErrorMessage(errorMsg);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-luxury-navy py-12 relative overflow-hidden">
      <HotelBackgroundAnimation />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Complete Your <span className="text-luxury-gold">Booking</span>
          </h1>
          <p className="text-luxury-cream/70 text-lg">
            Fill in your details and we'll process your reservation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-luxury rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-luxury-cream mb-2">
                Customer Name <span className="text-luxury-gold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-cream mb-2">
                Hotel <span className="text-luxury-gold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.hotel}
                onChange={(e) => setFormData({ ...formData, hotel: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                placeholder="Hotel name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-cream mb-2">
                Location <span className="text-luxury-gold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                placeholder="City, Country"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-2">
                  Check In Date <span className="text-luxury-gold">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-2">
                  Check Out Date <span className="text-luxury-gold">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  min={formData.checkIn || new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-cream mb-2">
                Email Address <span className="text-luxury-gold">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-cream mb-2">
                Phone Number <span className="text-luxury-gold">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                placeholder="+44 7XXX XXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-cream mb-2">
                Referral Code
              </label>
              <input
                type="text"
                value={formData.referralCode}
                onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-white placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
                placeholder="Enter referral code (optional)"
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-luxury-gold/20 border border-luxury-gold rounded-lg"
              >
                <p className="text-luxury-gold font-semibold">
                  ✓ Booking request submitted successfully! We'll contact you shortly.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-lg"
              >
                <p className="text-red-400 font-semibold mb-2">
                  There was an error submitting your booking.
                </p>
                {errorMessage && (
                  <p className="text-red-300 text-sm mt-2">
                    Error: {errorMessage}
                  </p>
                )}
                <p className="text-red-300 text-sm mt-2">
                  Please check the browser console (F12) for more details or contact us directly.
                </p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full px-8 py-4 bg-luxury-gold text-luxury-navy rounded-lg font-semibold text-lg hover:bg-luxury-gold/90 transition-all shadow-lg shadow-luxury-gold/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 bg-luxury-navy flex items-center justify-center">
        <div className="text-luxury-cream text-lg">Loading...</div>
      </div>
    }>
      <BookPageContent />
    </Suspense>
  );
}

