"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-black px-6 text-center text-white">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Something went wrong</p>
      <h1 className="mt-6 max-w-2xl text-balance text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
        That didn't go as planned.
      </h1>
      <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-white/50">
        An unexpected error occurred. Try again — or email hello@atomiclabs.space if it persists.
      </p>
      <button
        onClick={reset}
        className="mt-10 rounded-full bg-white px-7 py-3 text-[15px] font-medium text-black transition-transform hover:scale-[1.04] active:scale-95"
      >
        Try again
      </button>
    </main>
  );
}
