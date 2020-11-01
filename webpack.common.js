module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif|ico|mp3)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'assets',
        },
      },
    ],
  },
  target: ['web', 'es5'],
};
