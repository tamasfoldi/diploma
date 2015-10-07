// Karma configuration
// Generated on Tue Sep 29 2015 12:28:47 GMT+0200 (Közép-európai nyári idő )

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  'F:/Dokumentumok/BME/Diploma/Scripts/angular.js',
	  'F:/Dokumentumok/BME/Diploma/Scripts/angular-*.js',	  
	  'F:/Dokumentumok/BME/Diploma/Scripts/angular-ui/*.js', 
	  'F:/Dokumentumok/BME/Diploma/App/*.js',
	  'F:/Dokumentumok/BME/Diploma/Controllers/*.js', 	  
      'F:/Dokumentumok/BME/Diploma/Specs/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
