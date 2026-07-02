import type { NextConfig } from "next";

// Next.js App Router injects small inline bootstrap/hydration scripts and Tailwind
// relies on inline `style="..."` attributes for dynamic gradients/masks throughout
// this codebase, so 'unsafe-inline' is required here without wiring up a per-request
// nonce via middleware. For stricter CSP, generate a nonce in middleware.ts and thread
// it through script-src/style-src instead of 'unsafe-inline'.
//
// 'unsafe-eval' is only added in development: Next.js's dev server (Fast Refresh /
// webpack HMR) relies on eval() internally, and without it the app fails to run at
// all in `next dev` (though `next build && next start` is unaffected).
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
