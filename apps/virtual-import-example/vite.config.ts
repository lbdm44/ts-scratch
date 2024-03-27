import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

import { virtualSvgImports } from "@ts-scratch/virtual-svg-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), virtualSvgImports(), splitVendorChunkPlugin()],
});
