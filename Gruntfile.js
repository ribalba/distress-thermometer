module.exports = function (grunt) {

    var vendors = 'jquery backbone backbone.marionette backbone.localstorage'.split(' ');

    grunt.initConfig({
        clean: ['www'],

        browserify: {
            // just the app
            app: {
                src: 'src/app.js',
                dest: 'www/js/app.js',
                options: {
                    debug: true,
                    extensions: ['.hbs'],
                    transform: ['hbsfy'],
                    external: vendors
                }
            },
            // just vendors
            vendors: {
                files: {
                    'www/js/vendors.js': []
                },
                options: {
                    'require': vendors
                }
            },
            // bundle all in one
            bundle: {
                src: 'src/app.js',
                dest: 'www/js/bundle.js',
                options: {
                    extensions: ['.coffee', '.hbs'],
                    transform: ['coffeeify', 'hbsfy']
                }
            }
        },

        // produce index.html by target
        targethtml: {
            dev: {
                src: 'src/index.html',
                dest: 'www/index.html'
            },
            prod: {
                src: 'src/index.html',
                dest: 'www/index.html'
            }
        },

        copy: {
            semantic: {
              expand: true,
              cwd: 'semantic/dist/',
              src: '**',
              dest: 'www/sematic'
            }
          },


        uglify: {
            bundle: {
                src: 'www/bundle.js',
                dest: 'www/js/bundle.js'
            }
        },

        stylus: {
            'dev': {
                options: {
                    compress: false
                },
                src: ['assets/css/app.styl'],
                dest: 'www/css/app.css'
            },
            'prod': {
                options: {
                    compress: true
                },
                src: ['assets/css/app.styl'],
                dest: 'www/css/app.css'
            }
        },

        autoprefixer: {
            compile: {
                src: 'www/css/app.css',
                dest: 'www/css/app.css'
            }

        },

        watch: {
            options: {
                livereload: true,
                spawn: false,
                interrupt: true
            },
            src: {
                files: ['src/**/*', '!src/index.html', 'assets/css/*.styl', 'assets/css/**/*.styl'],
                tasks: ['browserify:app', 'stylus:dev', 'autoprefixer'],
            },
            index: {
                files: ['src/index.html'],
                tasks: ['targethtml:dev']
            },
            assets: {
                files: ['assets/**/*']
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '127.0.0.1',
                    base: 'www',
                    open: true,
                    useAvailablePort: true,
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('builddev', ['clean', 'browserify:app', 'browserify:vendors', 'targethtml:dev', 'stylus:dev', 'copy:semantic']);
    grunt.registerTask('buildprod', ['clean', 'browserify:bundle', 'uglify', 'targethtml:prod', 'stylus:prod', 'autoprefixer', 'copy:semantic']);
    grunt.registerTask('run',   ['builddev', 'connect', 'watch']);

};
