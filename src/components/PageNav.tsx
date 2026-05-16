"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PageNavProps {
  href: string;
  label: string;
}

export default function PageNav({ href, label }: PageNavProps) {
  return (
    <div className="mt-12 flex justify-center">
      <Link href={href}>
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center gap-6 px-12 py-5 glass rounded-full border-rose-gold/20 hover:border-rose-gold/40 transition-all duration-500 shadow-xl shadow-rose-gold/5"
        >
          <span className="text-rose-gold font-semibold tracking-[0.3em] uppercase text-[10px] whitespace-nowrap">
            {label}
          </span>
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-rose-gold/10 group-hover:bg-rose-gold/20 transition-colors">
            <ArrowRight className="w-4 h-4 text-rose-gold group-hover:translate-x-0.5 transition-transform" />
          </div>
          
          {/* Subtle pulse background */}
          <div className="absolute inset-0 rounded-full bg-rose-gold/5 animate-pulse -z-10" />
        </motion.button>
      </Link>
    </div>
  );
}

