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
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = [
  Object.assign(
    {
      target: 'electron-main',
      entry: { main: './app/main.js' }
    },
    config),
  Object.assign(
    {
      target: 'electron-renderer',
      entry: { ui: './app/ui.jsx' },
      plugins: [new HtmlWebpackPlugin()]
    },
    config)
];
