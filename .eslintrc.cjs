module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json',
    'tsconfigRootDir': './'
  },
  plugins: [
    'react-refresh', 
    'import',
    'simple-import-sort',
    'replace-relative-imports',
  ],
  settings: {
    'import/resolver': {
      "typescript": {
        "alwaysTryTypes": true, 
        "project": './tsconfig.json',
      },

    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-namespace': 'off',

    // https://github.com/benmosher/eslint-plugin-import
    'import/no-default-export': ['warn'],
    'import/order': 'off',

    'simple-import-sort/imports': ['warn', {
      groups: [
        ['\\w'],
        ['src'],
        ['../'],
        ['./'],
      ],
    }],
    'simple-import-sort/exports': 'warn',
    'replace-relative-imports/replace': ['warn', {
      aliases: [
        {name: 'src', path: './src'},
      ],
    }],
  },
}
