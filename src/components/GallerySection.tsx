"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import PageNav from "./PageNav";
import TextReveal from "./TextReveal";

const photos = [
  { id: 1, src: "/photo1.jpg", caption: "The day my world got a little brighter.", rotate: -10, top: "10%", left: "12%", zIndex: 10 },
  { id: 2, src: "/photo2.jpg", caption: "Forever is a long time, but I want to spend it with you.", rotate: 5, top: "15%", left: "58%", zIndex: 20 },
  { id: 3, src: "/photo3.jpg", caption: "In your arms is my favorite place to be.", rotate: -5, top: "48%", left: "18%", zIndex: 15 },
  { id: 4, src: "/photo4.jpg", caption: "You are my today and all of my tomorrows.", rotate: 8, top: "42%", left: "62%", zIndex: 25 },
];

export default function GallerySection() {
  const constraintsRef = useRef(null);

  return (
    <Section id="gallery" className="bg-transparent min-h-screen py-32">
      <div className="text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-4 flex justify-center items-center gap-4"
        >
          <div className="w-10 h-[1px] bg-rose-gold/40" />
          <span className="text-rose-gold tracking-[0.4em] uppercase text-xs font-semibold">Our Museum</span>
          <div className="w-10 h-[1px] bg-rose-gold/40" />
        </motion.div>
        <h2 className="text-6xl md:text-8xl font-serif mb-4 flex justify-center">
          <TextReveal text="Memory Gallery" />
        </h2>
        <p className="font-cormorant text-2xl italic text-foreground/50">"Capturing moments that last forever..."</p>
      </div>

      <div ref={constraintsRef} className="relative w-full h-[700px] max-w-7xl mx-auto overflow-visible z-20">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            drag
            dragConstraints={constraintsRef}
            initial={{ opacity: 0, scale: 0.8, rotate: photo.rotate, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05, 
              zIndex: 100,
              rotate: photo.rotate * 0.5,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              top: photo.top,
              left: photo.left,
              zIndex: photo.zIndex,
            }}
            className="absolute w-[280px] md:w-[380px] cursor-grab active:cursor-grabbing"
          >
            <div className="bg-white p-5 pb-20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm border border-neutral-100 relative group transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-6 rounded-[2px]">
                <Image
                  src={photo.src}
                  alt={`Memory ${photo.id}`}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10 px-2">
                <p className="font-cormorant text-xl md:text-2xl text-neutral-600 italic text-center leading-snug">
                  {photo.caption}
                </p>
              </div>
              
              {/* Decorative tape or stamp could go here */}
              <div className="absolute bottom-6 right-6 w-8 h-8 opacity-10 group-hover:opacity-30 transition-opacity">
                 <div className="w-full h-full border border-rose-gold rounded-full flex items-center justify-center text-[8px] font-serif text-rose-gold rotate-12">
                   EST. 2024
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-rose-gold/30" />
            <p className="text-rose-gold/60 font-poppins text-xs tracking-[0.3em] uppercase font-medium">Interact to explore our story</p>
            <div className="w-8 h-[1px] bg-rose-gold/30" />
          </div>
          <PageNav href="/letter" label="Read My Final Letter" />
        </motion.div>
      </div>
    </Section>
  );
}

