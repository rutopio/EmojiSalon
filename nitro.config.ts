import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "cloudflare-pages",
  minify: true,
  experimental: {
    openAPI: true,
  },
});
