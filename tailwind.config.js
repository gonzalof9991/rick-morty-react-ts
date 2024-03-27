import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            primary: '#666EE8',
            secondary: '#6697E8',
            warning: '#ff3838',
            ...colors,
        },
        extend: {},
    },
    plugins: [],
}

