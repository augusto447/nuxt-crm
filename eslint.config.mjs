module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
