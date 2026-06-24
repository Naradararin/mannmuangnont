import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  // Allowlist every quality passed to next/image (default is [75] only).
  // In use: 30 (thep-rak-49 thumbs), 85, 90 (hero); 75 covers unannotated images.
  images: {
    qualities: [30, 75, 85, 90],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
