module.exports = function(config) {
  var webpackConfig = require('./webpack.test.config.js');

  config.set({
    basePath: '',
    frameworks: [ 'jasmine' ],
    files: [ { pattern: 'spec-bundle.js', watched: false } ],
    preprocessors: { 'spec-bundle.js': ['webpack', 'sourcemap'] },
    webpack: webpackConfig,
    webpackServer: { noInfo: true },
    reporters: [ 'spec' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'PhantomJS' ],
    singleRun: true
  });
};
