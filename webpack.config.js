const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ['./src/main.ts'],
  target: 'node',
  externals: [
    nodeExternals({
      allowlist: [],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        '.env', 'package.json', 'package-lock.json', '*.md'
      ]
    })
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
  },
};