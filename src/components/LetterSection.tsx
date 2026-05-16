"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import PageNav from "./PageNav";

const fullText = "My Dearest,\n\nEvery day with you is a gift I never expected, but always dreamed of. You have a way of making the simplest moments feel extraordinary. Your kindness, your laugh, and the way you see the world inspire me every single day. \n\nToday, I want to celebrate the incredible person you are. Thank you for being by my side. Here's to many more adventures together.\n\nForever Yours.";

export default function LetterSection() {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start immediately on mount for better reliability
    setStarted(true);
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="letter" className="bg-transparent min-h-screen flex items-center justify-center py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl w-full glass p-12 md:p-24 rounded-[3rem] border-white/40 relative shadow-3xl shadow-rose-gold/10"
      >
        {/* Decorative Stationery Elements */}
        <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-rose-gold/30 rounded-tl-3xl" />
        <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-rose-gold/30 rounded-br-3xl" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-12"
          >
            <span className="text-rose-gold tracking-[0.5em] uppercase text-[10px] md:text-xs font-semibold mb-2 block">A Message From My Heart</span>
            <div className="w-20 h-[1px] bg-rose-gold/40" />
          </motion.div>

          <div className="min-h-[300px] md:min-h-[400px]">
            <p className="font-cormorant text-2xl md:text-4xl text-foreground leading-[1.6] whitespace-pre-wrap italic">
              {displayText}
              {displayText.length < fullText.length && (
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[2px] h-8 md:h-10 bg-rose-gold ml-1 translate-y-2" 
                />
              )}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={displayText.length >= fullText.length - 1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="mt-20 flex justify-between items-end"
          >
            <div className="text-rose-gold/40 font-serif text-6xl">∞</div>
            <PageNav href="/countdown" label="A Special Countdown" />
          </motion.div>
        </div>
        
        {/* Background Texture/Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      </motion.div>
    </Section>
  );
}



