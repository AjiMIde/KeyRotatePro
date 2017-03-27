module.exports = function(grunt) {
	// 加载任务
	var ts = require('./grunt/tasks')

	// 插件加载函数
	let gruntPlugins = ['less', 'connect', 'watch']
	var loadGrunt = (param) => {
		for (let item of param) {
			grunt.loadNpmTasks('grunt-contrib-' + item);
		}
	}

	// 配置任务
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
		' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// 任务
		less: ts.less,
		connect: ts.connect,
		watch: ts.watch
	});

	// 加载插件
	loadGrunt(gruntPlugins)

	//注册主任务
	grunt.registerTask('default', ['less', 'connect', 'watch']);
	grunt.registerTask('doLess', ['less']);
};