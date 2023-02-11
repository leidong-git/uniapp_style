<template>
	<view class="content">

		<!-- title -->
		<!-- #ifdef H5 -->
		<view class="title">
			<view class="iconfont icon-sousuo1"></view>
			<view class="title_name">
				{{title}}
			</view>
			<view class="iconfont icon-xinxi1">
			</view>
		</view>
		<!-- #endif -->

		<!-- 导航栏 -->

		<!-- banner -->
		<IndexSwiper></IndexSwiper>

		<!-- list -->
		<Recommended></Recommended>

		<!-- 猜你喜欢 -->
		<view class="card_list">
			<view class="card_title">- 猜你喜欢 -</view>
			<CommodityList></CommodityList>
		</view>

		<!-- 猜你喜欢 -->
		<view class="card_list">
			<view class="card_title">- 运动户外 -</view>
			<CommodityList></CommodityList>
		</view>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommended from '@/components/index/Recommended.vue'
	import CommodityList from '@/components/public/CommodityList.vue'
	export default {
		data() {
			return {
				title: '首页'
			}
		},
		components: {
			IndexSwiper,
			Recommended,
			CommodityList
		},
		onLoad() {
			console.log(111);
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: '首页'
			});

			uni.setNavigationBarColor({
				frontColor: '#000000', //前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
				backgroundColor: '#f1f1f1', //背景颜色值，有效值为十六进制颜色
				animation: { //动画效果
					duration: 400,
					timingFunc: 'easeIn'
				}
			})
		},
		methods: {

		},
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
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
</style>
