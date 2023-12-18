module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    rules: {
        "prettier/prettier": "error",
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/multi-word-component-names": false,
    },
    globals: {
        $nuxt: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        "plugin:vue/recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
};
