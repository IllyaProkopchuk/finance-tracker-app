import commonjs from 'vite-plugin-commonjs'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [commonjs(), react(), svgr()]
})
