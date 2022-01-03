const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.DefinePlugin({
    //   'process.env.WEATHER_API_KEY': JSON.stringify(process.env.WEATHER_API_KEY), // Little hack to pass the env var through to client.
    //   'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY)
    // })
  ]
};