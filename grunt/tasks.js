/*
 * ## desc:
 * That is a list of grunt tasks
 * Include some tasks above
 *
 * ## list:
 * connect: 			sever connect include port,hostname
 * watch: 				watch sever,watch some file change and livereload
 * less:					compile .less file
 *
 * ## How to use:
 * var ts = require('.path/to/tasks.js') // can omit .js
*/
module.exports = {
	// 服务器
	connect: {
		options: {
			port: 9000,
			open: true,
			livereload: 35729,
			// Change this to '0.0.0.0' to access the server from outside
			// hostname: 'aji.com'
			hostname: '127.0.0.1'
		},
		server: {//开启服务器模块，并进行监听
			options: {
				port: 9001,
				base: './'
			}
		}
	},

	// 监听服务
	watch: {
		// scripts: {},
		// sass: {},
		less: {
			files: ['./styles/less/index.less'],
			tasks: ['less']
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: ['index.html', './styles/css/*', './scripts/*']
		}
	},

	// less 配置
	less: {
		options: {
			// paths: ['./less']
		},
		dev: {
			src: './styles/less/index.less',
			dest: './styles/css/index.css'
		}
	}
}
