import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SVO Digital — Websites, Automation & AI Solutions";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#080808",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(184,255,0,0.16), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 96,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          SVO
          <span style={{ color: "#B8FF00" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            color: "#9E9E9E",
            letterSpacing: "-0.01em",
          }}
        >
          Websites. Automation. AI.
        </div>
      </div>
    ),
    { ...size }
  );
}
