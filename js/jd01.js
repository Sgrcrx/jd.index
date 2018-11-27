//轮播图
			var images = $(".box ul");
			var points = [];
			var count = $(".box li").length;
			var index = 0;

			var first = $(".box li:first-child").clone(true);
			images.append(first);

			// 设置ul 的宽度，让他放下所有的li (count + 1)
			$(".box ul").width(400 * (count + 1));
			// 根据图片的数量添加状态点
			for(var i = 0; i < count; i++) {
				$(".points").append("<span></span>");
			}
			// 让所有的点居中
			$(".points").css("margin-left", -10 * count + 'px');

			// 给第一个点添加active
			points = $(".points span");
			points.eq(0).addClass("active");

			var t = setInterval(function() {

				index = (index + 1) % count;
				if(index == 0) {
					images.animate({
						left: -7.5 * count + 'rem'
					}, 500, function() {
						images.css('left', '0rem');
					});
				} else {
					images.animate({
						left: -7.5 * index + 'rem'
					}, 500, function() {});
				}
				points.removeClass("active").eq(index).addClass('active');

			}, 1500);

			//滚轮实现 搜索栏颜色变换
			$(document).scroll(function() {
				if($(this).scrollTop() > 10) {
					$("header").addClass('fixed');
				} else {
					$("header").removeClass('fixed');

				}
			});