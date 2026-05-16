"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navMap: Record<string, { href: string; label: string }> = {
  "/": { href: "/story", label: "Our Story" },
  "/story": { href: "/gallery", label: "The Gallery" },
  "/gallery": { href: "/letter", label: "My Letter" },
  "/letter": { href: "/countdown", label: "Countdown" },
  "/countdown": { href: "/surprise", label: "The Gift" },
  "/surprise": { href: "/", label: "Start Over" },
};

export default function PageNext() {
  const pathname = usePathname();
  const next = navMap[pathname] || null;

  if (!next) return null;

  return (
    <AnimatePresence>
      <Link href={next.href}>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="fixed top-10 right-10 z-[100] flex items-center gap-3 group"
        >
          <span className="text-rose-gold/50 text-[10px] uppercase tracking-[0.3em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
            Next: {next.label}
          </span>
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-rose-gold/10 group-hover:border-rose-gold/30 transition-all duration-500">
            <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-0.5 transition-transform" />
          </div>



        </motion.button>

      </Link>
    </AnimatePresence>
  );
}
