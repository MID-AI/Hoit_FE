import type { Config } from "jest";
import nextJest from "next/jest.js";
import "whatwg-fetch";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(config);
