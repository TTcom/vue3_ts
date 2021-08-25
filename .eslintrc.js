module.exports = {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint"
    ],
    "globals":{
        "GetGlobalMsg":"writable"
    },
    "parserOptions": {
      "ecmaVersion": 2020
    },
    rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-non-null-assertion": 0,  
        "@typescript-eslint/no-unused-vars": 0,  
        "no-redeclare": 0,
        "vue/no-multiple-template-root":0  
      }
}