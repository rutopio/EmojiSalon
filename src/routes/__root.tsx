/// <reference types="vite/client" />
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { EmojiProvider } from "@/contexts/emoji-context";

import type { QueryClient } from "@tanstack/react-query";

const TanStackDevtools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-devtools").then((m) => ({
        default: m.TanStackDevtools,
      }))
    )
  : () => null;

const ReactQueryDevtoolsPanel = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-query-devtools").then((m) => ({
        default: m.ReactQueryDevtoolsPanel,
      }))
    )
  : () => null;

const TanStackRouterDevtoolsPanel = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-router-devtools").then((m) => ({
        default: m.TanStackRouterDevtoolsPanel,
      }))
    )
  : () => null;

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <ThemeProvider>
        <EmojiProvider>
          <Outlet />
          <Toaster position="top-center" />
        </EmojiProvider>
        <Suspense>
          <TanStackDevtools
            plugins={[
              {
                name: "TanStack Query",
                render: <ReactQueryDevtoolsPanel />,
              },
              {
                name: "TanStack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </Suspense>
      </ThemeProvider>
    </>
  );
}
