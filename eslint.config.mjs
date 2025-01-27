import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import * as typeScriptEsLintPlugin from "@typescript-eslint/eslint-plugin";
import eslint from "@eslint/js";

// ES 모듈 환경에서 현재 파일명과 디렉토리명 추출
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat를 사용하여 기존 ESLint 설정 확장
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typeScriptEsLintPlugin.configs.recommended,
});

export default [
  // 기본 ESLint 설정 확장
  eslint.configs.recommended,
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "google",
  ),
  {
    // 사용자 정의 규칙
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".ts", ".tsx", ".jsx", ".js"],
        },
      ],
      "no-plusplus": "off",
      "react/function-component-definition": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
        },
      ],
      "import/prefer-default-export": "off",
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
    },
  },
];
