<template>
	<view class="user">
		<view class="user_title">
			<i @click="Open_Inter()" class="iconfont icon-shezhi"></i>
			<view class="title_profile">
				<image :src="'/static/image/Types/'+user.icon"></image>
				<view>{{user.name}}</view>
			</view>
			<i class="iconfont icon-xinxi1"></i>
		</view>

		<view class="user_order">
			<view class="user_order_title">
				<view>我的订单</view>
				<view @click="Open_goods(0)">全部订单 <i class="iconfont icon-xuanzeqixiayige"></i></view>
			</view>
			<view class="user_order_list">
				<view class="list_item" @click="Open_goods(index+1)" v-for="(item,index) in user_order" :key="index">
					<i :class="'iconfont '+item.icon"></i>
					<view>{{item.name}}</view>
				</view>
			</view>
		</view>

		<view class="user_operation">
			<view class="operation_item" v-for="(item,index) in user_operation" :key="index">
				<view class="item_left">
					<i :class="'iconfont '+item.icon"></i>
					<view>{{item.name}}</view>
				</view>
				<view class="item_right">
					<view v-if="item.detail">{{item.detail}}</view>
					<i class="iconfont icon-xuanzeqixiayige"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					icon: '1.jpg',
					name: '张大脑袋'
				},

				user_order: [{
					icon: 'icon-31daifukuan',
					name: '待付款'
				}, {
					icon: 'icon-31daifahuo',
					name: '待发货'
				}, {
					icon: 'icon-daishouhuo',
					name: '待收货'
				}, {
					icon: 'icon-daipingjia01',
					name: '待评价'
				}, {
					icon: 'icon-tuikuan',
					name: '退款/售后'
				}],

				user_operation: [{
					icon: 'icon-aixin',
					name: '我的收藏',
					detail: 1,
				}, {
					icon: 'icon-youhuijuan-xianxing',
					name: '我的优惠券',
					detail: 1,
				}, {
					icon: 'icon-jifen-xianxing',
					name: '我的积分',
					detail: 886,
				}, {
					icon: 'icon-VIP',
					name: '加入VIP'
				}, {
					icon: 'icon-bangzhu',
					name: '帮助中心'
				}, {
					icon: 'icon-kefu',
					name: '联系客服'
				}, {
					icon: 'icon-shangjiaruzhu',
					name: '商家入驻'
				}]
			}
		},
		methods: {
			Open_Inter() {
				uni.navigateTo({
					url: '/pages/intercalate/intercalate'
				})
			},

			Open_goods(index) {
				if (index == 5) {
					uni.showToast({
						title: "跳转退款界面"
					})
				} else {
					uni.navigateTo({
						url: `/pages/intercalate/my_goods?index=${index}`
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.user {
		width: 100%;
		height: calc(100vh - 50px);
		background: #f1f1f1;

		.user_title {
			width: 100%;
			height: 500rpx;
			padding: 50rpx 20rpx;
			box-sizing: border-box;
			background: url('../../static/image/3.jpg') no-repeat;
			background-size: cover;
			display: flex;
			justify-content: space-between;

			.iconfont {
				font-size: 40rpx;
				color: #fff;
			}

			.title_profile {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 100px;
					border: 5rpx solid #fff;
				}

				view {
					width: 100%;
					line-height: 60rpx;
					color: #fff;
					font-size: 30rpx;
					text-align: center;
				}
			}
		}

		.user_order {
			width: 100%;
			height: auto;
			background: #fff;
			margin-bottom: 30rpx;

			.user_order_title {
				width: 100%;
				padding: 0 20rpx;
				box-sizing: border-box;
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30rpx;
			}

			.user_order_list {
				width: 100%;
				padding: 0 20rpx 20rpx 20rpx;
				box-sizing: border-box;
				height: auto;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.list_item {
					display: flex;
					flex-direction: column;
					text-align: center;
					justify-content: center;

					.iconfont {
						font-size: 50rpx;
					}

					view {
						font-size: 22rpx;
						line-height: 60rpx;
					}
				}
			}

		}

		.user_operation {
			width: 100%;
			display: flex;
			flex-direction: column;

			.operation_item {
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #fff;
				padding: 0 20rpx;
				box-sizing: border-box;
				border-top: 2rpx solid #f2f2f2;
				font-size: 28rpx;

				.iconfont {
					font-size: 40rpx;
					color: #ff1111;
				}

				.item_left {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					view {
						margin-left: 20rpx;
					}
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

			.operation_item:nth-child(4) {
				margin: 20rpx 0;
				border-bottom: 2rpx solid #f2f2f2;
			}

			.operation_item:nth-child(5) {
				border-top: 2rpx solid #f2f2f2;
			}

			.operation_item:last-child {
				border-bottom: 2rpx solid #f2f2f2;
			}
		}
	}
</style>
