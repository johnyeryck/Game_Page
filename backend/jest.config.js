export default {
  rootDir: ".",
  testMatch: ["**/tests/**/**.test.ts"],
  collectCoverage: true,

  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts", // ignora arquivos de declaração
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage/e2e",
  coverageReporters: "json",
  testEnvironment: "node",
};
