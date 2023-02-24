<template>
	<view class="success">
		<view class="success_cont">
			<i :class="'iconfont '+success.icon"></i>
			<view>{{success.title}}</view>
			<button @click="OpenIndex">{{success.detail}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				success: {}
			}
		},
		onLoad(option) {
			console.log(option);
			let success = JSON.parse(option.detail)
			if (success) {
				this.success = {
					icon: 'icon-MPIS-Success',
					title: '支付成功',
					detail: '返回在买点吧！'
				}

				uni.setNavigationBarTitle({
					title: '支付成功'
				})
			} else {
				this.success = {
					icon: 'icon-error',
					title: '支付失败',
					detail: '重新支付'
				}

				uni.setNavigationBarTitle({
					title: '支付失败'
				})
			}
		},
		methods: {
			OpenIndex() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.success {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.success_cont {
			width: 200rpx;
			height: 400rpx;
			font-size: 28rpx;
			display: flex;
			align-items: center;
			flex-direction: column;

			i {
				font-size: 100rpx;
			}

			.icon-MPIS-Success {
				color: #1afa29;
			}

			.icon-error {
				color: #d81e06;
			}

			button {
				width: 100%;
				height: 60rpx;
				line-height: 60rpx;
				background: #1296db;
				color: #fff;
			}

			view {
				margin: 40rpx 0;
			}
		}
	}
</style>
