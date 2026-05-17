"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Link from "next/link";
import Image from "next/image";
import { Gift, Heart, RefreshCw, Star, Smile } from "lucide-react";
import Section from "./Section";

export default function SurpriseSection() {
  const [stage, setStage] = useState(1); // 1: Box, 2: Reveal

  const handleOpen = () => {
    // Shake and burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#B76E79", "#FFB6C1", "#E6E6FA", "#D4AF37"]
    });

    setTimeout(() => {
      setStage(2);
    }, 800);
  };

  return (
    <Section id="surprise" className="bg-transparent py-32 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full text-center px-6">
        <AnimatePresence mode="wait">
          {stage === 1 ? (
            <motion.div
              key="box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
              className="flex flex-col items-center"
            >
              <div className="mb-12">
                <span className="text-rose-gold tracking-[0.6em] uppercase text-[10px] font-bold mb-4 block">The Grand Finale</span>
                <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-4 italic">Ready for Your Gift?</h2>
                <p className="text-foreground/40 font-serif italic text-xl">"A little something special, just for you."</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: [0, -2, 2, -2, 2, 0] }}
                onClick={handleOpen}
                className="relative cursor-pointer group"
              >
                {/* Glowing Aura */}
                <div className="absolute inset-[-40px] bg-rose-gold/10 blur-[60px] rounded-full animate-pulse-slow" />

                {/* The Gift Box */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 glass rounded-[3rem] border-rose-gold/20 flex items-center justify-center shadow-3xl overflow-hidden bg-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent" />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <Gift className="w-24 h-24 md:w-32 md:h-32 text-rose-gold mb-6 stroke-[1px]" />
                    <span className="text-rose-gold font-bold tracking-[0.4em] uppercase text-[10px]">Tap to unwrap</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="relative"
            >
              <div className="glass p-12 md:p-16 rounded-[3rem] border-rose-gold/20 shadow-3xl relative overflow-hidden">
                {/* Background Sparkles */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5
                      }}
                      className="absolute"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                      }}
                    >
                      <Star className="w-3 h-3 text-rose-gold fill-current" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-rose-gold tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block italic">Surprise!</span>
                  <h2 className="text-5xl md:text-8xl font-serif mb-10 leading-tight">
                    Your gift is <br />
                    <span className="text-gradient italic">ME!</span>
                  </h2>
                  {/* Couple Photo */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-rose-gold/20 p-2 shadow-2xl mb-12 overflow-hidden"
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/me_gift.jpg"
                        alt="Our Gift"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  <div className="max-w-xl mx-auto space-y-6 mb-16">
                    <p className="text-2xl md:text-3xl font-serif italic text-foreground/80 leading-relaxed">
                      "I'm the only gift that eats your snacks and talks back... but I'm yours forever!"
                    </p>
                    <p className="text-xl md:text-2xl font-serif italic text-rose-gold leading-relaxed flex items-center justify-center gap-2">
                      <Smile className="w-6 h-6" /> No exchange, no return, and definitely no warranty!
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-12">
                    <div className="w-32 h-[1px] bg-rose-gold/20" />
                    <Link href="/">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-4 px-12 py-5 rounded-full glass border-rose-gold/20 text-rose-gold hover:border-rose-gold/40 transition-all duration-500"
                      >
                        <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                        <span className="font-bold tracking-[0.3em] uppercase text-xs">Start Over</span>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
