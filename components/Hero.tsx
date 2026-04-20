"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const slides = [
    { src: "/images/hero_1.png", alt: "Tactical Security Operations" },
    { src: "/images/hero_2.png", alt: "High-Tech Command Center" },
    { src: "/images/hero_3.png", alt: "Executive Protection Detail" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Background Carousel with Ken Burns Effect */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] h-full overflow-hidden" key={index}>
              <motion.div 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                className="relative h-full w-full"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover opacity-30 brightness-75"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md"
        >
          <Activity size={14} className="text-accent animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            DEFENCOR
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] max-w-5xl"
        >
          Elite Protection. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">
            Unwavering Reliability.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Deploying world-class security architectures tailored for high-risk corporate and residential environments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/contact">
            <button className="group relative px-10 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 flex items-center gap-2">
                GET A QUOTE <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>

          <Link href="/services">
            <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-black rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white transition-all active:scale-95">
              EXPLORE SERVICES
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Authority Ticker */}
      <div className="absolute bottom-10 left-0 w-full z-20 overflow-hidden py-4 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center opacity-30"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Shield size={16} className="text-accent" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-white">
                Vigilance • Integrity • Protection • Excellence
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}