/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // untuk Vite
    "./src/**/*.{js,ts,jsx,tsx}" // semua file dalam src
  ],
  darkMode: "class", // Tambahkan ini
  theme: {
    extend: {},                  // bisa tambahkan warna/font custom di sini
  },
  plugins: [],
}
