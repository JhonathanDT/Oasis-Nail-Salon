/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                spa: {
                    bg: '#FDFBF7',
                    primary: '#E5C1B3',
                    text: '#333333',
                    accent: '#A4B494'
                }
            }
        },
    },
    plugins: [],
}