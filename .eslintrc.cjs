module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        directory: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      extends: ["airbnb", "airbnb-typescript", "prettier"],
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
      rules: {
        "import/no-extraneous-dependencies": ["error", { devDependencies: ["**/*.config.ts"] }],
        "prettier/prettier": ["error"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", "tsx"] }],
      },
    },
  ],
}
