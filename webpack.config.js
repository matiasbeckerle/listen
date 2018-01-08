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
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
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
      plugins: [
        new HtmlWebpackPlugin({ template: './app/ui.html' })
      ]
    },
    config)
];
