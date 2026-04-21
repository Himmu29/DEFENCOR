"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Shield, Target, Award, Eye } from "lucide-react";
import { useRef } from "react";

const stats = [
  { label: "Elite Personnel", value: "1,200+", icon: Shield },
  { label: "Global Reach", value: "15+ Countries", icon: GlobeAltIcon }, // Using simplified icon logic below
  { label: "Success Rate", value: "99.9%", icon: Award },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-accent selection:text-primary">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 pt-40 pb-24 relative z-10">
        
        {/* SECTION 1: HERO & TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              The DEFENCOR Legacy
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
              Vigilance In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Every Detail.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl font-light">
              Founded on the pillars of integrity and tactical excellence, DEFENCOR isn't just a security provider—we are a strategic partner in your safety. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Quality Precision",
                "24/7 Reliable Security",
                "Practical Security",
                "Trusted Operatives"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center border border-white/5 group-hover:border-accent/50 transition-colors">
                    <CheckCircle2 size={16} className="text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CEO Quote */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-8 rounded-3xl bg-white/[0.02] border-l-2 border-accent backdrop-blur-sm"
            >
              <p className="text-gray-300 italic text-lg font-medium leading-relaxed">
                "We don't react to threats; we engineer environments where threats cannot exist."
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-accent">
                — Managing Director, DEFENCOR
              </p>
            </motion.div>
          </motion.div>

          {/* SECTION 2: PARALLAX MASONRY */}
          <div className="relative h-[600px] w-full">
            <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-[55%] h-[70%] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/photo-1.jpeg" alt="Tactical" fill className="object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-20">
              <Image src="/images/photo-2.jpeg" alt="Consultancy" fill className="object-cover transition-transform duration-700 hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent rounded-full blur-[80px] opacity-20 pointer-events-none" />
          </div>
        </div>

        {/* SECTION 3: CORE VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Our Mission", icon: Target, desc: "To provide an impenetrable shield through advanced technology and human expertise." },
            { title: "Our Vision", icon: Eye, desc: "To redefine global security standards by integrating AI-driven threat detection." },
            { title: "Our Ethics", icon: Shield, desc: "Uncompromising integrity and total confidentiality in every deployment." }
          ].map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-secondary/30 border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="h-14 w-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <v.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

// Utility icon components if not imported
function GlobeAltIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}