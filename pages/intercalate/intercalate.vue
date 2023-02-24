<template>
	<view class="intercalate">
		<view class="inter_cont" v-for="(item,index) in intercalate" :key="index">
			<view class="inter_title">{{item.title}}</view>
			<view class="inter_information" v-if="item.name">
				<view class="inf_left">
					<image :src="'/static/image/Types/'+item.profile"></image>
					<view>{{item.name}}</view>
				</view>
				<view class="inf_right">
					<view>编辑个人资料</view>
					<i class="iconfont icon-xuanzeqixiayige"></i>
				</view>
			</view>
			<view class="inter_list">
				<view class="list_item" v-for="(item1,index1) in item.list" :key="index1"
					@click="Open_detail(item1.path)">
					<view class="item_left">
						<view>{{item1.name}}</view>
					</view>
					<view class="item_right">
						<view>{{item.detail}}</view>
						<i class="iconfont icon-xuanzeqixiayige"></i>
					</view>

				</view>
			</view>
		</view>
		<button class="inter_out" @click="">退出</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				intercalate: [{
					title: "账号设置",
					profile: '3.jpg',
					name: '张大脑袋',
					list: [{
						name: '修改密码',
						path: '',
					}, {
						name: '绑定手机号码',
						path: '',
					}, {
						name: '地址管理',
						path: '/pages/intercalate/address',
					}, {
						name: '绑定第三方账号',
						path: '',
					}]
				}, {
					title: "系统设置",
					profile: '',
					name: '',
					list: [{
						name: '消息推送',
						path: '',
					}, {
						name: '短信提醒',
						path: '',
					}, {
						name: '图片显示',
						path: '',
						detail: '智能模式'
					}, {
						name: '清除缓存',
						path: '',
						detail: '18.0M',
					}]
				}, {
					title: "支持",
					profile: '',
					name: '',
					list: [{
						name: '给百年奥莱好评',
						path: '',
					}, {
						name: '意见反馈',
						path: '',
					}, {
						name: '关于百年奥莱',
						path: '',
					}]
				}]
			}
		},
		methods: {
			// 打开子页面
			Open_detail(path) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.intercalate {
		width: 100%;
		height: calc(100vh - 50px);
		background: #f1f1f1;

		.inter_cont {
			width: 100%;
			height: auto;
			background: #fff;
			margin-bottom: 30rpx;

			.inter_title {
				width: 100%;
				padding: 0 20rpx;
				box-sizing: border-box;
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30rpx;
				border-bottom: 2rpx solid #d1d1d1;
				font-weight: 600;
			}

			.inter_information {
				width: 100%;
				padding: 10rpx 20rpx;
				box-sizing: border-box;
				height: auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30rpx;
				box-sizing: border-box;
				border-bottom: 2rpx solid #f2f2f2;

				.iconfont {
					font-size: 40rpx;
					color: #c1c1c1;
				}

				.inf_left {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					image {
						width: 60rpx;
						height: 60rpx;
						border-radius: 100px;
						border: 2rpx solid #333;
					}

					view {
						margin-left: 20rpx;
					}
				}

				.inf_right {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					view {
						margin-right: 20rpx;
						color: #d1d1d1;
					}
				}
			}

			.inter_list {
				width: 100%;
				display: flex;
				flex-direction: column;

				.list_item {
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: #fff;
					padding: 0 20rpx;
					box-sizing: border-box;
					border-bottom: 2rpx solid #f2f2f2;
					font-size: 28rpx;

					.iconfont {
						font-size: 40rpx;
						color: #c1c1c1;
					}

					.item_left {
						display: flex;
						justify-content: flex-start;
						align-items: center;
					}

					.item_right {
						display: flex;
						justify-content: flex-start;
						align-items: center;

						view {
							margin-right: 20rpx;
						}
					}
				}
			}

		}

		.inter_out {
			width: 90%;
			height: 70rpx;
			background: #42b7fb;
			color: #fff;
			font-size: 30rpx;
			line-height: 70rpx;
			margin: 40rpx auto;
		}

	}
</style>
