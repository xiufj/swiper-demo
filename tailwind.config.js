/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#4096ff', // 蓝色
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 禁止默认预设样式
  },
}

