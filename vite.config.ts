import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __DEFINES__: {}, // or actual definitions
    __BASE__: JSON.stringify("/"),
    __SERVER_HOST__: JSON.stringify("localhost"),
    __HMR_PROTOCOL__: JSON.stringify("ws"),
    __HMR_PORT__: JSON.stringify("8080"),
    __HMR_HOSTNAME__: JSON.stringify("localhost"),
    __HMR_BASE__: JSON.stringify("/"),
    __HMR_DIRECT_TARGET__: JSON.stringify("localhost:8080"),
    __HMR_TIMEOUT__: JSON.stringify(30000),
    __WS_TOKEN__: JSON.stringify(""),
    __HMR_ENABLE_OVERLAY__: JSON.stringify(true),
    __HMR_CONFIG_NAME__: JSON.stringify("vite-hmr-config")
  },
}));
