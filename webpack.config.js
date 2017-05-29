var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: [
      './src/javascripts/index.js',
      'react-mdl/extra/material.min.js'
    ],
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
    entry: [
      './src/stylesheets/style.scss',
      'react-mdl/extra/material.min.css'
    ],
    output: {
      path: path.resolve(__dirname, './public/stylesheets'),
      filename: 'style.css'
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
      new ExtractTextPlugin('style.css')
    ]
  }
];
