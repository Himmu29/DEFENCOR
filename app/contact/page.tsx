"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Headphones, Navigation } from "lucide-react";

// Sub-component for Tactical Map to keep code DRY
const TacticalMap = ({ title, src, delay }: { title: string; src: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="relative h-[280px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
  >
    {/* Dark Mode Map Filter Overlay */}
    <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-[#0A0A0A] rounded-[2.5rem]" />
    <iframe
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }}
      allowFullScreen={false}
      loading="lazy"
      title={title}
    />
    <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2">
      <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 w-fit">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-tighter text-white">{title}</span>
      </div>
    </div>
    <div className="absolute top-6 right-6 z-20">
       <div className="p-3 bg-accent/20 backdrop-blur-md rounded-full border border-white/10 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          <Navigation size={16} />
       </div>
    </div>
  </motion.div>
);

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "HQ & Branch",
      details: ["Plot No - J47A, Mohan Garden, Delhi, 110059, India"],
      color: "text-accent",
    },
    {
      icon: Phone,
      title: "Direct Lines",
      details: ["+91 97173 92293", "+91 92292 57441"],
      color: "text-blue-400",
    },
    {
      icon: Mail,
      title: "Secure Channels",
      details: ["Defencor2025@gmail.com"],
      color: "text-emerald-400",
    },
    {
      icon: Clock,
      title: "Operational Status",
      details: ["Admin: Mon-Fri (9-6)", "Tactical: 24/7/365"],
      color: "text-amber-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-40 pb-24 relative overflow-hidden text-white font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            <ShieldCheck size={16} /> Global Security Infrastructure
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none"
          >
            Tactical <br />
            <span className="text-gray-500">Contact Nodes.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl font-light"
          >
            Our operational presence is strategically distributed. Reach out through our secure message portal or visit our localized headquarters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tactical Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Headphones className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Secure Message</h2>
                <p className="text-sm text-gray-500 font-mono tracking-tighter uppercase opacity-60">End-to-End Encrypted</p>
              </div>
            </div>
            <ContactForm />
          </motion.div>

          {/* Right Column: Information Nodes & Maps */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactDetails.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-secondary/30 border border-white/5 hover:border-white/20 transition-all group"
                >
                  <item.icon size={20} className={`${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">{item.title}</h3>
                  {item.details.map((line, i) => (
                    <p key={i} className="text-white font-semibold text-[14px] leading-tight mb-1">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Dual Maps Stack */}
            <div className="flex flex-col gap-6">
              <TacticalMap 
                title="Main HQ: New Delhi" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.2849301277165!2d77.02726269357909!3d28.625491999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05529418d305%3A0x119b3434b634900f!2sDefencor%20Services%20Private%20Limited!5e0!3m2!1sen!2sus!4v1776758077299!5m2!1sen!2sus" 
                delay={0.7} 
              />
              <TacticalMap 
                title="Regional Branch: Bihar" 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3593.668925045889!2d86.55026307539994!3d25.748459977360252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDQ0JzU0LjUiTiA4NsKwMzMnMTAuMiJF!5e0!3m2!1sen!2sin!4v1776758345843!5m2!1sen!2sin" 
                delay={0.8} 
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}