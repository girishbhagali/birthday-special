"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CarouselImage {
  src: string;
  bg: string;
  panel: string;
}

const COUPLE_IMAGES: CarouselImage[] = [
  { src: '/couple1.png', bg: '#F4845F', panel: '#F79B7F' },
  { src: '/couple2.png', bg: '#6BBF7A', panel: '#85CC92' },
  { src: '/couple3.png', bg: '#E882B4', panel: '#ED9DC4' },
  { src: '/couple4.png', bg: '#6EB5FF', panel: '#8DC4FF' },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  // Preload all couple cutout images on mount
  useEffect(() => {
    COUPLE_IMAGES.forEach(imgData => {
      const img = new window.Image();
      img.src = imgData.src;
    });
  }, []);

  // Window resize handler for responsive positioning
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation Logic
  const navigate = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % 4);
    } else {
      setActiveIndex((prev) => (prev + 3) % 4);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  // Roles determination based on active index
  const getRole = (index: number) => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex + 3) % 4) return "left";
    if (index === (activeIndex + 1) % 4) return "right";
    return "back";
  };

  // Get dynamic styles based on role and screen size
  const getItemStyle = (index: number) => {
    const role = getRole(index);
    let transform = "translateX(-50%)";
    let filter = "none";
    let opacity = 1;
    let zIndex = 5;
    let left = "50%";
    let height = "22%";
    let bottom = "12%";

    if (role === "center") {
      transform = `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`;
      filter = "blur(0px)";
      opacity = 1;
      zIndex = 20;
      left = "50%";
      height = isMobile ? "60%" : "92%";
      bottom = isMobile ? "22%" : "0";
    } else if (role === "left") {
      transform = "translateX(-50%) scale(1)";
      filter = "blur(2px)";
      opacity = 0.85;
      zIndex = 10;
      left = isMobile ? "20%" : "30%";
      height = isMobile ? "16%" : "28%";
      bottom = isMobile ? "32%" : "12%";
    } else if (role === "right") {
      transform = "translateX(-50%) scale(1)";
      filter = "blur(2px)";
      opacity = 0.85;
      zIndex = 10;
      left = isMobile ? "80%" : "70%";
      height = isMobile ? "16%" : "28%";
      bottom = isMobile ? "32%" : "12%";
    } else if (role === "back") {
      transform = "translateX(-50%) scale(1)";
      filter = "blur(4px)";
      opacity = 1;
      zIndex = 5;
      left = "50%";
      height = isMobile ? "13%" : "22%";
      bottom = isMobile ? "32%" : "12%";
    }

    return {
      position: "absolute" as const,
      aspectRatio: "0.6 / 1",
      transform,
      filter,
      opacity,
      zIndex,
      left,
      height,
      bottom,
      transition: "transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1)",
      willChange: "transform, filter, opacity",
    };
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: COUPLE_IMAGES[activeIndex].bg,
        transition: "background-color 650ms cubic-bezier(0.4, 0, 0.2, 1)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative w-full h-screen overflow-hidden">
        {/* 1. Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* 2. Giant ghost text */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2]"
          style={{ top: "18%" }}
        >
          <span
            className="text-white opacity-[0.25] uppercase tracking-tighter leading-none whitespace-nowrap"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(90px, 28vw, 380px)",
              fontWeight: 900,
            }}
          >
            PRIYANKA
          </span>
        </div>

        {/* 3. Top-left brand label */}
        <div className="absolute top-6 left-4 sm:left-8 z-[60]">
          <span
            className="text-xs font-semibold uppercase text-white tracking-[0.18em] opacity-90"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            LOVE MUSEUM
          </span>
        </div>

        {/* 4. Carousel */}
        <div className="absolute inset-0 z-[3]">
          {COUPLE_IMAGES.map((image, index) => {
            const role = getRole(index);
            return (
              <div
                key={index}
                style={getItemStyle(index)}
                className="group/item select-none"
              >
                {/* 3D Box Panel Highlight Effect */}
                <div
                  className="absolute inset-x-0 bottom-0 top-[20%] rounded-t-[40px] opacity-20 border border-white/20 transition-all duration-500"
                  style={{
                    backgroundColor: image.panel,
                    borderRadius: isMobile ? "24px" : "40px",
                    transform: role === "center" ? "perspective(1000px) rotateX(10deg)" : "none",
                  }}
                />

                {/* Main Figurine Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={`Couple Memory ${index}`}
                  className="w-full h-full object-contain object-bottom select-none pointer-events-none"
                  draggable={false}
                  style={{
                    filter: role === "center" ? "drop-shadow(0 25px 30px rgba(0,0,0,0.18))" : "none",
                    transition: "filter 650ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* 5. Bottom-left text + nav buttons */}
        <div
          className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-[60] flex flex-col gap-4 sm:gap-6"
          style={{ maxWidth: "340px" }}
        >
          <div>
            <h3
              className="text-white font-bold uppercase tracking-widest text-lg sm:text-[22px] mb-2 sm:mb-3 leading-tight"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              OUR MEMORIES
            </h3>
            <p
              className="hidden sm:block text-xs sm:text-sm text-white/80 leading-relaxed font-normal"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Every single moment we spend together becomes a beautiful frame frozen in time. Capturing the smiles, the promises, and the endless adventures we walk hand-in-hand. Happy birthday my love!
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("prev")}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white transition-all duration-200 active:scale-95 bg-transparent hover:scale-108 hover:bg-white/12 hover:border-white"
            >
              <ArrowLeft size={26} strokeWidth={2.25} />
            </button>
            <button
              onClick={() => navigate("next")}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white transition-all duration-200 active:scale-95 bg-transparent hover:scale-108 hover:bg-white/12 hover:border-white"
            >
              <ArrowRight size={26} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link */}
        <div className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-[60]">
          <Link
            href="/letter"
            className="flex items-center gap-3 text-white uppercase no-underline transition-all duration-200 select-none cursor-pointer"
            style={{
              fontFamily: "'Anton', sans-serif",
              opacity: isLinkHovered ? 1 : 0.9,
              transform: isLinkHovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
          >
            <span
              style={{
                fontSize: "clamp(20px, 4vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              READ MY LETTER
            </span>
            <ArrowRight className="w-6 h-6 sm:w-10 sm:h-10 transition-transform duration-300" style={{ transform: isLinkHovered ? "translateX(6px)" : "translateX(0)" }} strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
