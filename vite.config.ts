import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//  don't forget to install types: npm i -D @types/node
import * as path from "path";
// or
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [react()],
});
