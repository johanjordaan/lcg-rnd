module.exports = (grunt) => {
   grunt.initConfig ({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
         },
         dist: {
            files: {
               'dist/<%= pkg.name %>.min.js': ['./<%= pkg.name %>.js'],
            },
         },
      },
      mochaTest: {
         test: {
            options: {
               reporter: 'dot',
            },
            src: ['test/**/*.js'],
         },
      },
   });

   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-mocha-test');


   grunt.registerTask('test', ['mochaTest']);
   grunt.registerTask('default', ['test','uglify']);

};
