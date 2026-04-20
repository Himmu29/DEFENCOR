"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Manned Guarding", href: "/services/manned-guarding" },
      { name: "Risk Assessment", href: "/services/risk-assessment" },
      { name: "Consultancy", href: "/services/consultancy" },
      { name: "Event Security", href: "/services/event-security" },
      { name: "Dog Squad", href: "/services/dog-squad" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/about#process" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 mt-auto overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative p-1 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="AegisSec Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-lg object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                DEFEN<span className="text-accent">COR</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Providing elite, military-grade protection for corporate, residential, and high-risk environments across the globe. Unwavering reliability in an uncertain world.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Specialized Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-accent transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Corporate</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-accent transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-sm text-gray-400 leading-snug">
                  J47A Rama park road, Mohan Garden, <br />
                  Uttam Nagar, New Delhi - 110059
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-accent shrink-0" />
                <div className="flex flex-col text-sm text-gray-400">
                  <span>+91 97173 92293</span>
                  <span>+91 99715 83144</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-sm text-gray-400">Defencor2025@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
          <p>© {currentYear} DEFENCOR. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}