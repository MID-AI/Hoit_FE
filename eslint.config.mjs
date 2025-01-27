import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  // JavaScript/TypeScript 기본 설정
  js.configs.recommended,
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ),

  // 플러그인 설정
  ...compat.plugins(
    "import",
    "@typescript-eslint",
    "react",
    "prettier",
    "tailwindcss",
  ),

  // 글로벌 설정
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: (await import("@typescript-eslint/parser")).default,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...compat.env.browser,
        ...compat.env.node,
        ...compat.env.es6,
      },
    },
  },

  // 규칙 설정
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".ts", ".tsx", ".jsx", ".js"],
        },
      ],
      "react/require-default-props": "off",
      "no-plusplus": "warn",
      "react/function-component-definition": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "arrow-body-style": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
        },
      ],
      "import/prefer-default-export": "off",
      "import/no-cycle": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          assert: "htmlFor",
        },
      ],
      "require-jsdoc": "off",
    },
  },

  // 파일 무시 설정
  {
    ignores: ["build/**", "dist/**", "public/**"],
  },
];
