var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
      }
    ]
  }
};
