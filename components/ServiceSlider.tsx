"use client";

import { useState, useRef, MouseEventHandler } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

// --- Spotlight Card Component ---
const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove: MouseEventHandler = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="group relative h-[480px] w-[320px] md:w-[400px] flex-shrink-0"
    >
      <Link href={`/services/${service.id}`} className="block h-full">
        <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-10 transition-all duration-300 hover:border-accent/50">
          
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.1), transparent 40%)`
              ),
            }}
          />

          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary border border-white/5 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary">
              <service.icon size={32} />
            </div>

            <h3 className="mb-4 text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">
              {service.title}
            </h3>

            <p className="mb-8 flex-grow text-lg leading-relaxed text-gray-400 group-hover:text-gray-300">
              {service.desc}
            </p>

            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent/70 transition-all group-hover:gap-4 group-hover:text-accent">
              View Service <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ServiceSlider() {
  const [index, setIndex] = useState(0);
  const cardWidth = 432; // Card width (400) + gap (32)

  const next = () => setIndex((prev) => (prev >= services.length - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? services.length - 1 : prev - 1));

  return (
    <section className="relative bg-[#050505] py-32 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-accent border border-accent/20">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              World-Class <br />
              <span className="text-gray-500">Protection.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Precision-engineered security solutions for a complex world. Swipe to explore our core operations.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="group h-14 w-14 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="group h-14 w-14 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="relative w-full cursor-grab active:cursor-grabbing">
        <motion.div 
          animate={{ x: `calc(0px - ${index * cardWidth}px)` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="flex gap-8 px-4 md:px-12"
          drag="x"
          dragConstraints={{ left: -((services.length - 1) * cardWidth), right: 0 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="container mx-auto px-4 md:px-12 mt-12">
        <div className="flex gap-2">
          {services.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? "w-12 bg-accent" : "w-4 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}