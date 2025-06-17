module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
  ],
  ignorePatterns: ["dist", ".next", "node_modules", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
  },
  plugins: ["react-refresh", "import"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "off",
    "import/no-unresolved": "error",
    "import/no-named-as-default": "warn",

    "@next/next/no-html-link-for-pages": "warn",
    "@next/next/no-img-element": "warn",
    "@next/next/no-page-custom-font": "warn",
    "@next/next/no-sync-scripts": "error",
  },
};
