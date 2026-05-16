"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, Heart } from "lucide-react";
import Section from "./Section";
import PageNav from "./PageNav";
import TextReveal from "./TextReveal";

export default function SurpriseSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Sophisticated confetti burst
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ["#B76E79", "#FFB6C1"] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ["#D4AF37", "#E6E6FA"] });
    }, 250);
  };

  return (
    <Section id="surprise" className="bg-transparent min-h-screen flex items-center justify-center py-32 px-6">
      <div className="relative z-10 text-center w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="gift-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
               <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6 flex items-center gap-4"
              >
                <div className="w-10 h-[1px] bg-rose-gold/30" />
                <span className="text-rose-gold tracking-[0.5em] uppercase text-xs font-semibold">The Final Surprise</span>
                <div className="w-10 h-[1px] bg-rose-gold/30" />
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-16">
                Ready for Your Gift?
              </h2>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="cursor-pointer relative group"
              >
                <div className="absolute inset-0 bg-rose-gold/20 rounded-full blur-3xl group-hover:bg-rose-gold/40 transition-all duration-700 animate-pulse" />
                <div className="relative glass w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center border-white/40 group-hover:border-rose-gold/60 transition-all duration-500 shadow-2xl">
                  <Gift className="w-20 h-20 md:w-28 md:h-28 text-rose-gold group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute -top-2 -right-2 bg-white p-3 rounded-full shadow-lg border border-rose-gold/10">
                    <Heart className="w-6 h-6 text-soft-pink fill-soft-pink" />
                  </div>
                </div>
              </motion.div>
              
              <p className="mt-12 text-rose-gold/50 font-poppins text-xs tracking-[0.3em] uppercase animate-pulse">Click to unwrap</p>
            </motion.div>
          ) : (
            <motion.div
              key="surprise-content"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="glass p-12 md:p-24 rounded-[4rem] border-white/40 shadow-3xl shadow-rose-gold/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-gold via-soft-pink to-lavender" />
              
              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, delay: 0.5 }}
                  className="mb-12 flex justify-center"
                >
                  <div className="p-5 bg-rose-gold/10 rounded-full">
                    <Heart className="w-12 h-12 text-rose-gold fill-rose-gold" />
                  </div>
                </motion.div>

                <h2 className="text-6xl md:text-9xl font-serif text-foreground mb-10 flex justify-center">
                  <TextReveal text="Happy Birthday!" delay={0.8} />
                </h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.5 }}
                  className="text-2xl md:text-4xl font-cormorant text-foreground/70 leading-relaxed mb-12 italic"
                >
                  "You are the most beautiful part of my story. May your year be as radiant and wonderful as your heart."
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="flex flex-col items-center gap-10"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-[1px] bg-rose-gold/30" />
                    <span className="text-rose-gold font-semibold tracking-[0.4em] uppercase text-xs">
                      Forever Yours, Always
                    </span>
                    <div className="w-12 h-[1px] bg-rose-gold/30" />
                  </div>
                  <PageNav href="/" label="Relive The Magic" />
                </motion.div>
              </div>

              {/* Decorative Background Glows */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-soft-pink/10 blur-[100px] rounded-full" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-lavender/10 blur-[100px] rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

