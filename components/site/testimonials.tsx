"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow, Reveal } from "./reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearTimeout(timer);
  }, [current]);

  const active = testimonials[current];

  return (
    <section className="bg-white py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow>Founders</Eyebrow>
        </Reveal>

        <div className="mt-12 min-h-[16rem] md:min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground md:text-4xl">
                "{active.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm font-medium">{active.author}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{active.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-0.5 w-10 rounded-full transition-colors duration-500 ${
                i === current ? "bg-foreground" : "bg-foreground/15 hover:bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
