module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react-hooks", "simple-import-sort"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": "error",
    "prefer-const": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  ignorePatterns: [".eslintrc.js"],
};
