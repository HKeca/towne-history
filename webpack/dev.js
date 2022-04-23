const { merge } = require('webpack-merge');
const { common } = require('./common');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
};

const mergedConfig = [
  merge(common, devConfig),
];

module.exports = mergedConfig;
