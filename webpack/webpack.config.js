const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.join(process.cwd(), "src", "index.js"),
  mode: "development",
  output: {
    path: path.join(process.cwd(), "public"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.svg$/,
        use: ["svg-url-loader"],
      },
      {
        test: /.(png|jpe?g)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new Dotenv(),
  ],
};
