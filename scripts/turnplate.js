
define(['jquery', 'jquery.rotate'], function($, jqRotate){
	// 奖品列表
	let turnplate = {
		num: 1,										// 剩余抽奖次数
		prize:-1,									// 奖品
		bRotate:false,						// false:停止;true:旋转
		restaraunts: ['谢谢参与', '现金卷50元', '现金卷100元', '200m流量', '10元话费', '球衣'],				//大转盘奖品名称 编号 0--5
		getPrize: function () {		// 获取奖品
			var data = {index:6}		// 模拟数据返回
			rotateFn(data.index, turnplate.restaraunts[data.index-1]);
		}
	};

	// 转动奖品
	let rotateFn = (item, callback) => {
		var angles = item * (-60)
		$('#wheelcanvas2').stopRotate();
		$('.turnplate .prize').stopRotate();
		$('#wheelcanvas2').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:8000,
			callback:function (){
				if (typeof callback === 'function') {
					callback()
				}
			}
			});
		$('.turnplate .prize').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:8000
		})
	}

	// 抽奖
	let getPrize = (index) => {
		turnplate.bRotate = !turnplate.bRotate;
		turnplate.prize = index;
		rotateFn(index);
	}

	return {
		turnplate: turnplate,
		rotateFn: rotateFn,
		getPrize: getPrize
	};
});

