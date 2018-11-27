Vue.component("footers",{
	template:"<footer class='weui-tab'><div class='weui-tabbar'><a href='javascript:;' class='weui-tabbar__item weui-bar__item_on'><span style='display: inline-block;position: relative;'><i class='fa fa-home'></i></span><p class='weui-tabbar__label'>首页</p></a><a href='javascript:;' class='weui-tabbar__item'><i class='fa fa-address-book'></i><p class='weui-tabbar__label'>分类</p></a><a href='javascript:;' class='weui-tabbar__item'><span style='display: inline-block;position: relative;'><i class='fa fa-search'></i></span><p class='weui-tabbar__label'>发现</p></a><a href='javascript:;' class='weui-tabbar__item'><span style='display: inline-block;position: relative;'><i class='fa fa-cart-plus'></i></span><p class='weui-tabbar__label'>购物车</p></a><a href='javascript:;' class='weui-tabbar__item'><i class='fa fa-user'></i><p class='weui-tabbar__label'>我的</p></a></div></footer>",
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