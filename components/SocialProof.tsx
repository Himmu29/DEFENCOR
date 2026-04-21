"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const usps = [
  { title: "24/7 Rapid Response", desc: "Elite units deployed in under 10 minutes." },
  { title: "Military Standards", desc: "Personnel vetted via multi-tier background protocols." },
  { title: "Zero-Leak Guarantee", desc: "100% operational confidentiality for high-profile assets." },
];

export default function SocialProof() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Why Trust <br />
                <span className="text-gray-500">US?</span>
              </h2>

              <div className="space-y-8">
                {usps.map((usp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center border border-white/5 group-hover:border-accent/50 transition-colors shrink-0">
                      <CheckCircle2 size={18} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{usp.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{usp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/photo-3.jpeg" // 🔥 replace with your image path
                alt="Security"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl border border-white/10"
              />

              {/* Optional overlay glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}