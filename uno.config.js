import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetIcons({ /* options */}),
  ],
})
