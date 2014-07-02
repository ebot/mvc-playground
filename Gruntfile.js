module.exports = function(grunt) {
  var path = require('path');

  // Project configuration.
  grunt.initConfig({
    express: {
      options: {
        port: 3000,
        hostname: '*'
      },
      livereload: {
        options: {
          server: path.resolve('./server'),
          livereload: false,
          serverreload: true,
          bases: ['./app']
        }
      }
    },
    bowerInstall: {
      target: {
        src: [ 'app/index.html' ],
        exclude: ['polymer.js']
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= express.options.port %>',
        options: {
          delay: 3000
        }
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-bower-install');

  // Define tasks.
  grunt.registerTask('default', ['bowerInstall', 'open', 'express']);
};

