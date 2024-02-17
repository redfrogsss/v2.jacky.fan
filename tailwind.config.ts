import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontFamily: {
            outfit: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
            patrick_hand: [
                "var(--font-patrick-hand)",
                ...defaultTheme.fontFamily.sans,
            ],
            dosis: ["var(--font-dosis)", ...defaultTheme.fontFamily.sans],
            cabin_sketch: [
                "var(--font-cabin-sketch)",
                ...defaultTheme.fontFamily.sans,
            ],
        },
    },
    plugins: [
        require("daisyui"),
        plugin(function ({ addBase }: any) {
            addBase({
                html: { fontSize: "18px" },
            });
        }),
    ],
    // daisyUI config (optional - here are the default values)
    daisyui: {
        themes: [
            // "nord",
            {
                nord: {
                    ...require("daisyui/src/theming/themes")["nord"],
                    primary: "#0764CE",
                },
            },
            "sunset",
            // {
            //     winter: {
            //         ...require("daisyui/src/theming/themes")["winter"],
            //         primary: "#0764CE",
            //     },
            //     cupcake: {
            //         ...require("daisyui/src/theming/themes")["cupcake"],
            //         primary: "#016C71",
            //     },
            // },
            // "night",

            // "light",
            // "dark",
            // "bumblebee",
            // "emerald",
            // "corporate",
            // "synthwave",
            // "retro",
            // "cyberpunk",
            // "valentine",
            // "halloween",
            // "garden",
            // "forest",
            // "aqua",
            // "lofi",
            // "pastel",
            // "fantasy",
            // "wireframe",
            // "black",
            // "luxury",
            // "dracula",
            // "cmyk",
            // "autumn",
            // "business",
            // "acid",
            // "lemonade",
            // "coffee",
            // "dim",
        ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        // themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "night", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        // rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
};
export default config;
