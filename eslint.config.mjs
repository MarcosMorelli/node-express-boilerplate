import globals from "globals"
import pluginJs from "@eslint/js"
import pluginJest from "eslint-plugin-jest"
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import pluginSecurity from "eslint-plugin-security"
import pluginSonarjs from "eslint-plugin-sonarjs";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginSecurity.configs.recommended,
  pluginSonarjs.configs.recommended,
  pluginPrettierRecommended,
  pluginJs.configs.recommended,
  { 
    languageOptions: { 
      globals: globals.node 
    }
  },
  { 
    ignores: [ "eslint.config.mjs", "init-mongo.js" ] 
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      sourceType: "commonjs" 
    },
    rules: {
      "no-param-reassign": "off",
      "no-unused-vars": "off",
      "security/detect-object-injection": "off",
      "sonarjs/cors": "off",
      "sonarjs/no-clear-text-protocols": "off",
    }
  },
  {
    files: ['tests/**/*.js'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "sonarjs/no-hardcoded-passwords": "off",
    }
  },
];