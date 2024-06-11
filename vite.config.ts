import MillionLint from '@million/lint';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
const _plugins = [react(), tsconfigPaths()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  base: "https://tulza.github.io/multi-step-form/",
  plugins: _plugins
});