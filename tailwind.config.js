/* eslint-disable jsdoc/check-tag-names */
/* global module */

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FFFFFF",
                secondary: "#222222",
                accent: "#00CC00",
            },
        },
    },
    plugins: [],
};
