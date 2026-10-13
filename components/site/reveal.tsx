"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // Trigger 180px before the element enters the viewport so fast scrolls
      // and anchor jumps can never skip past an unrevealed section.
      viewport={{ once: true, margin: "0px 0px 180px 0px" }}
      transition={{ duration: 0.9, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.25em] ${
        dark ? "text-white/50" : "text-foreground/40"
      }`}
    >
      {children}
    </p>
  );
}
