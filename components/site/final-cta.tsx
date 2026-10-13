import Link from "next/link";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="bg-black py-36 text-white md:py-48">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tighter md:text-7xl">
            Let's build something people remember.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-white/50 md:text-xl">
            Kickoff within 48 hours. Live in fourteen days.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition-transform hover:scale-[1.04] active:scale-95"
          >
            Book a free 30-min call
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
