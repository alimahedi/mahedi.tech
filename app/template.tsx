"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

// Re-mounts on every navigation: a quiet 400ms fade keeps route changes fluid.
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
