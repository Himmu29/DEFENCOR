"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? "py-3"
          : "py-6"
        }`}
    >
      {/* The Glass Container */}
      <div
        className={`container mx-auto px-4 md:px-6 transition-all duration-500 rounded-full ${isScrolled
            ? "max-w-5xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            : "max-w-full bg-transparent border-transparent"
          }`}
      >
        <div className="flex justify-between items-center h-14">

          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-3 group flex-1">
            <div className="relative p-1 rounded-xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/5">
              {/* We use a div wrapper to control the logo's "container" 
        giving it that high-tech 'app icon' look 
    */}
              <Image
                src="/images/logo.jpeg"
                alt="AegisSec Logo"
                width={60}
                height={60}
                className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                priority // Ensures the logo loads immediately
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
                DEFEN<span className="text-accent">COR</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-10 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="relative text-[13px] font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-[0.1em] group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA - Right Side */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-accent hover:text-primary transition-all active:scale-95 shadow-lg shadow-accent/10"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 overflow-hidden rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-lg font-medium text-gray-300 hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-accent text-primary text-center font-bold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}