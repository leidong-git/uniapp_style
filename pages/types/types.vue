<template>
	<view class="types">
		<!-- #ifdef MP-WEIXIN -->
		<view class="search_title">
			<view class="search_title_list">
				<i class="iconfont icon-sousuo1"></i>
				<input type="text" focus v-model="search_value" placeholder="请输入搜索内容" />
				<view @click="Search_list()" class="search_btn">搜索</view>
			</view>
		</view>
		<!-- #endif -->

		<view class="border"></view>

		<view class="types_cont">
			<scroll-view scroll-y="true" :style="'height:'+window_height" class="types_left">
				<view class="types_left_item" @click="Types_left_item(index)"
					:class="types_title_active == index ? 'types_left_active':''" v-for="(item,index) in types_title">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" :style="'height:'+window_height" class="types_right">
				<view class="types_list" v-for="(item,index) in types_list">
					<view class="types_right_title">{{item.title}}</view>
					<view class="type_list_cont">
						<view class="cont_list" v-for="(item1,index1) in item.list" :key="index1"
							@click="List_detail(item1.id)">
							<image class="list_cont_img" :src="`/static/image/types/${item1.img}`"></image>
							<text class="list_cont_text">{{item1.name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_value: '',
				types_title: [{
					name: '家居家纺',
				}, {
					name: '男装',
				}, {
					name: '女装',
				}, {
					name: '运动户外',
				}, {
					name: '服饰内衣',
				}, {
					name: '美妆个护',
				}],
				types_title_active: 0,
				types_list: [{
					title: '家居',
					list: [{
						id: 1,
						name: '沙发',
						img: '1.jpg',
					}, {
						id: 2,
						name: '桌子',
						img: '2.jpg',
					}, {
						id: 3,
						name: '椅子',
						img: '3.jpg',
					}, {
						id: 4,
						name: '茶几',
						img: '4.jpg',
					}, {
						id: 5,
						name: '床',
						img: '5.jpg',
					}, {
						id: 6,
						name: '被套',
						img: '6.jpg',
					}]
				}, {
					title: '生活用品',
					list: [{
						id: 7,
						name: '杯子',
						img: '7.jpg',
					}, {
						id: 8,
						name: '毛巾',
						img: '8.jpg',
					}, {
						id: 9,
						name: '盆子',
						img: '9.jpg',
					}, {
						id: 10,
						name: '牙刷',
						img: '10.jpg',
					}, {
						id: 11,
						name: '纸巾',
						img: '11.jpg',
					}, {
						id: 12,
						name: '洗发露',
						img: '12.jpg',
					}]
				}],

				window_height: '',
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.window_height = res.windowHeight - uni.upx2px(90) - this.Get_type_height() + 'px'
					console.log(this.window_height);
				}
			})
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: `/pages/search/search`
			})
		},
		methods: {
			// 跳转搜索结果页
			Search_list() {
				setTimeout(() => {
					uni.navigateTo({
						url: `/pages/search/search`
					})
				}, 500)
			},

			// 获取不同设备的导航栏宽度
			Get_type_height() {
				let type_height = 0;
				let type = uni.getSystemInfoSync().uniPlatform

				if (type === 'web') {
					type_height = uni.upx2px(96)
				} else if (type === 'app') {
					type_height = uni.upx2px(90)
				} else if (type === 'mp-weixin') {
					type_height = uni.upx2px(2)
				} else {
					type_height = 0
				}

				return type_height
			},

			// 切换导航
			Types_left_item(index) {
				this.types_title_active = index
			},

			// 切换详情
			List_detail(id) {
				uni.navigateTo({
					url: `/pages/types/types_detail?id=${id}`
				})
			}
		}
	}
</script>

<style scoped>
	.search_title {
		width: 100%;
		height: 90rpx;
		background-color: #f1f1f1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search_title_list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;
		box-sizing: border-box;
		height: 60rpx;
		width: calc(100% - 60rpx);
		background-color: #ffffff;
		border-radius: 35rpx;
	}

	.search_title_list i {
		height: 55rpx;
		width: 55rpx;
		font-size: 45rpx;
	}

	.search_title_list input {
		width: calc(100% - 165rpx);
	}

	.search_title_list .search_btn {
		height: 45rpx;
		width: 110rpx;
		border-radius: 55rpx;
		background-color: #6cd3ff;
		color: #ffffff;
		font-size: 30rpx;
		text-align: center;
		line-height: 45rpx;
		cursor: pointer;
	}

	.border {
		width: 100%;
		height: 2rpx;
		background: #d1d1d1;
	}

	.types_cont {
		width: 100%;
		height: auto;
		display: flex;
	}

	.types_cont .types_left {
		width: 200rpx;
		height: 100%;
	}

	.types_left_item {
		width: 100%;
		border-left: 5rpx solid transparent;
		border-right: 5rpx solid transparent;
		box-sizing: border-box;
		background: #b1b1b1;
		text-align: center;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
	}

	.types_left_active {
		border-left: 5rpx solid #6cd3ff;
		background: #fff;
	}

	.types_cont .types_right {
		width: calc(100% - 200rpx);
		height: 100%;
		padding-left: 35rpx;
		padding-right: 15rpx;
		box-sizing: border-box;
	}

	.types_list {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
	}

	.types_list .types_right_title {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
	}

	.types_list .types_right_cont {
		width: 100%;
		height: auto;
		display: flex;
	}

	.type_list_cont {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.type_list_cont .cont_list {
		width: 153rpx;
		height: auto;
		display: flex;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		flex-direction: column;
	}

	.type_list_cont .cont_list:nth-child(3n) {
		margin-right: 0;
	}

	.list_cont_img {
		width: 153rpx;
		height: 140rpx;
	}

	.list_cont_text {
		width: 100%;
		height: 60rpx;
		text-align: center;
		display: inline-block;
		line-height: 60rpx;
		font-size: 25rpx;
	}
</style>
