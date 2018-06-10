const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    library: 'reactOxygenUiKit',
    libraryTarget: "commonjs2",
    libraryExport: "default"
  },
  target: 'web',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[local]!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};
