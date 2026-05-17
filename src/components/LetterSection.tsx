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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <Section id="letter" className="relative bg-black min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden">

      {/* 1. Video wrapper — clips any browser-applied scale/zoom on the video */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-70"
          style={{
            /* Pin it to cover the full viewport without any movement */
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            /* Kill every possible animation/transition vector */
            transition: "none",
            animation: "none",
            willChange: "auto",          /* prevents GPU compositing zoom artifacts */
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            objectFit: "cover",
          }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" />
        </video>
      </div>

      {/* 2. Soft Vignette Overlay — static, no motion */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* 3. Volumetric Lighting Ray — static, no motion */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 15% 15%, rgba(227,242,253,0.06) 0%, transparent 50%)",
        }}
      />

      {/* 4. Atmospheric Haze — static div, NO motion/animation (was causing zoom feel) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 100%, rgba(40, 70, 130, 0.25) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* 5. Fantasy Island Silhouette — static, NO floating animation (was causing zoom feel) */}
      <div
        className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[90vw] md:w-[65vw] max-w-[750px] aspect-[16/10] z-[1] opacity-75 pointer-events-none"
      >
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="islandGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2c5282" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="islandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#030712" />
              <stop offset="50%" stopColor="#0b1329" />
              <stop offset="100%" stopColor="#02040a" />
            </linearGradient>

            <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Volumetric background glow */}
          <ellipse cx="400" cy="300" rx="350" ry="200" fill="url(#islandGlow)" />

          {/* Main island rock terrain */}
          <path
            d="M 150 320 
               C 180 325, 220 330, 260 328
               C 300 325, 340 332, 400 330
               C 460 328, 520 335, 580 325
               C 620 318, 640 322, 670 320
               C 680 330, 690 345, 680 355
               C 670 365, 640 380, 620 395
               C 590 415, 550 435, 500 450
               C 450 465, 410 470, 390 470
               C 360 470, 310 460, 270 440
               C 220 415, 170 390, 140 370
               C 120 355, 130 335, 150 320 Z"
            fill="url(#islandGrad)"
            stroke="rgba(255, 255, 255, 0.03)"
            strokeWidth="1.5"
          />

          {/* Terrain Grass Layer */}
          <path
            d="M 140 320
               C 180 310, 240 315, 290 312
               C 340 308, 410 316, 480 310
               C 550 305, 620 315, 680 320
               C 675 328, 665 330, 650 330
               C 600 330, 520 325, 460 328
               C 390 332, 310 328, 240 330
               C 180 332, 150 328, 140 320 Z"
            fill="#050e20"
            stroke="rgba(255, 255, 255, 0.05)"
          />

          {/* Hanging roots */}
          <path d="M 220 390 Q 210 420, 205 440" fill="none" stroke="#02040a" strokeWidth="2.5" opacity="0.8" />
          <path d="M 320 430 Q 315 460, 320 480" fill="none" stroke="#02040a" strokeWidth="3" opacity="0.8" />
          <path d="M 450 445 Q 455 475, 452 495" fill="none" stroke="#02040a" strokeWidth="3" opacity="0.8" />
          <path d="M 580 395 Q 590 425, 595 445" fill="none" stroke="#02040a" strokeWidth="2.5" opacity="0.8" />

          {/* Glowing Crystals */}
          <polygon points="260,312 267,288 273,312" fill="url(#crystalGrad)" filter="drop-shadow(0 0 8px #3b82f6)" />
          <polygon points="490,310 500,278 508,310" fill="url(#crystalGrad)" filter="drop-shadow(0 0 12px #60a5fa)" />
          <polygon points="560,314 564,298 568,314" fill="url(#crystalGrad)" filter="drop-shadow(0 0 6px #3b82f6)" />
        </svg>
      </div>

      {/* 6. Glowing Space Dust Particles — kept, they move UP not zoom */}
      {mounted && (
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.4 + 0.3,
                opacity: Math.random() * 0.15 + 0.05,
              }}
              animate={{
                y: [-15, -80, -15],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.05, 0.3, 0.05],
              }}
              transition={{
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/50 blur-[1px]"
            />
          ))}
        </div>
      )}

      {/* 7. Foreground Content Card */}
      <motion.div
        initial={{ opacity: 0, rotateX: -90, y: 100 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl w-full perspective-1000 z-10"
      >
        <div className="relative bg-transparent p-6 sm:p-12 md:p-16 min-h-[80vh] flex flex-col items-center">

          {/* Decorative Wax Seal */}
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
          <h2 className="font-cursive text-4xl md:text-6xl text-amber-100 mb-12 text-center tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            A Letter From My Heart
          </h2>

          {/* Letter Body */}
          <div className="w-full">
            <p className="font-serif text-xl md:text-2xl text-amber-50/95 leading-[1.8] whitespace-pre-wrap italic drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              {displayText}
              {!isDone && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[2px] h-6 bg-amber-300 ml-1 translate-y-1"
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
                <div className="w-24 h-[1px] bg-white/20" />
                <PageNav href="/countdown" label="The Countdown" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Section>
  );
}
