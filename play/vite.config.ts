import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { join } from "node:path"
// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [vueJsx(), vue()],
  resolve: {
    alias: [
      {
        find: /^@suite-kit\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1'),
      }
    ],
  }
})
