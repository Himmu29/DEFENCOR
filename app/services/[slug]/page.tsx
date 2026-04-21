"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, ArrowRight, CheckCircle2, 
  Phone, Globe, Zap, Users, Lock 
} from "lucide-react";
import { useParams } from "next/navigation";

// Mock database (usually you'd fetch this or keep it in a config file)
const serviceDetails = {
  "manned-guarding": {
    title: "Manned Guarding",
    subtitle: "High quality and trusted guarding services to meet every business need.",
    description: "Our Manned Guarding services provide more than just a presence; we provide a proactive shield. We make a difference in our service deliveries through strictly vetted personnel.",
    features: ["Vetted Security Personnel", "Access Control & Monitoring", "24/7 Site Protection", "Incident Reporting"],
    stats: { clients: "500+", success: "99.9%", personnel: "1,200+" },
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2000"
  },
  "consultancy": {
    title: "Security Consultancy",
    subtitle: "Comprehensive security plans and intuitive design for a safe environment.",
    description: "Our intuitive approach provides unsurpassed designs and easily practicable procedures. We create safe environments for your business through strategic planning.",
    features: ["Comprehensive Security Plans", "Practical Safety Procedures", "Strategic Security Design", "Tailored Business Solutions"],
    stats: { clients: "150+", success: "100%", personnel: "40+" },
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2000"
  },
  "risk-assessment": {
    title: "Risk Assessment",
    subtitle: "Systematic identification and evaluation of risk at your premises.",
    description: "We determine appropriate ways to eliminate or control threats. Our process involves a meticulous estimation of risk levels to safeguard your infrastructure.",
    features: ["Systematic Risk Identification", "Vulnerability Evaluation", "Risk Elimination Strategies", "Operational Audits"],
    stats: { clients: "300+", success: "99.8%", personnel: "60+" },
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000"
  },
  "event-security": {
    title: "Event & Stadium Security",
    subtitle: "World-class customer service tailored for high-capacity venues.",
    description: "Our event service is designed upon a philosophy of excellence. We manage crowds, access, and VIP safety to ensure your event runs without interruption.",
    features: ["Crowd Management", "Stadium Access Control", "VIP Protection", "Customer Service Excellence"],
    stats: { clients: "400+", success: "100%", personnel: "2,000+" },
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2000"
  },
  "fire-audit": {
    title: "Firemen & Fire Audit",
    subtitle: "Extensively trained firefighters and accidental fire control solutions.",
    description: "We provide comprehensive solutions to avoid or control accidental fires. Our fire audit identifies hazards before they become emergencies.",
    features: ["Trained Firefighters", "Comprehensive Fire Audits", "Hazard Identification", "Emergency Life Saving"],
    stats: { clients: "250+", success: "99.9%", personnel: "100+" },
    image: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=2000"
  },
  "dog-squad": {
    title: "Dog Squad Services",
    subtitle: "Well-trained watchdogs and sniffer dogs for all requirements.",
    description: "Our K9 units are specialized in detection and deterrence. We provide both watchdogs for patrol and sniffer dogs for specialized security needs.",
    features: ["Trained Sniffer Dogs", "Patrol Watchdogs", "Detection Services", "K9 Handling Expertise"],
    stats: { clients: "180+", success: "99.7%", personnel: "80+" },
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2000"
  },
  "outsourcing": {
    title: "Outsourcing Solutions",
    subtitle: "Managing every aspect of your security and workforce requirements.",
    description: "We provide integrated outsourcing solutions that cover every aspect of your business security, allowing you to focus on your core operations.",
    features: ["Workforce Management", "Integrated Security Logistics", "Resource Outsourcing", "Operational Support"],
    stats: { clients: "120+", success: "99.5%", personnel: "300+" },
    image: "https://images.unsplash.com/photo-1521791136366-398517526fed?q=80&w=2000"
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = serviceDetails[slug as keyof typeof serviceDetails] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    subtitle: "Professional security solutions tailored to your unique risk profile.",
    description: "DEFENCOR deploys state-of-the-art security architectures designed to mitigate modern threats. From physical assets to personnel safety, we ensure your world remains secure.",
    features: ["Customized Risk Mapping", "Rapid Response Units", "Elite Operatives", "24/7 Command Center"],
    stats: { clients: "200+", success: "100%", personnel: "450+" },
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2000"
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] w-full flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Modern Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Service Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">
              {service.title.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                {service.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      {/* <div className="container mx-auto px-4 md:px-12 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-secondary/50 backdrop-blur-xl border border-white/10 rounded-3xl">
          {[
            { label: "Active Deployments", val: service.stats.clients, icon: Globe },
            { label: "Success Rate", val: service.stats.success, icon: Zap },
            { label: "Trained Personnel", val: service.stats.personnel, icon: Users },
            { label: "Global Standards", val: "ISO 9001", icon: Lock },
          ].map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-accent">
                <s.icon size={16} />
                <span className="text-2xl font-black text-white tracking-tight">{s.val}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{s.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* --- CONTENT SECTION --- */}
      <main className="container mx-auto px-4 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Info */}
          <div className="lg:col-span-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-8">Executive Summary</h2>
            <p className="text-2xl text-gray-300 leading-snug mb-16 font-medium italic border-l-4 border-accent pl-8">
              "{service.description}"
            </p>

            <h3 className="text-3xl font-bold mb-10 tracking-tight">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/30 transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-200 font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Premium Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 group">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-accent/50 to-transparent opacity-20 blur-xl transition duration-500 group-hover:opacity-40" />
              <div className="relative rounded-[2rem] bg-[#0A0A0A] border border-white/10 p-10 overflow-hidden">
                <Shield className="w-12 h-12 text-accent mb-8" />
                <h3 className="text-3xl font-black mb-4 leading-tight">Ready for Deployment?</h3>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  Our strategic advisors are available 24/7 to architect your custom security solution.
                </p>
                
                <Link 
                  href="/contact" 
                  className="group/btn relative w-full flex items-center justify-center gap-3 py-5 bg-white text-black font-black rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10">CONSULT AN AGENT</span>
                  <ArrowRight size={20} className="relative z-10 transition-transform group-hover/btn:translate-x-2" />
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Link>

                <div className="mt-10 flex items-center gap-4 text-gray-500">
                  <div className="p-3 rounded-full bg-white/5">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-tighter">Emergency Line</p>
                    <p className="text-white font-mono text-lg">92292 57441</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}