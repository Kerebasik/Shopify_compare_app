const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../extensions/theme-extension/assets"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",

            options: {
              name: "images/[name].[ext]",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [
      ".*",
      ".js",
      ".jsx",
      ".scss",
      ".ts",
      ".tsx",
      ".css",
      ".png",
      ".svg",
      ".jpg",
    ],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "BlackJack",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
  },
  mode: "development",
};
