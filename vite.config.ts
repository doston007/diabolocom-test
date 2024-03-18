import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fg from 'fast-glob'

const files = fg.sync('nested/*.html')
const inputs = files.reduce((acc: Record<string, string>, path: string) => {
  const key = path.split('/')[1].split('.')[0]
  return {
    ...acc,
    [key]: resolve(__dirname, path)
  }
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        ...inputs
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
