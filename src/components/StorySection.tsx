"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import PageNav from "./PageNav";
import { Calendar, MapPin } from "lucide-react";

const chapters = [
  {
    number: "01",
    label: "The Beginning",
    heading: "First Meeting",
    date: "14 Feb 2024",
    location: "Café Mocha, Pune",
    memory: "I still remember the way you walked in, radiating such warmth. You were wearing that blue dress that matched your eyes perfectly. When you said 'Hi', I knew my life was about to change forever.",
    image: "/photo1.jpg",
  },
  {
    number: "02",
    label: "Memories Forever",
    heading: "First Date",
    date: "25 Feb 2024",
    location: "Sky Lounge",
    memory: "Our first real date felt like a scene from a movie. We talked for hours until the restaurant closed. I remember feeling so light walking home, knowing I'd found someone truly special.",
    image: "/photo2.jpg",
  },
  {
    number: "03",
    label: "The Confession",
    heading: "I Said I Love You",
    date: "10 April 2024",
    location: "Under the Stars",
    memory: "I couldn't keep it in any longer. When I told you I loved you, and you smiled that specific smile, my heart skipped a beat. Your reaction was everything I'd ever hoped for.",
    image: "/photo3.jpg",
  },
  {
    number: "04",
    label: "The Promise",
    heading: "Forever Begins",
    date: "Every Day",
    location: "With You",
    memory: "You are my peace, my home, and my greatest adventure. I can't wait for all the years ahead, building a life together that's even more beautiful than our story so far.",
    image: "/photo4.jpg",
  },
];

export default function StorySection() {
  return (
    <div className="bg-transparent">
      {/* Introduction */}
      <Section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-rose-gold tracking-[0.6em] uppercase text-xs font-semibold mb-6 block">Our Story</span>
          <h2 className="text-6xl md:text-9xl font-serif text-foreground mb-8">Chapters <br/><span className="text-gradient">of Us</span></h2>
          <div className="w-[1px] h-20 bg-gradient-to-b from-rose-gold/40 to-transparent mx-auto" />
        </motion.div>
      </Section>

      {/* Chapters */}
      {chapters.map((chapter, index) => (
        <Section key={index} className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden">
          {/* Watermark */}
          <span className="absolute left-10 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-serif text-rose-gold/5 pointer-events-none select-none z-0">
            {chapter.number}
          </span>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1px] bg-rose-gold" />
                <span className="text-rose-gold tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold">
                  {chapter.label}
                </span>
              </div>

              <h3 className="text-5xl md:text-8xl font-serif text-foreground mb-10 leading-tight">
                {chapter.heading}
              </h3>

              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-3 text-rose-gold/60">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold">{chapter.date}</span>
                </div>
                <div className="flex items-center gap-3 text-rose-gold/60">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold">{chapter.location}</span>
                </div>
              </div>

              <p className="text-foreground/70 font-serif text-xl md:text-2xl italic leading-relaxed mb-12 max-w-xl">
                "{chapter.memory}"
              </p>

              <div className="flex items-center gap-4">
                <div className="px-6 py-2 rounded-full border border-rose-gold/20 text-rose-gold text-[10px] uppercase tracking-[0.3em] font-bold bg-rose-gold/5">
                  Memories Forever
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="hidden lg:block relative aspect-[4/5] rounded-[2rem] overflow-hidden glass p-4 border-rose-gold/10"
            >
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={chapter.image}
                  alt={chapter.heading}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Footer Navigation */}
      <Section className="h-[50vh] flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="w-20 h-[1px] bg-rose-gold/20" />
          <h3 className="text-3xl md:text-5xl font-serif italic text-foreground/60 mb-6">Our journey is just beginning...</h3>
          <PageNav href="/gallery" label="View Our Gallery" />
        </motion.div>
      </Section>
    </div>
  );
}
