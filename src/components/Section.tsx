"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center px-6 py-20 ${className}`}
    >
      {children}
    </section>
  );
}
