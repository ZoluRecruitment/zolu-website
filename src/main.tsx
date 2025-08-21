import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./styles.css";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> }
  ]}
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
