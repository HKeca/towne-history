const path = require('path');

exports.common = {
  entry: './src/app.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: []
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
};
