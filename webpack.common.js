// This configuration is shared between development (webpack.dev.js) and production (webpack.prod.js) environments.

// We use Node's built-in 'path module' and prefix it with '__dirname'. 
// This prevents file path issues between OS's and allows relative paths to work as expected.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
  "index",
  "about"
  // "contact"
];

module.exports = {
  // entry: './src/index.js',
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/i,
        include: path.resolve(__dirname, 'src/assets/img/icons'),
        exclude: /fonts/,
        type: 'asset',
        generator: {
          filename: 'assets/img/icons/[name].[contenthash:8].svg'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src/assets/img'),
        exclude: /icons/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/i,
        include: path.resolve(__dirname, 'src/assets/fonts'),
        exclude: /img/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash:8].[ext]'
        }
      },
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin()
  // ],
  plugins: [].concat(
    pages.map((page) => new HtmlWebpackPlugin({
      inject: true,
      template: `./src/${page}.html`,
      filename: `${page}.html`,
      chunks: [page],
      title: 'Webpack MPA'
    }))
  ),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@icons': path.resolve(__dirname, 'src/assets/img/icons/'), // For application icons
      '@img': path.resolve(__dirname, 'src/assets/img/'), // For application images
      '@scss': path.resolve(__dirname, 'src/assets/scss/')
    },
    extensions: ['*', '.js', '.scss', '.css']
  }
};
