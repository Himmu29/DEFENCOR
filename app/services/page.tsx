"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, Briefcase, Search, Ticket, 
  Flame, Dog, Users, ArrowRight 
} from "lucide-react";
import { MouseEventHandler, useRef } from "react";

const services = [
  { id: "manned-guarding", title: "Manned Guarding", icon: ShieldCheck, desc: "Highly trained personnel for robust physical security and access control at your facilities." },
  { id: "consultancy", title: "Consultancy", icon: Briefcase, desc: "Strategic security planning, executive protection advice, and comprehensive policy development." },
  { id: "risk-assessment", title: "Risk Assessment", icon: Search, desc: "In-depth vulnerability analysis, threat mitigation, and tailored security audits." },
  { id: "event-security", title: "Event Security", icon: Ticket, desc: "Crowd control, access management, and VIP protection for high-profile gatherings." },
  { id: "fire-audit", title: "Fire Audit", icon: Flame, desc: "Rigorous compliance checks, hazard identification, and emergency response planning." },
  { id: "dog-squad", title: "Dog Squad", icon: Dog, desc: "Highly trained K9 units specialized in explosive detection, patrol, and deterrence." },
  { id: "outsourcing", title: "Outsourcing", icon: Users, desc: "Integrated facility management, background checks, and security workforce solutions." },
];

// --- Sub-Component: Spotlight Card ---
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <Link href={`/services/${service.id}`} className="block h-full">
        <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-accent/50">
          
          {/* Mouse Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.1), transparent 40%)`
              ),
            }}
          />

          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary border border-white/5 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary">
              <service.icon size={28} />
            </div>

            <h3 className="mb-3 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">
              {service.title}
            </h3>

            <p className="mb-8 flex-grow text-[15px] leading-relaxed text-gray-400 group-hover:text-gray-300">
              {service.desc}
            </p>

            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent/70 transition-all group-hover:gap-4 group-hover:text-accent">
              Explore Detail <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] pt-40 pb-24">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden blur-[120px] opacity-20">
        <div className="h-[400px] w-[800px] bg-accent rounded-full" />
      </div>
      
      {/* Subtle Grain Overlay (CSS required in globals.css for best look) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container relative z-10 mx-auto px-4 md:px-12">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20"
            >
              Our Expertise
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black text-white md:text-7xl lg:leading-[1.1]"
            >
              Security Without <br />
              <span className="text-gray-500">Compromise.</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xs text-lg text-gray-400 border-l border-white/10 pl-6"
          >
            We deploy elite personnel and cutting-edge tech to create an invisible wall around your assets.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}