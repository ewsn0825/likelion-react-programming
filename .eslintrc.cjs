module.exports = {
  root: true,
<<<<<<< HEAD
  env: { browser: true, es2020: true, node:true },
=======
  env: { browser: true, es2020: true, node: true },
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
<<<<<<< HEAD
=======
    'react/prop-types': 'warn',
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
<<<<<<< HEAD
}
=======
};
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
