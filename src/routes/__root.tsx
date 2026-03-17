/**
 * @fileoverview Root route component for EmojiSalon application.
 * Defines the root layout, metadata, and provides global context providers.
 */

/// <reference types="vite/client" />
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { EmojiProvider } from "@/contexts/emoji-context";
import appCss from "@/styles.css?url";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL } from "@/lib/constants";

import type { QueryClient } from "@tanstack/react-query";

/**
 * Root route configuration with context type.
 * Provides global layout, metadata, and context providers for all routes.
 */
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "EmojiSalon - Coloring Your Emoji",
      },
      {
        name: "description",
        content:
          "Customize your emoji colors with EmojiSalon! Create unique emoji variations and download as SVG or PNG.",
      },
      {
        name: "theme-color",
        content: "#e1e1e1",
      },
      {
        property: "og:site_name",
        content: "EmojiSalon",
      },
      {
        property: "og:title",
        content: "EmojiSalon - Coloring Your Emoji",
      },
      {
        property: "og:description",
        content:
          "Customize your emoji colors with EmojiSalon! Create unique emoji variations and download as SVG or PNG.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/social.png`,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "EmojiSalon - Coloring Your Emoji",
      },
      {
        name: "twitter:description",
        content:
          "Customize your emoji colors with EmojiSalon! Create unique emoji variations and download as SVG or PNG.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/social.png`,
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  component: RootComponent,
});

/**
 * Root component that wraps all routes with the root document.
 *
 * @returns Root component with outlet for child routes.
 */
function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

/**
 * Root document component that provides HTML structure and global providers.
 * Suppresses hydration warning since ThemeProvider updates the "dark" class.
 *
 * @param props - Component props.
 * @param props.children - Child components to render.
 * @returns Root HTML document with providers and devtools.
 */
function RootDocument({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <EmojiProvider>
            {children}
            <Toaster position="top-center" />
          </EmojiProvider>
        </ThemeProvider>

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

        <Scripts />
      </body>
    </html>
  );
}
