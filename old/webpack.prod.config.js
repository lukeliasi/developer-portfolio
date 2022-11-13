const webpackPaths = require("./webpack.paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  entry: webpackPaths.entry,
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: webpackPaths.output,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
};
