module.exports = {
  plugins: ['testing-library'],
  rules: {
    'testing-library/prefer-user-event': [
      'error',
      {
        allowedMethods: [],
      },
    ],
  },
};
