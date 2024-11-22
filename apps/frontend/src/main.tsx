import { StrictMode } from "react"
import { createRoot } from "react-dom/client";

import "@fontsource-variable/open-sans";
import "@fontsource-variable/roboto-flex";
import "@fontsource-variable/material-symbols-outlined";

import "./styles/theme.css";
import "./styles/reset.css";
import "./styles/lenis.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}


createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
