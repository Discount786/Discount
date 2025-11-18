"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import HotelBrandShowcase from "@/components/HotelBrandShowcase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ValueProposition />
      <HotelBrandShowcase />
      <Testimonials />
    </div>
  );
}

