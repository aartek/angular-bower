module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['build'],
                options: {
                    event: ['added', 'deleted']
                }
            }
        },
        wiredep: {
            task: {
                overrides: {
                    uikit: {
                        main: [
                            "css/uikit.min.css",
                            "js/uikit.min.js",
                            "js/core/*.js"
                        ]
                    }
                },
                src: 'app/index.html'
            }
        },
        includeSource: {
            options: {
                basePath: 'app',
                templates: {
                    html: {
                        js: '<script src="{filePath}"></script>',
                        css: '<link rel="stylesheet" type="text/css" href="{filePath}" />',
                    },
                }
            },
            myTarget: {
                files: {
                    'app/index.html': 'app/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-include-source');

    grunt.registerTask('build', ['wiredep', 'includeSource']);
    grunt.registerTask('watch-files', ['watch']);
    grunt.registerTask('default', ['build']);
};
