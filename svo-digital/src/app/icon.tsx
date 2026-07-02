import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          fontSize: 20,
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
