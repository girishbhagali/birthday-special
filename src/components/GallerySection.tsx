"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2, MapPin, Calendar } from "lucide-react";
import Section from "./Section";
import PageNav from "./PageNav";

const photos = [
  { 
    id: 1, 
    src: "/photo1.jpg", 
    title: "Eternal Sunshine", 
    caption: "The day we finally explored the city together.", 
    date: "15 March 2024", 
    location: "Mumbai",
    span: "col-span-2 row-span-2" 
  },
  { 
    id: 2, 
    src: "/photo2.jpg", 
    title: "Golden Hour", 
    caption: "Chasing sunsets and promises.", 
    date: "20 March 2024", 
    location: "Marine Drive",
    span: "col-span-1 row-span-1" 
  },
  { 
    id: 3, 
    src: "/photo3.jpg", 
    title: "Coffee & Conversations", 
    caption: "Where it all really began.", 
    date: "02 April 2024", 
    location: "Blue Tokai",
    span: "col-span-1 row-span-1" 
  },
  { 
    id: 4, 
    src: "/photo4.jpg", 
    title: "The Look", 
    caption: "That moment I caught you staring.", 
    date: "12 April 2024", 
    location: "Art Gallery",
    span: "col-span-1 row-span-2" 
  },
  { 
    id: 5, 
    src: "/photo1.jpg", 
    title: "Night Vibes", 
    caption: "Dancing under the moonlight.", 
    date: "25 April 2024", 
    location: "Sky Bar",
    span: "col-span-1 row-span-1" 
  },
  { 
    id: 6, 
    src: "/photo2.jpg", 
    title: "Simple Joys", 
    caption: "Just being with you is enough.", 
    date: "01 May 2024", 
    location: "Home",
    span: "col-span-2 row-span-1" 
  },
];

export default function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % photos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
    }
  };

  return (
    <Section id="gallery" className="bg-transparent py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="w-12 h-[1px] bg-rose-gold/40" />
            <span className="text-rose-gold tracking-[0.6em] uppercase text-[10px] font-bold">Our Museum</span>
            <div className="w-12 h-[1px] bg-rose-gold/40" />
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-serif text-foreground mb-8">Memory <span className="text-gradient">Gallery</span></h2>
          <p className="text-foreground/40 font-serif italic text-2xl tracking-wide">
            "Capturing moments that last forever."
          </p>
        </div>

        {/* Swipe Hint (Mobile) */}
        <div className="lg:hidden flex items-center justify-center gap-3 mb-10 text-rose-gold/40 animate-pulse">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Swipe to explore</span>
        </div>

        {/* Masonry-style Grid / Swipeable on Mobile */}
        <div className="flex lg:grid lg:grid-cols-4 lg:auto-rows-[250px] gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-10 lg:pb-0">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => setSelectedIdx(index)}
              className={`relative cursor-pointer group overflow-hidden rounded-3xl border border-rose-gold/10 shrink-0 w-[85vw] md:w-[45vw] lg:w-auto snap-center ${photo.span}`}
            >

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8">
                 <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   whileHover={{ y: 0, opacity: 1 }}
                   transition={{ duration: 0.4 }}
                 >
                   <h3 className="text-white font-serif text-2xl mb-2">{photo.title}</h3>
                   <div className="flex flex-wrap gap-4 text-white/60 text-[10px] uppercase tracking-widest font-bold mb-4">
                     <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {photo.date}</span>
                     <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {photo.location}</span>
                   </div>
                   <p className="text-white/80 text-sm font-serif italic">{photo.caption}</p>
                 </motion.div>
              </div>

              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gold Border Frame Overlay */}
              <div className="absolute inset-4 border border-rose-gold/20 pointer-events-none group-hover:inset-3 group-hover:border-rose-gold/40 transition-all duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="w-16 h-[1px] bg-rose-gold/20" />
            <PageNav href="/letter" label="Read My Final Letter" />
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out backdrop-blur-xl"
          >
            <button 
              className="absolute top-10 right-10 p-4 text-white/50 hover:text-white transition-colors z-[210]"
              onClick={() => setSelectedIdx(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-colors z-[210] glass rounded-full"
              onClick={prevPhoto}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-colors z-[210] glass rounded-full"
              onClick={nextPhoto}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              className="relative max-w-5xl w-full aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden glass border-rose-gold/30 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIdx].src}
                alt={photos[selectedIdx].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <h3 className="text-white font-serif text-3xl mb-4">{photos[selectedIdx].title}</h3>
                <div className="flex gap-6 text-white/60 text-xs uppercase tracking-widest font-bold mb-4">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {photos[selectedIdx].date}</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {photos[selectedIdx].location}</span>
                </div>
                <p className="text-white/80 font-serif italic text-xl leading-relaxed">
                  "{photos[selectedIdx].caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
