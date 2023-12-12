module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    rules: {
        "prettier/prettier": "error",
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
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
        "plugin:prettier/recommended",
        "plugin:vue/recommended",
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
};
