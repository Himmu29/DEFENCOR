"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, ExternalLink } from "lucide-react";

export default function ClientSection() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-6"
          >
            <ShieldCheck size={14} /> Strategic Partnership
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
          >
            Trusted by the <br />
            <span className="text-gray-500">Industry Best.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-xl font-light text-lg"
          >
            We provide exclusive, end-to-end security operations for our flagship partners, ensuring total asset protection and operational integrity.
          </motion.p>
        </div>

        {/* Featured Client Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[3rem] bg-[#0A0A0A] border border-white/10 p-10 md:p-16 overflow-hidden hover:border-accent/30 transition-all duration-700 shadow-2xl"
          >
            {/* Spotlight Effect */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700" />

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              
              {/* Logo Wrapper */}
              <div className="shrink-0 relative">
                <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-[2.5rem] bg-black border border-white/5 flex items-center justify-center p-10 shadow-inner group-hover:scale-105 transition-transform duration-700">
                  <Image 
                    src="/images/client-1.jpeg" // PUT YOUR CLIENT LOGO HERE
                    alt="Strategic Client Logo" 
                    width={180} 
                    height={180} 
                    className="object-contain brightness-100 group-hover:brightness-110 transition-all"
                  />
                </div>
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border border-accent/10 rounded-[3rem] animate-[spin_20s_linear_infinite] pointer-events-none" />
              </div>

              {/* Client Description */}
              <div className="flex-1 text-center lg:text-left">
                <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Official Housekeeping, Sanitation & Security Partner</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Bihar Education Department
                </h3>
                <p className="text-gray-400 text-xl font-light leading-relaxed mb-8">
                  Providing comprehensive security services to one of the most critical infrastructure projects in the state. Our team ensures seamless protection for exam centers and administrative facilities.
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    24/7 Monitoring
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Armed Guarding
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Asset Protection
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}