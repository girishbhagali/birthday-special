"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundEffects() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 200]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 45]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Primary Aura - Rose Gold */}
      <motion.div
        style={{ y: y1, rotate, animated: true }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-15%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-rose-gold/15 via-soft-pink/5 to-transparent blur-[120px]"
      />

      {/* Secondary Aura - Soft Lavender */}
      <motion.div
        style={{ y: y2, rotate: -rotate, animated: true }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-lavender/20 via-soft-pink/10 to-transparent blur-[120px]"
      />

      {/* Floating Stardust */}
      {mounted && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3
              }}
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              }}
              className="absolute w-1 h-1 bg-rose-gold/40 rounded-full blur-[1px]"
            />
          ))}
        </div>
      )}

      {/* Light Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(183,110,121,0.05)_100%)]" />
    </div>
  );
}
