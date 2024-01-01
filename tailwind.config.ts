import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
  ,
}
export default config
