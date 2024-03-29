const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets/images/**/*',
          to: `${__dirname}/dist/app/img`,
        },
      ]
    }),
  //  new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/'),
        options: {
          plugins: [
            '@babel/proposal-class-properties',
          ]
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  entry: ['./src/index.jsx', './src/scss/style.scss'],
  output: {
    filename: 'js/main.js',
    path: `${__dirname}/dist/app`,
    publicPath: '/assets/',
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 1700000,
    maxAssetSize: 1700000,
  },
  stats: 'errors-only',
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          reuseExistingChunk: true,
        },
      },
    },
  },
};
