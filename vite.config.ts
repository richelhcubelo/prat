// vite.config.ts
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "BISU",
        short_name: "App",
        description: "Your app description",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/path/to/bisu.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/path/to/bisu.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
