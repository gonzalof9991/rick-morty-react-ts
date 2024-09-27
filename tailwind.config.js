import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
    important: false,
    darkMode: 'selector',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            primary: '#666EE8',
            ...colors,
        },
        extend: {},
        screens: {
            'xs': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [],
}

