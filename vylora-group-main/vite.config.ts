// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Target Netlify Functions for SSR. Nitro emits .netlify/functions-internal/server.mjs
  // and the static client bundle that Netlify serves from `dist/`.
  // Note: Lovable's own preview/publish still forces the Cloudflare preset internally;
  // this preset takes effect on external builds (e.g. Netlify CI, local `vite build`).
  nitro: {
    preset: "netlify",
  },
});
