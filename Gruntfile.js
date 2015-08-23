module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        aglio: {
            your_target: {
                files: {
                    "docs/api_doc.html": ["docs/api_doc.md"]
                },
                options: {
                    theme: "default",
                    separator: "\n"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-aglio');
    grunt.registerTask('default', ['aglio']);
};