import { useSyncExternalStore } from "react";

export default function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
