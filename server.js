const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')

const server = new WebpackDevServer(webpack(config), {
  contentBase: './src',
  noInfo: true,
  inline: true,
  historyApiFallback: true
})

server.listen(3000, '192.168.1.112')
