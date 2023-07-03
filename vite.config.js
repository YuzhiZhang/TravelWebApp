/**
 * @Description:
 * @author: ZhangYuzhi<email:zhangyuzhi1993@gmail.com>
 * @date: created on 2018/11/7
 */
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${path.resolve(
          __dirname,
          './src/assets/styles/variables'
        )}" @import "${path.resolve(
          __dirname,
          './src/assets/styles/mixins'
        )}"`,
      },
    },
  },
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/mock'),
      },
    },
  },
})
