import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-black px-6 text-center text-white">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Error 404</p>
      <h1 className="mt-6 max-w-2xl text-balance text-5xl font-semibold leading-[1.05] tracking-tighter md:text-7xl">
        This page shipped without us.
      </h1>
      <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-white/50">
        The page you're looking for doesn't exist — but everything else is right where you left it.
      </p>
      <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-white px-7 py-3 text-[15px] font-medium text-black transition-transform hover:scale-[1.04] active:scale-95"
        >
          Back to home
        </Link>
        <Link href="/pricing" className="text-[15px] text-[#2997ff] hover:underline">
          See pricing
        </Link>
      </div>
    </main>
  );
}
