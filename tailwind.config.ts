// tailwind.config.ts
import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        'pink': 'var(--color-pink)', // Viittaa suoraan CSS-muuttujaan
        'blue': 'var(--color-blue)', // Viittaa suoraan CSS-muuttujaan
      },
    },
  },
};
export default config;
