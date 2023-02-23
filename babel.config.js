module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.native.ts',
          '.native.tsx',
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '#assets': ['./app/assets'],
          '#components': ['./app/components'],
          '#navigation': ['./app/navigation'],
          '#redux': ['./app/redux'],
          '#screens': ['./app/screens'],
          '#services': ['./app/services'],
        },
      },
    ],
  ],
};
