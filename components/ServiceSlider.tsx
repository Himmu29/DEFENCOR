"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck, Briefcase, Search, Ticket,
  Flame, Dog, Users, ChevronLeft, ChevronRight, ArrowRight
} from "lucide-react";

const services = [
  { id: "manned-guarding", title: "Manned Guarding", icon: ShieldCheck, desc: "Highly trained personnel for robust physical security." },
  { id: "consultancy", title: "Consultancy", icon: Briefcase, desc: "Strategic security planning and executive protection advice." },
  { id: "risk-assessment", title: "Risk Assessment", icon: Search, desc: "Comprehensive vulnerability analysis and threat mitigation." },
  { id: "event-security", title: "Event Security", icon: Ticket, desc: "Crowd control, access management, and VIP protection." },
  { id: "fire-audit", title: "Fire Audit", icon: Flame, desc: "Compliance checks, hazard identification, and safety planning." },
  { id: "dog-squad", title: "Dog Squad", icon: Dog, desc: "K9 units specialized in detection, patrol, and deterrence." },
  { id: "outsourcing", title: "Outsourcing", icon: Users, desc: "Integrated facility management and security workforce solutions." },
];

// Clone slides for infinite illusion
const extendedServices = [
  services[services.length - 1], // last clone at start
  ...services,
  services[0], // first clone at end
];

// --- CARD ---
const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <div className="h-[480px] w-[320px] md:w-[400px] flex-shrink-0">
      <Link href={`/services/${service.id}`} className="block h-full">
        <div className="h-full rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-10 hover:border-accent/50 transition-all">
          
          <div className="flex h-full flex-col">
            <div className="mb-8 h-16 w-16 flex items-center justify-center rounded-2xl bg-secondary text-accent">
              <service.icon size={32} />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white">
              {service.title}
            </h3>

            <p className="mb-8 flex-grow text-gray-400">
              {service.desc}
            </p>

            <div className="flex items-center gap-2 text-sm font-bold text-accent">
              View Service <ArrowRight size={18} />
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default function ServiceSlider() {
  const cardWidth = 432;

  const [index, setIndex] = useState(1); // start from real first
  const [isTransitioning, setIsTransitioning] = useState(true);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  // Handle instant reset (core infinite logic)
  useEffect(() => {
    if (index === extendedServices.length - 1) {
      // reached fake last → jump to real first
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 400);
    }

    if (index === 0) {
      // reached fake first → jump to real last
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(services.length);
      }, 400);
    }
  }, [index]);

  // Re-enable animation after jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  return (
    <section className="relative bg-[#050505] py-32 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-12 mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white">
          World-Class <br />
          <span className="text-gray-500">Protection.</span>
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative w-full">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 flex items-center justify-center rounded-full border border-white/10 bg-black/40 text-white hover:bg-white hover:text-black transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 flex items-center justify-center rounded-full border border-white/10 bg-black/40 text-white hover:bg-white hover:text-black transition"
        >
          <ChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * cardWidth}px` }}
            transition={isTransitioning ? { duration: 0.4 } : { duration: 0 }}
            className="flex gap-8 px-4 md:px-12"
          >
            {extendedServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* INDICATOR */}
      <div className="container mx-auto px-4 md:px-12 mt-12 flex gap-2">
        {services.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === index - 1 ? "w-12 bg-accent" : "w-4 bg-white/10"
            }`}
          />
        ))}
      </div>

    </section>
  );
}