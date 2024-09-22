import { useEffect } from "react";

export const useServiceWorker = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then(
          (registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          },
          (err) => {
            console.error("ServiceWorker registration failed: ", err);
          }
        );
      });
    }
  }, []);
};
