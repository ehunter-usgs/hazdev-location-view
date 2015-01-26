'use strict';

module.exports = (function () {
  var config = {
    browserify: require('./browserify'),
    clean: require('./clean'),
    compass: require('./compass'),
    connect: require('./connect'),
    copy: require('./copy'),
    jshint: require('./jshint'),
    mocha_phantomjs: require('./mocha_phantomjs'),
    watch: require('./watch'),

    tasks: [
      'grunt-browserify',
      'grunt-contrib-clean',
      'grunt-contrib-compass',
      'grunt-contrib-connect',
      'grunt-contrib-copy',
      'grunt-contrib-jshint',
      'grunt-mocha-phantomjs',
      'grunt-contrib-watch'
    ]
  };

  return config;
})();