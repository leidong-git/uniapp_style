<template>
	<view class="type_cont">
		<IndexSwiper></IndexSwiper>

		<view class="type_introduce">
			<view class="new_pic">¥{{introduce.n_pic}}</view>
			<view class="old_pic">原价 ¥{{introduce.o_pic}}</view>
			<view class="pic_name">{{introduce.name}}</view>
			<view class="pic_goods">
				<view class="goods_list"><i class="iconfont icon-gou"></i>{{introduce.goods}}</view>
				<view class="goods_list"><i class="iconfont icon-gou"></i>{{introduce.time}}</view>
			</view>
		</view>

		<view class="type_del">
			<view class="type_del_item" v-for="(item,index) in type_del" :key="index">
				<image class="item_img" :src="`/static/image/Types/${item}`"></image>
			</view>
		</view>

		<view class="card_list">
			<view class="card_title">- 猜你喜欢 -</view>
			<CommodityList :commodity_data="commodity_data" itemW="250rpx" itemH="250rpx"></CommodityList>
		</view>

		<view class="shopping_popup" v-if="shopping_show" @touchmove.stop.prevent="">
			<view class="popup_mark" @tap="Hide_shopping()"></view>
			<view class="popup_cont" :animation="animationData">
				<view class="popup_detail">
					<image class="detail_img" src="../../static/image/3.jpg"></image>
					<view class="detail_pic">
						<view class="new_pic f_active_color">¥{{introduce.n_pic}}</view>
						<view class="old_pic">可购 {{introduce.total}}</view>
						<view class="pic_name">已选{{introduce.color_type}}</view>
					</view>
					<i class="iconfont icon-guanbi" @tap="Hide_shopping()"></i>
				</view>
				<view class="popup_color">
					<view class="popup_title">颜色分类</view>
					<view class="color_cont">
						<view class="color_item" :class="introduce_active == index ? 'active':''"
							@click="Color_item(index,item.name)" v-for="(item,index) in introduce.color_cont"
							:key="index">
							{{item.name}}
						</view>
					</view>
				</view>

				<view class="popup_num">
					<view class="popup_title">购买数量</view>
					<Uninumberbox :min="1" :max="introduce.total" :value="1" v-model="introduce.number"></Uninumberbox>
				</view>

				<button class="popup_qd" @click="Popup_buy()">确定</button>
			</view>
		</view>

		<view class="shopping_cart">
			<i class="iconfont icon-xinxi1"></i>
			<i class="iconfont icon-gouwuche"></i>
			<button class="add_cart" @tap="Show_shopping()">加入购物车</button>
			<button class="shopping" @tap="Show_shopping()">立即购买</button>
		</view>
	</view>

