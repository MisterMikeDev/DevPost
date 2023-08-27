module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["next/core-web-vitals", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        project: "./tsconfig.json",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-unused-vars": 0,
        "block-spacing": 2,
        "brace-style": 2,
        "comma-dangle": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        curly: 2,
        "dot-location": [2, "property"],
        "eol-last": 2,
        eqeqeq: 2,
        "func-call-spacing": 2,
        "handle-callback-err": 2,
        indent: [
            "error",
            4,
            {
                ArrayExpression: 1,
                CallExpression: {
                    arguments: "first"
                },
                FunctionDeclaration: {
                    parameters: "first"
                },
                FunctionExpression: {
                    parameters: "first"
                },
                MemberExpression: 1,
                offsetTernaryExpressions: true,
                SwitchCase: 1
            }
        ],
        "key-spacing": 2,
        "keyword-spacing": 2,
        "no-case-declarations": 0,
        "no-class-assign": 2,
        "no-console": 0,
        "no-constant-condition": 2,
        "no-debugger": 0,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-duplicate-imports": 2,
        "no-extra-parens": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-implicit-globals": 2,
        "no-multiple-empty-lines": 2,
        "no-obj-calls": 2,
        "no-undef": 2,
        "no-unused-vars": 2,
        "operator-linebreak": 2,
        quotes: [2, "double"],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        semi: 2,
        "space-infix-ops": 2
    }
};
