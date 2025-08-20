module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-multiple-template-root": "off",
  },
};
