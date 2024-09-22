/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  swSrc: "public/service-worker.js",
  register: true,
  skipWaiting: true,
});

const nextConfig = {};

export default withPWA(nextConfig);
