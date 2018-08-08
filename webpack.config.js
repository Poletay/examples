const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.bundle.css',
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/images/**/*',
        to: `${__dirname}/dist/app/img`,
        flatten: true,
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0'],
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
    filename: 'main.js',
    path: `${__dirname}/dist/app/js`,
    publicPath: '/assets/js/',
  },
  performance: {
    hints: 'warning',
    assetFilter: assetFilename => assetFilename.endsWith('.css') || assetFilename.endsWith('.js'),
  },
  stats: 'errors-only',
};