</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import CommodityList from '@/components/public/CommodityList.vue'
	import Uninumberbox from '@/components/uni/uni-number-box/uni-number-box.vue'
	export default {
		data() {
			return {
				introduce: {
					o_pic: '124.00',
					n_pic: '94.50',
					name: '[自营] Kappa/卡帕 女款运动长裤休闲裤卫裤K0922AK42-844',
					goods: '7天无理由',
					time: '48小时内发货',
					total: 100,
					color_type: '白色',
					number: '',
					color_cont: [{
						name: "白色",
						id: '0',
					}, {
						name: "黄色色",
						id: '1',
					}, {
						name: "红色",
						id: '2',
					}, {
						name: "天蓝色",
						id: '3',
					}, {
						name: "黑色",
						id: '4',
					}, {
						name: "紫色",
						id: '5',
					}]
				},
				introduce_active: 0,
				type_del: ['6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg'],
				commodity_data: [{
					img: '1.jpg',
					detail: "新华社北京2月9日电 题:新时代十年伟大变革奠定坚实基础——新征程上满怀信心开新局展新貌系列述评之四 新华社记者谭谟晓、姚均芳、刘羽佳 历经新时代十年伟大变革的中国,站...",
					price: '152.5',
					old_price: '254.3',
					discount: '5.5'
				}, {
					img: '2.jpg',
					detail: "满怀信心踏上新征程 阔步向前续写新篇章 中国共产党第二十次全国代表大会已经召开,大会报告让红谷滩区各界干部群众满怀信心,自信、喜悦和豪迈之情溢于言表。大家畅所欲言,纷...",
					price: '352.5',
					old_price: '654.3',
					discount: '5.5'
				}, {
					img: '3.jpg',
					detail: "党的二十大举旗定向、继往开来、指路领航,提出了新征程中心任务。新的赶考路上,我们要满怀信心、踔厉奋发,坚定不移推进高质量跨越发展,以实干实绩谱写现代化...",
					price: '152.5',
					old_price: '204.3',
					discount: '9.5'
				}, {
					img: '1.jpg',
					detail: "前，多位海外侨胞在接受中央广播电视总台华语环球广播记者采访时表示，对中国式现代化新征程充满信心，将继续秉持情系桑梓的家国情怀拥抱新机遇，发挥融通...",
					price: '162.5',
					old_price: '354.3',
					discount: '6.5'
				}, {
					img: '3.jpg',
					detail: "党的二十大举旗定向、继往开来、指路领航,提出了新征程中心任务。新的赶考路上,我们要满怀信心、踔厉奋发,坚定不移推进高质量跨越发展,以实干实绩谱写现代化...",
					price: '152.5',
					old_price: '204.3',
					discount: '9.5'
				}, {
					img: '1.jpg',
					detail: "前，多位海外侨胞在接受中央广播电视总台华语环球广播记者采访时表示，对中国式现代化新征程充满信心，将继续秉持情系桑梓的家国情怀拥抱新机遇，发挥融通...",
					price: '162.5',
					old_price: '354.3',
					discount: '6.5'
				}, ],

				shopping_show: false,
				animationData: {},
			}
		},
		components: {
			IndexSwiper,
			CommodityList,
			Uninumberbox
		},
		onBackPress() {
			// 弹窗弹出默认返回上一层  修改为关闭弹窗
			if (this.shopping_show) {
				console.log(1111);
				this.Hide_shopping()
				return true
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.type == 'menu') {
				uni.showToast({
					success: "success",
					title: `你点击了${e.type}`
				})
			} else if (e.type == 'share') {
				uni.share({
					provider: "weixin",
					type: 0,
					title: `${this.introduce.name}`,
					scene: "WXSceneFavorite"
				})
			}
		},
		methods: {
			// 显示弹窗
			Show_shopping() {
				var animation = uni.createAnimation({
					duration: 200,
					timingFunction: 'linear'
				})

				animation.translateY(1000).step()
				this.animationData = animation.export()
				this.shopping_show = true
				setTimeout(() => {
					animation.translateY(-400).step()
					this.animationData = animation.export()
				}, 200)
			},

			// 关闭弹窗
			Hide_shopping() {
				var animation = uni.createAnimation({
					duration: 200,
					timingFunction: 'linear'
				})

				animation.translateY(1000).step()
				this.animationData = animation.export()
				this.shopping_show = true
				setTimeout(() => {
					animation.translateY(-400).step()
					this.shopping_show = false
				}, 200)
			},

			// 确定购买
			Popup_buy() {
				uni.showToast({
					title: `购买详情：颜色${this.introduce.color_type},数量:${this.introduce.number},名称：${this.introduce.name}`,
				})
			},

			// 选择颜色
			Color_item(index, name) {
				this.introduce_active = index
				this.introduce.color_type = name
			}
		}
	}
</script>

