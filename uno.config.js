import { defineConfig,presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      }
    })
  ]
})