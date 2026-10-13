"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const planLabels: Record<string, string> = {
  starter: "Starter Sprint",
  growth: "Growth Sprint",
  max: "Max Sprint",
  launch: "Launch retainer",
  scale: "Scale retainer",
  enterprise: "Enterprise",
};

export function ContactForm({ initialPlan }: { initialPlan?: string }) {
  const planLabel = initialPlan ? planLabels[initialPlan] : undefined;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Network error — check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[28px] bg-white p-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-[#30d158]" />
        <h2 className="mt-5 text-xl font-semibold tracking-tight">Request received.</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          We'll get back to you within 24 hours. Want to add something?
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[#0071e3] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-shadow";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-[28px] bg-white p-8 md:p-10"
      noValidate={false}
    >
      {planLabel && (
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-[#0071e3]/10 px-3 py-1 text-xs font-medium text-[#0071e3]">
            Reserving: {planLabel}
          </span>
          <input type="hidden" name="plan" value={planLabel} />
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            enterKeyHint="next"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Your company"
          className={inputClass}
        />
      </div>

      {/* Honeypot — hidden from humans, catnip for bots */}
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What are you building, and by when?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          aria-live="polite"
          className="mt-4 rounded-xl bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#0071e3] py-3.5 text-[15px] font-medium text-white transition-all hover:bg-[#0077ed] active:scale-[0.99] disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Request a call"
        )}
      </button>
    </form>
  );
}
