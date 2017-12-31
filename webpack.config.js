const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      }
    ]
  }
};

module.exports = [
  Object.assign(
    {
      target: 'electron-main',
      entry: { main: './app/main.ts' }
    },
    config),
  Object.assign(
    {
      target: 'electron-renderer',
      entry: { ui: './app/ui.tsx' },
      plugins: [new HtmlWebpackPlugin()]
    },
    config)
];
