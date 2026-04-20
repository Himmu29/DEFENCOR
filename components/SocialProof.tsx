"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { CheckCircle2, Quote, ShieldCheck, Star } from "lucide-react";

const usps = [
  { title: "24/7 Rapid Response", desc: "Elite units deployed in under 10 minutes." },
  { title: "Military Standards", desc: "Personnel vetted via multi-tier background protocols." },
  // { title: "AI Integration", desc: "Predictive threat analysis using neural surveillance." },
  { title: "Zero-Leak Guarantee", desc: "100% operational confidentiality for high-profile assets." },
];

const testimonials = [
  {
    id: 1,
    quote: "AegisSec overhauled our corporate security protocol. Their presence alone deterred multiple threats. Absolute professionals.",
    author: "Sarah Jenkins",
    role: "CEO, TechNova Solutions",
  },
  {
    id: 2,
    quote: "The VIP protection detail was discreet yet incredibly effective. We felt completely safe throughout the entire global tour.",
    author: "Marcus Vance",
    role: "International Diplomat",
  },
  {
    id: 3,
    quote: "Their risk assessment team found vulnerabilities we never even considered. An essential partner for any enterprise.",
    author: "Elena Rodriguez",
    role: "Head of Operations, Global Logistics",
  },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: The "Value Proposition" Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <ShieldCheck size={14} /> The Aegis Standard
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Why Trust <br />
                <span className="text-gray-500">AegisSec?</span>
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
                      <h4 className="text-white font-bold text-lg leading-tight">{usp.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 font-light">{usp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: The "Testimonial Engine" */}
          <div className="lg:col-span-7">
            <motion.div
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="group relative h-[450px] rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 p-12 flex flex-col justify-center overflow-hidden"
            >
              {/* Interactive Spotlight Overlay */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useTransform(
                    [mouseX, mouseY],
                    ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.08), transparent 40%)`
                  ),
                }}
              />

              <Quote className="w-24 h-24 text-accent/5 absolute -top-4 -left-4 rotate-12" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>

                <div className="relative h-48">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <p className="text-2xl md:text-3xl text-gray-200 font-medium tracking-tight leading-snug italic mb-10">
                        "{testimonials[currentIndex].quote}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center font-bold text-primary">
                          {testimonials[currentIndex].author[0]}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg leading-none mb-1">
                            {testimonials[currentIndex].author}
                          </h4>
                          <p className="text-accent text-xs font-black uppercase tracking-widest">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress Indicators (Tactical Style) */}
              <div className="absolute bottom-12 right-12 flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      index === currentIndex ? "w-8 bg-accent" : "w-2 bg-white/10 hover:bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}