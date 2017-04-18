const DEBUG = process.env.NODE_ENV !== "production";

let webpack = require('webpack');
let path = require('path');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

const DOCS_DIR = path.resolve(__dirname, 'docs');
const SRC_DIR = path.resolve(__dirname, 'src');

let plugins = [
  new ExtractTextPlugin('style.css'),
  new CleanWebpackPlugin(['docs'])
];

let config = {
  devtool: DEBUG ? "inline-sourcemap" : null,
  entry: {
    app: `${SRC_DIR}/app/index.js`,
    // admin: `${SRC_DIR}/admin/index.js`
  },
  output: {
    path: `${DOCS_DIR}/app`,
    filename: 'bundle.js',
    publicPath: '/app'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-2']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(jpg|png)$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]02.[ext]',
              outputPath: 'img/',
              publicPath: 'docs/'
            }
          }
        ]
      }
    ]
  },
  plugins: DEBUG ? plugins : [
                          new ExtractTextPlugin('style.css'),
                          new webpack.optimize.DedupePlugin(),
                          new webpack.optimize.OccurrenceOrderPlugin(),
                          new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
                        ]
};

module.exports = config;