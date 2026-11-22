import { ImageResponse } from "next/og";
import { getService } from "@/data/services";
import { site } from "@/data/site";

export const alt = "Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  const title = service?.title ?? site.role;

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
          background: "linear-gradient(135deg, #050a19 0%, #0b1a4a 100%)",
          color: "#f3f6ff",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#6fa3ff" }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 30, color: "#a3afcc" }}>{site.role}</div>
      </div>
    ),
    { ...size },
  );
}
