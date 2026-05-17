"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Section from "./Section";
import PageNav from "./PageNav";

const BIRTHDAY_DATE = "2026-05-26T00:00:00";
const NAME = "PRIYANKA";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 1, // Start with something > 0
  });
  const [hasArrived, setHasArrived] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(BIRTHDAY_DATE).getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setHasArrived(true);
        triggerBirthdayEffects();
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          total: distance,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerBirthdayEffects = () => {
    const colors = ["#c9a84c", "#ffffff", "#f4c0d1"];
    
    const end = Date.now() + (15 * 1000);

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();


  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        <span className="text-6xl sm:text-7xl md:text-9xl font-serif text-rose-gold tracking-tighter drop-shadow-sm">
          {value.toString().padStart(2, "0")}
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-rose-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-foreground/40 font-bold mt-4">
        {label}
      </span>
    </motion.div>
  );

  return (
    <Section id="countdown" className="bg-transparent py-32 flex items-center justify-center min-h-screen">

      
      <div className="max-w-5xl w-full text-center px-6">

        <AnimatePresence mode="wait">
          {!hasArrived ? (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-6 mb-8"
                >
                  <div className="w-12 h-[1px] bg-rose-gold/30" />
                  <span className="text-rose-gold tracking-[0.6em] uppercase text-[10px] font-bold">The Big Moment</span>
                  <div className="w-12 h-[1px] bg-rose-gold/30" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-serif mb-6 text-foreground/80">
                  Every second brings us closer <br/> <span className="text-gradient italic">to celebrating you</span>
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-20 mb-20">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-foreground/40 font-serif italic text-xl md:text-2xl"
              >
                "I have been counting down to celebrating you"
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="birthday"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="flex flex-col items-center"
            >
              <h2 className="text-6xl md:text-[10rem] font-serif mb-10 leading-tight text-foreground">
                Happy Birthday <br/>
                <span className="gold-leaf drop-shadow-2xl">{NAME}! 🎂</span>
              </h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="max-w-2xl mx-auto mb-16"
              >
                <p className="text-2xl md:text-4xl font-serif italic text-foreground/60 leading-relaxed">
                  "Today is YOUR day. You deserve all the love in the world."
                </p>
              </motion.div>

              <div className="flex flex-col items-center gap-10">
                <div className="w-24 h-[1px] bg-rose-gold/20" />
                <PageNav href="/surprise" label="Open Your Gift" />
                <div className="w-24 h-[1px] bg-rose-gold/20" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Glowing Center */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-rose-gold/5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </Section>
  );
}
