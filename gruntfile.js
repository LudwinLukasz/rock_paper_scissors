module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },
  sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass','jshint']);

};