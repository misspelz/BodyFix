import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" //from @types/node installed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]
  }
  // resolve: {
  //   alias: {
  //     '@': '/src',
  //   },
  // },
})
