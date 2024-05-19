import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-200': '#95C3FF',
        'blue-400': '#597599',
        'yellow-200': '#F2B95F',
        'yellow-400': '#FCE768',
      },
    },
  },
  plugins: [],
};
export default config;
