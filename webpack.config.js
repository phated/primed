'use strict';

var path = require('path');

module.exports = {
  entry: path.join(__dirname, './components/index.js'),
  output: {
    libraryTarget: 'umd',
    library: 'primed',
    path: __dirname,
    filename: 'index.js'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
