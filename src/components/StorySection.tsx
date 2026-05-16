"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Stars, Sparkles, Moon } from "lucide-react";
import Section from "./Section";
import PageNav from "./PageNav";
import TextReveal from "./TextReveal";

const memories = [
  {
    date: "The Beginning",
    title: "First Meeting",
    description: "The moment the world stood still. I knew then that my life was about to change forever.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-rose-gold/20",
  },
  {
    date: "The Spark",
    title: "First Date",
    description: "Laughter, nervous smiles, and the realization that I've found someone truly special.",
    icon: <Stars className="w-8 h-8" />,
    color: "from-soft-pink/20",
  },
  {
    date: "The Confession",
    title: "I Love You",
    description: "Whispered under the stars, the three words that became my favorite song.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-lavender/20",
  },
  {
    date: "The Promise",
    title: "Forever Begins",
    description: "Every day since has been a celebration of us. And we're just getting started.",
    icon: <Moon className="w-8 h-8" />,
    color: "from-pastel-blue/20",
  },
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="h-[400vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header Content */}
        <div className="absolute top-16 md:top-24 left-0 w-full px-10 md:px-20 z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-rose-gold" />
            <span className="text-rose-gold tracking-[0.5em] uppercase text-[10px] md:text-xs font-semibold">
              Chapters of Us
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-serif text-foreground leading-tight">
            Our Love <span className="text-gradient">Story</span>
          </h2>
        </div>


        {/* Horizontal Scrolling Gallery */}
        <motion.div style={{ x }} className="flex gap-12 px-10 md:px-32 items-center">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="min-w-[80vw] md:min-w-[45vw] h-[60vh] glass rounded-[3rem] p-12 flex flex-col justify-between group border-white/30 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${memory.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/20 border border-white/40 text-rose-gold shadow-lg">
                  {memory.icon}
                </div>
                <span className="text-rose-gold font-poppins text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
                  {memory.date}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif mb-6 group-hover:tracking-tight transition-all duration-500">
                  {memory.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-foreground/70 font-cormorant text-2xl md:text-3xl leading-relaxed italic max-w-xl">
                  "{memory.description}"
                </p>
                <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div className="w-8 h-[1px] bg-rose-gold" />
                  <span className="text-rose-gold text-xs uppercase tracking-[0.2em]">Memories Forever</span>
                </div>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-10 right-10 text-8xl font-serif text-rose-gold/5 pointer-events-none group-hover:text-rose-gold/10 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
          
          {/* Final Call to Action Card */}
          <motion.div className="min-w-[80vw] md:min-w-[45vw] h-[60vh] flex flex-col justify-center items-center text-center p-12">
            <h3 className="text-4xl md:text-5xl font-serif mb-10">And many more <br/> beautiful chapters to come...</h3>
            <PageNav href="/gallery" label="Step into the Gallery" />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-10 right-10 h-[2px] bg-rose-gold/10 overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="w-full h-full bg-rose-gold origin-left"
          />
        </div>
      </div>
    </div>
  );
}