<style scoped>
	.type_cont {
		padding-bottom: 90rpx;
	}

	.type_introduce {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 50rpx;
		box-sizing: border-box;
	}

	.type_introduce .new_pic {
		width: 100%;
		height: 60rpx;
		color: #434343;
		text-align: center;
		line-height: 60rpx;
		font-size: 34rpx;
	}

	.type_introduce .old_pic {
		width: 100%;
		height: 60rpx;
		color: #ccc;
		text-align: center;
		line-height: 60rpx;
		text-decoration: line-through;
		font-size: 34rpx;
	}

	.type_introduce .pic_name {
		width: 100%;
		height: auto;
		color: #434343;
		text-align: center;
		line-height: 50rpx;
		font-size: 28rpx;
	}

	.type_introduce .pic_goods {
		width: 100%;
		display: flex;
		line-height: 60rpx;
		justify-content: center;
		font-size: 24rpx;
	}

	.pic_goods .goods_list {
		margin: 0 20rpx;
		display: flex;
	}

	.type_del {
		width: 100%;
		height: auto;
		margin: 20rpx 0;
	}

	.type_del .type_del_item {
		width: 100%;
		height: 400rpx;
	}

	.type_del_item .item_img {
		width: 100%;
		height: 400rpx;
	}

	.card_list {
		width: 100%;
		height: auto;
		box-sizing: border-box
	}

	.card_title {
		width: 100%;
		display: flex;
		height: 60rpx;
		align-items: center;
		justify-content: center;
		color: #434343;
		font-weight: 600;
		font-size: 30rpx;
		margin: 20rpx 0;
	}

	.shopping_cart {
		width: 100%;
		height: 90rpx;
		display: flex;
		justify-content: space-around;
		background: #fff;
		border-top: 2rpx solid #ccc;
		align-items: center;
		position: fixed;
		bottom: 0;
		z-index: 100;
	}

	.shopping_cart .iconfont {
		width: 55rpx;
		height: 55rpx;
		border-radius: 100rpx;
		background: rgba(0, 0, 0, 0.6);
		color: #fff;
		line-height: 55rpx;
		text-align: center;
		font-size: 35rpx;
	}

	.shopping_cart button {
		width: 200rpx;
		height: 50rpx;
		border-radius: 50rpx;
		background: rgba(0, 0, 0, 0.6);
		color: #fff;
		line-height: 50rpx;
		text-align: center;
		font-size: 26rpx;
		margin: 0;
	}

	.shopping_cart .add_cart {
		background: rgba(0, 0, 0, 0.6);
	}

	.shopping_cart .shopping {
		background: #42b7fb;
	}

	.shopping_popup {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		z-index: 101;
	}

	.popup_mark {
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(0, 0, 0, 0.32);
		z-index: 101;
	}

	.popup_cont {
		width: 100%;
		background: #fff;
		height: 740rpx;
		position: absolute;
		bottom: -800rpx;
		z-index: 102;
		padding: 20rpx;
		box-sizing: border-box;
	}

	.popup_cont .popup_detail {
		width: 100%;
		height: 180rpx;
		display: flex;
		justify-content: space-between;
	}

	.popup_detail .detail_img {
		width: 250rpx;
		height: 250rpx;
		position: relative;
		top: -80rpx;
		border-radius: 5px;
	}

	.popup_detail .detail_pic {
		width: 350rpx;
		height: auto;
		line-height: 50rpx;
		display: flex;
		flex-direction: column;
		font-size: 28rpx;
	}

	.detail_pic .new_pic {
		font-size: 35rpx;
	}

	.popup_detail .iconfont {
		font-size: 45rpx;
		color: #aaa;
	}

	.popup_color {
		width: 100%;
		height: auto;
	}

	.popup_title {
		font-size: 32rpx;
		color: #434343;
	}

	.color_cont {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin: 20rpx 0 10rpx 0;
	}

	.color_cont .color_item {
		margin-left: 10rpx;
		margin-bottom: 10rpx;
		border-radius: 50rpx;
		line-height: 50rpx;
		background: #ccc;
		color: #fff;
		padding: 0 30rpx;
		height: 50rpx;
		font-size: 26rpx;
	}

	.color_cont .color_item.active {
		background: #42b7fb;
	}

	.popup_num {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		align-items: center;
	}

	.popup_qd {
		width: 100%;
		height: 70rpx;
		background: #42b7fb;
		color: #fff;
		font-size: 30rpx;
		line-height: 70rpx;
		margin-top: 100rpx;
	}
</style>
