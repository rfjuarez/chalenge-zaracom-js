// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest/globals': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'files': ['test/**'],
      'plugins': ['jest'],
      'extends': ['plugin:jest/recommended'],
      'rules': { 'jest/prefer-expect-assertions': 'off' }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jest',
  ],
  'rules': {
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    'react/prop-types': 0,
    'indent': ['error', 2],
    'linebreak-style': 1,
    'quotes': ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/no-unknown-property': ['error', { ignore: ['css'] }]
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
    'jest': {
      'version': 'detect',
      'globalAliases': {
        'describe': ['context'],
        'fdescribe': ['fcontext'],
        'xdescribe': ['xcontext']
      }
    },
  },
}
