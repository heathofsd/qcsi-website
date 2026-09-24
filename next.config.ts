import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The weekend's digital booklet is one self-contained HTML file, built
     outside this app (ventures/qcsi/invitational/2026/booklet/build.mjs in
     Heath's repo) and committed to public/booklet/index.html. Next serves
     public/ files only at their exact path, so this gives it the short
     address people type, scan and share. */
  async rewrites() {
    return [{ source: "/booklet", destination: "/booklet/index.html" }];
  },
};

export default nextConfig;
