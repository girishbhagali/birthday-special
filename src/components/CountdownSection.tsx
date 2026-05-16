"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import PageNav from "./PageNav";
import TextReveal from "./TextReveal";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-15T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <Section id="countdown" className="bg-transparent min-h-screen flex flex-col items-center justify-center py-32 px-6">
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center items-center gap-4"
        >
          <div className="w-10 h-[1px] bg-rose-gold/30" />
          <span className="text-rose-gold tracking-[0.5em] uppercase text-xs font-semibold">The Anticipation</span>
          <div className="w-10 h-[1px] bg-rose-gold/30" />
        </motion.div>
        <h2 className="text-6xl md:text-8xl font-serif text-foreground mb-8">
          <TextReveal text="The Big Moment" />
        </h2>
        <p className="font-cormorant text-2xl italic text-foreground/50 max-w-xl mx-auto">
          "Every second brings us closer to the most beautiful celebration of you."
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-20 relative z-10">
        {timeItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="glass flex flex-col items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-[2rem] border-white/40 shadow-2xl shadow-rose-gold/5 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="text-5xl md:text-7xl font-serif text-rose-gold mb-2 gold-leaf relative z-10">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-medium relative z-10">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="relative z-10"
      >
        <PageNav href="/surprise" label="Open Your Gift" />
      </motion.div>
    </Section>
  );
}

