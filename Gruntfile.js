/*
 *	grunt-compass-compiler
 *	https://github.com/mattacular/grunt-compass-compiler
 *
 *	Copyright (c) 2013 mstills
 *	Licensed under the MIT license.
 */
module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		// scripts to be linted
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/compass.js'
			]
		},
		compass: {
			'glob': {
				'files': {
					src: ['tests/modules/**/*']
				}
			},
			'specific': {
				'files': {
					src: ['tests/modules/rester', 'tests/modules/tester']
				}
			}
		},
		clean: {
			'css': {
				src: ['tests/modules/**/*.css']
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// lint and test before declaring a revision stable
	grunt.registerTask('default', ['jshint', 'clean:css', 'compass:glob']);
};