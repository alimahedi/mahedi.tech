import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <section className="bg-white pb-16 pt-40 md:pb-20 md:pt-48">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/40">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tighter md:text-7xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
