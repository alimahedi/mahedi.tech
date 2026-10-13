"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { stats } from "@/lib/data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="bg-black py-28 text-white md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-white/10">
          {stats.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? "md:px-10" : "md:pr-10"}>
              <div className="text-5xl font-semibold tracking-tighter md:text-6xl xl:text-7xl">
                <Counter to={stat.to} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
