import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Maps figma:asset/hash.ext → /public/logo.png for production builds
const figmaAssetMap: Record<string, string> = {
  '135f0bbbb51f7cb406b971dd0e7b14505df17d22.png': '/logo.png',
  '2cbc1301df753f5e26b2fe89348e20ab8d914ed9.png': '/logo.png',
};

function figmaAssetPlugin() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '');
        const mapped = figmaAssetMap[filename] ?? '/logo.png';
        // Return as virtual module
        return '\0figma-asset:' + mapped;
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma-asset:')) {
        const assetPath = id.replace('\0figma-asset:', '');
        // Export the public URL string as default
        return `export default "${assetPath}";`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})