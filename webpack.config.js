let webpack = require('webpack');
let path = require('path');

const DOCS_DIR = path.resolve(__dirname, 'docs');
const SRC_DIR = path.resolve(__dirname, 'src');

let config = {
  entry: `${SRC_DIR}/app/index.js`,
  output: {
    path: `${DOCS_DIR}/app`,
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;