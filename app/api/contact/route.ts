import { NextResponse } from "next/server";
import { z } from "zod";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  company: z.string().trim().max(120).optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(2000),
  plan: z.string().trim().max(60).optional().default(""),
  // Honeypot — accepted here so bots reach the silent-drop branch below.
  website: z.string().max(200).optional().default(""),
});

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

async function storeSubmission(entry: Record<string, unknown>) {
  const dir = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "submissions.jsonl"), JSON.stringify(entry) + "\n", "utf8");
}

async function notifyByEmail(entry: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Mahedi Tech <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "hello@atomiclabs.space"],
      subject: `New project inquiry — ${entry.name}`,
      text: [
        `Name: ${entry.name}`,
        `Email: ${entry.email}`,
        `Company: ${entry.company || "—"}`,
        `Interested in: ${entry.plan || "General"}`,
        "",
        entry.message,
      ].join("\n"),
    }),
  });
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests — try again in a few minutes." },
        { status: 429 },
      );
    }

    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Honeypot filled: pretend success so bots move on, store nothing.
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    const entry = { ...data, receivedAt: new Date().toISOString(), ip };

    try {
      await storeSubmission(entry);
    } catch (storageError) {
      console.error("Failed to persist submission:", storageError);
    }

    try {
      await notifyByEmail(entry);
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong on our side. Please email hello@atomiclabs.space instead." },
      { status: 500 },
    );
  }
}
