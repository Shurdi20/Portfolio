import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080808",
          fontSize: 92,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        S<span style={{ color: "#B8FF00" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
