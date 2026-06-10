import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles.css";

import { getRouter } from "./router";

const { router, queryClient } = (() => {
  const r = getRouter();
  return { router: r, queryClient: r.options.context.queryClient };
})();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Track SPA navigations as GA page_view events (initial load is sent by gtag config).
router.subscribe("onResolved", ({ toLocation }) => {
  window.gtag?.("event", "page_view", {
    page_path: toLocation.pathname,
    page_location: window.location.href,
  });
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root not found");
createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
