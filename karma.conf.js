// Karma configuration
// Generated on Sun Apr 14 2013 18:31:17 GMT+0200 (CEST)
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/ng-github.js',
      'tests/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
    singleRun: false
  });
};
