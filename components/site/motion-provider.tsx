"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Respect the OS "reduce motion" setting across every animation on the site.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
