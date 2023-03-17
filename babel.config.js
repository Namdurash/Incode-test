module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@store': './src/store',
          '@components': './src/components',
          '@api': './src/api',
          '@navigation': './src/navigation',
          '@managers': './src/managers',
        },
      },
    ],
  ],
};
