import webpack from 'webpack';
import path from 'path';

const APP_DIR = path.resolve(__dirname, 'app/');
const BUILD_DIR = path.resolve(__dirname, 'dist/');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }
};

export default config;