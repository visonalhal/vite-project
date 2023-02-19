module.exports = {
  "*.{md,css}": "prettier --list-different --ignore-unknown --write",
  "**/*.{ts?(x)}": ["pnpm tsc", "pnpm lint"],
  "**/*.{js?(x)}": ["pnpm lint"],
}
