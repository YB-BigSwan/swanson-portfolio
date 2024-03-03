/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { VITE_FORM_KEY } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  define: {
    "import.meta.env.VITE_FORM_KEY": VITE_FORM_KEY,
  },
});
