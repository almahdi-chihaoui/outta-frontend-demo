const path = require('path');
const webpack = require('webpack');

const entryFile = path.resolve(__dirname, 'src', 'index.tsx');
const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    entryFile,
  ],
  output: {
    filename: 'bundle.js',
    path: outputDir,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: { loader: 'awesome-typescript-loader' },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  mode: 'development',
};
