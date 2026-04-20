"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Headphones } from "lucide-react";

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Global Headquarters",
      details: ["J47A Rama park road", "Mohan Garden, Uttam Nagar", "New Delhi - 110059"],
      color: "text-accent",
    },
    {
      icon: Phone,
      title: "Direct Lines",
      details: ["+91 97173 92293", "+91 99715 83144"],
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
    <div className="min-h-screen bg-[#050505] pt-40 pb-24 relative overflow-hidden text-white">
      {/* Background Decor: High-tech glow */}
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
            <ShieldCheck size={16} /> 24/7 Deployment Ready
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none"
          >
            Connect with our <br />
            <span className="text-gray-500">Security Architects.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl font-light"
          >
            Whether you require immediate executive protection or a long-term strategic security audit, our specialized team is standing by.
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
                <p className="text-sm text-gray-500">Encrypted communication channel</p>
              </div>
            </div>
            <ContactForm />
          </motion.div>

          {/* Right Column: Information Nodes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
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
                  <item.icon size={24} className={`${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">{item.title}</h3>
                  {item.details.map((line, i) => (
                    <p key={i} className="text-white font-medium text-[15px] leading-tight mb-1">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Cinematic Map Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="relative h-[320px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
            >
              {/* Dark Mode Map Filter */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-[#0A0A0A] rounded-[2.5rem]" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234!2d77.0423!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050000000000%3A0x0!2sJ47A%2C%20Rama%20Park%20Rd%2C%20Mohan%20Garden!5e0!3m2!1sen!2sin!4v1712345678901"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
                title="Office Location"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-tighter">HQ Confirmed</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}