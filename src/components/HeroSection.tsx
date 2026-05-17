"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";

export default function HeroSection() {
  const { scrollY } = useScroll();
  
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentY = useTransform(scrollY, [0, 500], [0, -30]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const name = "PRIYANKA";
  const title = `Happy Birthday ${name}`;



  // Letter by letter animation variants
  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section className="bg-transparent relative h-screen overflow-hidden" id="hero">
      {/* Background Image with Soft Overlay */}
      <motion.div style={{ y: bgY, opacity, willChange: "transform" }} className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Cinematic Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>



      {/* Floating Particles (Rose Petals placeholder effect) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              top: -20, 
              left: `${Math.random() * 100}%`, 
              rotate: 0,
              opacity: 0 
            }}
            animate={{ 
              top: "110%", 
              left: `${(Math.random() * 100) + (Math.random() * 20 - 10)}%`,
              rotate: 360,
              opacity: [0, 0.4, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute w-4 h-4 bg-rose-gold/20 blur-[1px] rounded-full"
          />
        ))}
      </div>


      <motion.div 
        style={{ y: contentY, willChange: "transform" }}
        className="relative z-20 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="text-rose-gold tracking-[0.6em] uppercase text-[10px] md:text-xs font-semibold italic">
            An Eternal Journey
          </span>
        </motion.div>

        {/* 1. Animated Cursive Calligraphy: Happy Birthday */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.5, type: "spring" }}
          className="mb-4"
        >
          <span 
            className="text-7xl md:text-9xl lg:text-[10rem] text-amber-100/95 font-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] block"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Happy Birthday
          </span>
        </motion.div>

        {/* 2. Cinematic Luxury Name: PRIYANKA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          className="mb-14"
        >
          <h1 
            className="text-6xl md:text-8xl lg:text-[7.5rem] text-white font-normal drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)] block"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Priyanka
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="text-lg md:text-2xl font-serif text-foreground/60 max-w-3xl mx-auto mb-20 italic leading-relaxed tracking-wide"
        >
          "You are the poem I never knew how to write, and this life is the story I'm lucky enough to read with you."
        </motion.p>

        <Link href="/story">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="group relative px-16 py-6 rounded-full overflow-hidden"
          >
             <div className="absolute inset-0 bg-rose-gold transition-all duration-500 group-hover:scale-110 shadow-xl shadow-rose-gold/20" />
             <span className="relative text-white font-bold tracking-[0.3em] uppercase text-xs">
              Enter Our Story
            </span>
          </motion.button>
        </Link>
      </motion.div>



      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-rose-gold/40 to-transparent" />
      </motion.div>
    </Section>
  );
}
