/**
 * @fileoverview Catch-all route that redirects to home page.
 * Handles any unmatched routes and redirects them to the root path.
 */

import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Catch-all route configuration.
 * Redirects all unmatched routes to the home page.
 */
export const Route = createFileRoute("/$")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
