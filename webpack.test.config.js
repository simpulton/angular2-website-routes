var webpack = require('webpack'),
    path = require('path');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  // the difference from the main webpack config
  // is that we have removed "debug", "entry", "output", and "devServer" configs
  // and moved the source map loader from "preloaders" to "loaders"
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "source-map-loader", exclude: [ root('node_modules/rxjs') ]},
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { test: /\.(html|css)$/, loader: 'raw-loader' }
    ]
  }
};
