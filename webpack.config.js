var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './Client.jsx',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/public/js/',
    publicPath: '/js/',
    filename: 'bundle.min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
};
