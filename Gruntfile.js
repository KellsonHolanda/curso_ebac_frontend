module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    './dev/styles/main.css': './src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    './dev/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        replace:{
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['./index.html'],
                        dest: './dev',
                    }
                ]
            }
        },
        htmlmin:{
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './dev/index.min.html': './index.html'
                }
            }
        },
        uglify:{
            target:{
                files: {
                    './dev/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        }

    })
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['less', 'replace:dev', 'htmlmin:dev', 'uglify']);
}