var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      style: './src/javascripts/index.js'
    },
    output: {
      path: path.resolve(__dirname, './public/javascripts/'),
      filename: 'bundle.js'
    },
    target: "node",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'source-map'
  },
  {
    entry: {
      style: './src/stylesheets/style.scss'
    },
    output: {
      path: path.resolve(__dirname, './public/stylesheets'),
      filename: '[name].css'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: 'css-loader'
            }
          )
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: 'css-loader!sass-loader'
            }
          )
        }
      ]
    },
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  }
];
