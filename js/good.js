Vue.component('good', {
				template: "<div class='product'><a :href='\"/product?id=\"+id'><div class='product-image'><img :src='image'></div>\
							<div class='product-title' v-text='title'></div>\
							<div class='product-info clear'>\
								<div class='product-price left'>￥<span v-text='price'></span></div>\
								<div class='product-similar right'><button class='btntj' v-text='similar'></button></div>\
							</div>\
							<div class='similar-info'></div>\
							</a>\
						</div>",

				data: function() {
					return {};
				},
//				props: ['title', 'image', 'price', 'id'],
				props: {
					title: {
						type: String,
						default: '商品标题',
						required: false
					},image: {
						type: String,
						default: './img/default.png',
						required: false
					},price: {
						type: Number,
						default: 0.00,
						required: true
					},id: {
						type: Number,
						default: 0,
						required: true
					},similar: {
						type: String,
						default: '看相似',
						required: true
					},
				},
			});
			
			var app = new Vue({
				el: "#app",
				data: {
					products: [{
						price: 0.00,
						id: 1
					}, {
						title: '连衣裙2018秋冬新款女装秋天两件套套装裙长袖秋冬装女韩版修身时尚裙子套装女大码秋冬季 图片 L',
						image: 'img/dress.jpg',
						price: 185.99,
						id: 2
					}, {
						title: '雀巢(Nestle) 丝滑拿铁口味 即饮雀巢咖啡饮料 268ml*3瓶 3联包',
						image: 'img/quechao01.jpg',
						price: 13.99,
						id: 2
					},{
						title: '贝思客 一见倾心 蛋糕 心形INS风水果奶油求婚创意生日 蛋糕  经典款',
						image: './img/bsk02.jpg',
						price: 199.00,
						id: 3
					}, {
						title: '戴尔DELL全新XPS13.3英寸超轻薄窄边框4K触控屏笔记本电脑白色硅纤维(i7-8550U 16G 512G UHD 指纹识别)金',
						image: './img/DELL01.jpg',
						price: 12999.00,
						id: 4
					}, {
						title: '03-OPPO Find X手机【6期免息】双曲面全景屏 8G运存+128G/256G内存双卡双待全网通 波尔多红（标准版）8GB+128GB',
						image: 'img/MicrosoftSurfaceBook.webp',
						price: 7999.00,
						id: 5
					}, {
						title: 'Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机',
						image: 'img/iphoneX.webp',
						price: 8999.00,
						id: 5
					},]
				},
				methods: {},
				computed: {},
				watch: {},
				mounted:function() {},
				created:function() {},
			});