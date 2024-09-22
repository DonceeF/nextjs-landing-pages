// src/app/components/ServiceWorkerRegistration.tsx
"use client";
import React, { useEffect } from "react";

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.log("Service Worker registration failed:", error);
        });
    }
  }, []);

  return null;
};

export default ServiceWorkerRegistration;
