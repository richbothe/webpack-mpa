// This configuration is specific to the development environment.
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    client: {
      overlay: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer'
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                  @import "node_modules/bootstrap/scss/functions.scss";
                  @import "src/assets/scss/bs-custom.scss";
                  @import "node_modules/bootstrap/scss/variables.scss";
                  @import "node_modules/bootstrap/scss/mixins.scss";
              `
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
