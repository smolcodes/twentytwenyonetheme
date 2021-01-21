const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: "./src/_bundle/main.js",
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    filename: "main.bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
  ],
};