// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ['~/assets/scss/global.scss'],
    modules: [
        [
            '@nuxtjs/google-fonts',
            {
                prefetch: true,
                preconnect: false,
                preload: true,
                useStylesheet: true,
                families: {
                    Roboto: true,
                    Oswald: [300, 400, 500],
                    Raleway: [300, 400, 500, 600, 700, 800],
                },
            },
        ],
    ],
});
