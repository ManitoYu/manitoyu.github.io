const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('app.css')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://192.168.1.112:3000',
    './src'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  target: 'web',
  context: __dirname,
  module: {
    loaders: [
      { test: /\.(tsx|ts)$/, loaders: ['ts'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: extractCSS.extract(['css', 'postcss', 'sass']), exclude: /node_modules/ },
      { test: /\.css$/, loader: extractCSS.extract(['css', 'postcss']) },
      { test: /\.(png|jpg|gif|woff|woff2|svg|ttf)$/, loader: `url-loader?limit=${8192 * 3}` },
    ]
  },
  postcss: [autoprefixer],
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true
      }
    }),
    new CompressionPlugin({
      asset: '[path].gzjs',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.NODE_ENV) }
    }),
    new webpack.ProvidePlugin({
    })
  ]
}
