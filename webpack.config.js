path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/js/sandbox.js"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          // cacheDirectory: true,
          presets: ["@babel/preset-env", "babel-preset-airbnb"],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-transform-runtime",
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist/assets/js"),
    // filename: "bundle.js",
    filename: "sandbox.js",
    // chunkFilename: "[name].bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/assets/js",
  },
  // externals: {
  // 	jquery: 'jQuery'
  // },
  // plugins: [
  // 	// Set dependencies in global scope
  // 	// https://webpack.js.org/plugins/provide-plugin/
  // 	new webpack.ProvidePlugin({
  // 		$: 'jquery',
  // 		jQuery: 'jquery'
  // 	})
  // ]
};
