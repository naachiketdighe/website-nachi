// // import type { Config } from "tailwindcss";

// // export default {
// //   content: [
// //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "var(--background)",
// //         foreground: "var(--foreground)",
// //       },
// //     },
// //   },
// //   plugins: [],
// // } satisfies Config;

// import type { Config } from 'tailwindcss'
 
// export default {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
 
//     // Or if using `src` directory:
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily: {
       primary: ["Inter"]
     }
    },
  },
  plugins: [],
};