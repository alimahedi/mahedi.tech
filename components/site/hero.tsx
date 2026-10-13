"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { easeOutExpo } from "./reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-black text-white"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="bg-grid-faint absolute inset-0" />
        <div className="animate-drift absolute left-1/2 top-[-25%] h-[65vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(41,151,255,0.22),transparent)] blur-3xl" />
        <div className="absolute bottom-[-35%] right-[-15%] h-[55vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(191,90,242,0.14),transparent)] blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-28 pt-32 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-white/50"
        >
          14-day MVP studio
        </motion.p>

        {/* Signature line-mask reveal: each headline line rises out of its own mask */}
        <h1 className="mt-8 text-balance text-[clamp(3.5rem,10vw,7.5rem)] font-semibold leading-[1.02] tracking-tighter">
          <span aria-hidden className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.15, ease: easeOutExpo }}
            >
              Zero to one,
            </motion.span>
          </span>
          <span aria-hidden className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.3, ease: easeOutExpo }}
            >
              <span className="animate-gradient-pan bg-gradient-to-r from-[#2997ff] via-[#bf5af2] to-[#ff9f0a] bg-clip-text text-transparent">
                fast.
              </span>
            </motion.span>
          </span>
          <span className="sr-only">Zero to one, fast.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.62, ease: easeOutExpo }}
          className="mt-9 max-w-2xl text-balance text-lg leading-relaxed text-white/60 md:text-xl"
        >
          Strategy, design, and engineering in one focused sprint. Your product — live in fourteen
          days, with nothing that doesn't need to be there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.76, ease: easeOutExpo }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3 text-[15px] font-medium text-black transition-all duration-200 hover:scale-[1.04] hover:bg-white/90 active:scale-95"
          >
            Book a 30-min call
          </Link>
          <Link
            href="/pricing"
            className="group flex items-center gap-1 text-[15px] text-[#2997ff] hover:underline"
          >
            See pricing
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <div className="h-12 w-px overflow-hidden bg-white/15">
          <motion.div
            className="h-4 w-px bg-white/70"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
