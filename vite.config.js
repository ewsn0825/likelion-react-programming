<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
=======
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { env } from 'node:process';

const idDev = env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: idDev ? '[name]_[local]__[hash:base64:5]' : '[hash:base64:4]'
    }
  },
  resolve: {
<<<<<<< HEAD
    // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // alias: [
    //   { find: "@components", replacement: "/src/components" },
    //   { find: "@", replacement: "/src" },
    // ],
=======
    alias: {
      '@': resolve(__dirname, './src'),
    },
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
  },
});
