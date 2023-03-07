module.exports = {
  entry: './user/index.js',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname),
    },
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
};
