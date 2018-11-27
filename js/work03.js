//
Vue.component('headers', {
	template: "<header><div class='category'><i class='fa fa-category'></i></div><div class='search'><div class='tu01'><img src='img/002.png'></div><i class='fa fa-search'></i><input type='text' name='' id='' value=''></div><div class='login'><a href='#'>登录</a></div></header>",
});


var app = new Vue({
	el: '#app',
	data: {},
});
//底部切换
$(function() {
	$('.weui-tabbar__item').on('click', function() {
		$(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
	});
});