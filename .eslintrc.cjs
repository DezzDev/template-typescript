module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	plugins: [
		"@typescript-eslint"
	],
	parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
	"extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked"
    ],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};