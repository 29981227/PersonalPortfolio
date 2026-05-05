import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  const virtualFigmaAssetPrefix = '\0figma-asset:'

  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return `${virtualFigmaAssetPrefix}${filename}`
      }
    },
    load(id) {
      if (id.startsWith(virtualFigmaAssetPrefix)) {
        const filename = id.replace(virtualFigmaAssetPrefix, '')
        const label = filename.replace(/\.[^.]+$/, '').slice(0, 12)
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="#f7f3ee"/><rect x="64" y="64" width="1472" height="872" rx="36" fill="#6d9773" opacity="0.14"/><text x="120" y="875" fill="#2d2a26" font-family="Arial, sans-serif" font-size="56" font-weight="700">${label}</text></svg>`
        return `export default ${JSON.stringify(`data:image/svg+xml,${encodeURIComponent(svg)}`)}`
      }
    },
  }
}


export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
