import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    exclude: ["@tanstack/start-server-core"],
  },
  plugins: [
    // https://tanstack.com/start/latest/docs/framework/react/guide/hosting
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    devtools(),
    tanstackStart({
      prerender: {
        // Enable static prerendering
        enabled: true,
      },
    }),
    // https://tanstack.com/start/latest/docs/framework/react/guide/hosting
    nitro(),
    viteReact({
      // https://react.dev/learn/react-compiler
      babel: {
        plugins: [
          [
            "babel-plugin-react-compiler",
            {
              target: "19",
            },
          ],
        ],
      },
    }),
    tailwindcss(),
  ],
});
