// src/app/layout.tsx
import { metadata } from "./metadata";

export { metadata };

import React from "react";
import { Inter } from "next/font/google";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import "./styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ServiceWorkerRegistration />
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
