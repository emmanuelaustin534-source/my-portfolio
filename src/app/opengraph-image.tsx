import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #050a19 0%, #0b1a4a 70%, #1a4fc9 140%)",
          color: "#f3f6ff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#2f7bff",
              color: "#fff",
              fontSize: 40,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            E
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
          {site.hero.headline}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a3afcc" }}>{site.role}</div>
      </div>
    ),
    { ...size },
  );
}
