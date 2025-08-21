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
