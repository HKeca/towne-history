const { merge } = require('webpack-merge');
const { common } = require('./common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, '..', 'templates/index.html')
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'dist'),
    },
    compress: true,
    port: 8000,
    hot: true,
  },
};

const mergedConfig = [
  merge(common, devConfig),
];

module.exports = mergedConfig;
