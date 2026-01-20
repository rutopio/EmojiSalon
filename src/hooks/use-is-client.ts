/**
 * @fileoverview Hook to detect if code is running on the client side.
 * Useful for preventing hydration mismatches in SSR environments.
 */

import { useSyncExternalStore } from "react";

/**
 * Hook to check if the code is running on the client side.
 * Returns true on the client, false during SSR.
 * Uses useSyncExternalStore to ensure proper hydration behavior.
 *
 * @returns True if running on client, false during SSR.
 */
export default function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
