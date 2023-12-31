import { defineNuxtConfig } from "nuxt/config";
import { resolvePath } from "@nuxt/kit";

export default async () =>
    defineNuxtConfig({
        colorMode: {
            preference: "dark",
        },
        devtools: { enabled: false },
        css: ["~/assets/scss/global.scss"],
        alias: {
            "~/": await resolvePath("./src/"),
        },
        srcDir: "src/",
        modules: [
            "@pinia/nuxt",
            "nuxt-icon",
            "@nuxtjs/google-fonts",
            "@nuxtjs/eslint-module",
            "@nuxt/ui",
        ],
        googleFonts: {
            prefetch: true,
            preconnect: false,
            preload: true,
            useStylesheet: true,
            families: {
                Roboto: true,
                Oswald: [300, 400, 500],
                Raleway: [300, 400, 500, 600, 700, 800],
                Inter: [300, 400, 500, 600, 700, 800],
                Whisper: [400],
                "Bebas Neue": [400],
            },
        },
        appConfig: {
            ui: {
                primary: "violet",
                gray: "slate",
            },
        },
    });
