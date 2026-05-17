"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function PageBack() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  const getPrevPath = (path: string): string => {
    switch (path) {
      case "/story":
        return "/";
      case "/letter":
        return "/story";
      case "/countdown":
        return "/letter";
      case "/gallery":
        return "/countdown";
      case "/surprise":
        return "/gallery";
      default:
        return "/";
    }
  };

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={() => router.push(getPrevPath(pathname))}
        className="fixed top-4 left-4 sm:top-10 sm:left-10 z-[100] flex items-center gap-3 group"
      >
        <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-rose-gold/10 group-hover:border-rose-gold/30 transition-all duration-500">
          <ArrowLeft className="w-5 h-5 text-rose-gold group-hover:-translate-x-0.5 transition-transform" />
        </div>
        <span className="text-rose-gold/50 text-[10px] uppercase tracking-[0.3em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Go Back
        </span>




      </motion.button>
    </AnimatePresence>
  );
}

