/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

// 目标时间：2023-04-13 09:32
const targetTime = new Date('{{时间}}');

function timeElapse(date){
	// var current = Date();
	// var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	// var days = Math.floor(seconds / (3600 * 24));
	// seconds = seconds % (3600 * 24);
	// var hours = Math.floor(seconds / 3600);
	// if (hours < 10) {
	// 	hours = "0" + hours;
	// }
	// seconds = seconds % 3600;
	// var minutes = Math.floor(seconds / 60);
	// if (minutes < 10) {
	// 	minutes = "0" + minutes;
	// }
	// seconds = seconds % 60;
	// if (seconds < 10) {
	// 	seconds = "0" + seconds;
	// }

	// var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";

    // 计算时间差（以毫秒为单位）
    const diff= new Date().getTime() - targetTime.getTime();
    // 转换时间差为天数、小时数、分钟数和秒数
    const days= Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours= Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes= Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds= Math.floor((diff % (1000 * 60)) / 1000);
    // 打印时间差
    $("#clock").html(`第 ${days}天 ${hours}时 ${minutes}分 ${seconds}秒`);
}
