
module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif|ico|mp3)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "imgs"
        }
      }
    ]
  }
}