"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import PageNav from "./PageNav";
import { Heart } from "lucide-react";

const fullText = `My dearest BABEEE,

I still remember the first time I saw you — the way you lit up the room with just a smile. I had no idea then that you would become the most important person in my life.

You have this way of making everyone around you feel seen and loved that makes every ordinary moment feel extraordinary. I have never met anyone who possesses such a pure and beautiful soul.

This past year with you has been the greatest adventure of my life. The trips we took, the late nights talking about our dreams, the way you squeeze my hand when you're happy — I carry all of it with me everywhere I go.

On your birthday, I want you to know: you are loved more deeply than words can ever say. You deserve every beautiful thing the world has to offer, and I will spend every day trying to give you just that.

Forever yours,
GIRISH`;

export default function LetterSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="letter" className="bg-transparent min-h-screen flex items-center justify-center py-32 px-6">
      <motion.div
        initial={{ opacity: 0, rotateX: -90, y: 100 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl w-full perspective-1000"
      >
        <div className="relative bg-[#fdfaf2] p-12 md:p-20 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#e8e2d2] min-h-[80vh] flex flex-col items-center">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
          
          {/* Decorative Flourish / Wax Seal */}
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="mb-12 relative"
          >
            <div className="w-16 h-16 bg-[#b33939] rounded-full flex items-center justify-center shadow-lg border-4 border-[#8e2e2e]">
              <Heart className="text-white w-8 h-8 fill-current" />
            </div>
            <div className="absolute -inset-2 border border-[#b33939]/20 rounded-full animate-pulse" />
          </motion.div>

          {/* Heading */}
          <h2 className="font-cursive text-4xl md:text-6xl text-[#5d4037] mb-12 text-center tracking-wide">
            A Letter From My Heart
          </h2>

          {/* Letter Body */}
          <div className="w-full">
            <p className="font-serif text-xl md:text-2xl text-[#4e342e]/90 leading-[1.8] whitespace-pre-wrap italic">
              {displayText}
              {!isDone && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[2px] h-6 bg-[#5d4037] ml-1 translate-y-1"
                />
              )}
            </p>
          </div>

          {/* Signature Animation */}
          <AnimatePresence>
            {isDone && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-20 w-full flex flex-col items-center gap-12"
              >
                <div className="w-24 h-[1px] bg-[#5d4037]/20" />
                <PageNav href="/countdown" label="The Countdown" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Shadow for Unfold Effect */}
        <div className="absolute -bottom-10 left-[10%] right-[10%] h-10 bg-black/10 blur-2xl rounded-full -z-10" />
      </motion.div>
    </Section>
  );
}
