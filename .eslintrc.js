module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["react-hooks", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
