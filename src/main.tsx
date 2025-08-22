import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles.css";

// Lazy-load pages (smaller initial bundle)
const Home     = React.lazy(() => import("./pages/Home"));
const About    = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact  = React.lazy(() => import("./pages/Contact"));
const Privacy  = React.lazy(() => import("./pages/Privacy"));
const Terms    = React.lazy(() => import("./pages/Terms"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Fallback = (
  <div className="container" style={{ padding: 24 }}>Loading…</div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Suspense fallback={Fallback}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={Fallback}><About /></Suspense> },
      { path: "services", element: <Suspense fallback={Fallback}><Services /></Suspense> },
      { path: "contact", element: <Suspense fallback={Fallback}><Contact /></Suspense> },
      { path: "privacy", element: <Suspense fallback={Fallback}><Privacy /></Suspense> },
      { path: "terms", element: <Suspense fallback={Fallback}><Terms /></Suspense> },
      { path: "*", element: <Suspense fallback={Fallback}><NotFound /></Suspense> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// =======================
// Global CTA click tracking
// Sends a GA event when any element with class="cta" or [data-track] is clicked.
// =======================

// Helper (tiny wrapper around gtag)
function track(event: string, params: Record<string, any> = {}) {
  // @ts-ignore - gtag is injected by index.html
  if (typeof window !== "undefined" && (window as any).gtag) {
    // @ts-ignore
    (window as any).gtag("event", event, params);
  }
}

// Event delegation on the whole document so it works for any page
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;

  const el = target.closest("[data-track], .cta") as HTMLElement | null;
  if (!el) return;

  const eventName = el.getAttribute("data-track") || "cta_click";
  const label =
    el.getAttribute("data-label") ||
    (el.textContent || "").trim().toLowerCase();

  track(eventName, {
    label,
    page_location: location.href,
    page_path: location.pathname,
    page_title: document.title,
  });
});
