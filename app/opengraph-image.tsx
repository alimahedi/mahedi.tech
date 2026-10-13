import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.legalName} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          color: "#f5f5f7",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 20, height: 20, borderRadius: 9999, backgroundColor: "#2997ff" }} />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 34, letterSpacing: 6, color: "#86868b" }}>
            14-DAY MVP STUDIO
          </div>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
            Zero to one,
          </div>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -3, color: "#2997ff" }}>
            fast.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#86868b" }}>
          <div style={{ display: "flex" }}>Strategy · Design · Engineering</div>
          <div style={{ display: "flex", color: "#f5f5f7" }}>Live in fourteen days</div>
        </div>
      </div>
    ),
    size,
  );
}
