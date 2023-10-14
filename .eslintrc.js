module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:tailwindcss/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": ['*.ts', '*.tsx', '*.js'],
            "parser": '@typescript-eslint/parser',
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off",
        "camelcase": "error",
        "spaced-comment": "error",
        "quotes": ["error"],
        "no-duplicate-imports": "error",
    }
}
