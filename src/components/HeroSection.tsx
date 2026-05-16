"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import TextReveal from "./TextReveal";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax for the background image
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentY = useTransform(scrollY, [0, 500], [0, -30]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <Section className="bg-transparent relative h-screen" id="hero">
      <motion.div style={{ y: bgY, opacity, willChange: "transform" }} className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Luxury Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </motion.div>

      <motion.div 
        ref={containerRef} 
        style={{ y: contentY, willChange: "transform" }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex justify-center items-center gap-6"
        >
          <div className="w-12 h-[1px] bg-rose-gold/30" />
          <span className="text-rose-gold tracking-[0.4em] uppercase text-[10px] font-semibold">
            An Eternal Journey
          </span>
          <div className="w-12 h-[1px] bg-rose-gold/30" />
        </motion.div>

        <div className="relative inline-block mb-10">
          <h1 className="text-6xl md:text-9xl font-serif text-foreground tracking-tighter leading-[0.9] flex flex-col items-center">
            <TextReveal text="Happy" delay={0.2} className="justify-center" />
            <span className="text-gradient block my-2">Birthday</span>
            <TextReveal text="My Love" delay={0.8} className="justify-center" />
          </h1>
          
          {/* Static subtle glow instead of animated text-shadow */}
          <div className="absolute inset-0 -z-10 bg-rose-gold/10 blur-[80px] rounded-full scale-150" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="text-lg md:text-2xl font-cormorant text-foreground/60 max-w-2xl mx-auto mb-16 italic leading-relaxed"
        >
          "You are the poem I never knew how to write, and this life is the story I'm lucky enough to read with you."
        </motion.p>

        <Link href="/story">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="glass px-12 py-5 rounded-full text-rose-gold font-semibold tracking-[0.2em] uppercase text-xs border-rose-gold/20 hover:bg-rose-gold/5 transition-all duration-300"
          >
            Enter Our Story
          </motion.button>
        </Link>

        {/* Floating Decorative Elements - Reduced and simplified */}
        <div className="absolute top-[-10%] left-[-10%] w-32 h-32 rounded-full bg-lavender/5 blur-[40px] z-[-1]" />
        <div className="absolute top-[50%] right-[-5%] w-48 h-48 rounded-full bg-soft-pink/5 blur-[50px] z-[-1]" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold/30">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-rose-gold/30 to-transparent" />
      </motion.div>
    </Section>
  );
}


