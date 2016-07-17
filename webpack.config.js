var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/');
var APP_DIR = path.resolve(__dirname, 'src/index.js');

var config = {
  entry: APP_DIR,

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
       }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;
