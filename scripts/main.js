/**
 * Created by Administrator on 2017/2/28.
 */
require.config({
	baseUrl: '../..',		// 基路径
	paths: {
		"jquery": "node_modules/jquery/dist/jquery.min",
		"jquery.rotate": 'scripts/utils/awardRotate'
		// "underscore": "underscore.min",
		// "backbone": "backbone.min"
	}
});

require(['jquery'], function ($){
	window.setTimeout(() => {
		require(['scripts/turnplate'], function (Turnplate){
			console.log(aji = Turnplate)
		  Turnplate.getPrize(1)
		});
	}, 5000)
});

