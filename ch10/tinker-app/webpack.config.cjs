// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',  // your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // cleans dist/ folder before each build
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,  // handle CSS imports
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // handle image imports
        type: 'asset/resource',
      },
      {
        test: /\.js$/,  // transpile JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,  // auto-open browser
  },
};

