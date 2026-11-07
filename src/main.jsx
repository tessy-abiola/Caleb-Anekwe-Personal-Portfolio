import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";

import "./index.css";
import App from "./App.jsx";

// Smooth scrolling — skipped for visitors who prefer reduced motion.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ duration: 1.1 });
  window.__lenis = lenis;
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
