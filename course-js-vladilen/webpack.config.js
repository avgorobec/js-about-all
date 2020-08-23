const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    watchContentBase: true,
    stats: 'minimal',
    clientLogLevel: 'warning'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}