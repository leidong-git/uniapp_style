<template>
	<view class="paymont">
		<radio-group class="pay_cont" @change="radioChange">
			<view class="pay_list" v-for="(item,index) in paymont" :key="index">
				<label>
					<view class="pay_left">
						<i :class="'iconfont '+item.icon "></i>
						<view>
							<view>{{item.name}}</view>
							<view class="pay_detail">{{item.detail}}</view>
						</view>
					</view>
					<radio @change="radioChange" :checked="index === current"></radio>
				</label>
			</view>
		</radio-group>

		<view class="cart_sta">
			<view class="sta_right">
				<template>
					<view class="sta_dea" @click="success = !success">
						<view class="sta_dea_text">合计：<i>¥{{sta_data.sta_pic}}</i>
						</view>
					</view>
					<button class="sta_an" v-if="success" @click="Open_affirm()">确认支付</button>
					<button class="sta_an" v-else @click="Open_affirm()">确认支付</button>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paymont: [{
					name: '微信支付',
					icon: 'icon-weixinfang',
					id: 'WX',
					detail: '推荐微信用户使用',
				}, {
					name: '支付宝支付',
					icon: 'icon-zhifubaozhifu',
					id: 'ZFB',
					detail: '推荐支付宝用户使用',
				}, {
					name: '银联支付',
					icon: 'icon-yinlian',
					id: 'YL',
					detail: '方便快捷',
				}],
				current: 0,
				sta_data: {},
				success: true
			}
		},
		onLoad(option) {
			let detail = JSON.parse(option.detail)
			// 获取url传值
			this.sta_data = detail || ''
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.paymont.length; i++) {
					if (this.paymont[i].name === evt.detail.name) {
						this.current = i;
						break;
					}
				}
			},

			Open_affirm() {
				console.log(this.success);
				uni.navigateTo({
					url: `/pages/paymont/success?detail=${this.success}`
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.paymont {
		width: 100%;

		.pay_cont {
			width: 100%;
			padding: 0 20rpx;
			box-sizing: border-box;

			.pay_list:last-child {
				border-bottom: 2rpx solid #ccc;
			}

			.pay_list {
				width: 100%;
				border-top: 2rpx solid #ccc;
				padding: 20rpx 0;

				.uni-label-pointer {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 80rpx;

					.pay_left {
						display: flex;
						font-size: 28rpx;
						align-items: center;

						i {
							font-size: 40rpx;
							margin-right: 20rpx;
						}

						.pay_detail {
							color: #ccc;
						}

						.icon-weixinfang {
							color: #1afa29;
						}

						.icon-zhifubaozhifu {
							color: #1296db;
						}

						.icon-yinlian {
							color: #d81e06;
						}
					}
				}
			}
		}
	}

	.cart_sta {
		position: fixed;
		/* #ifdef MP-WEIXIN */
		bottom: 0rpx;
		/* #endif */

		/* #ifdef H5 */
		bottom: 0rpx;
		/* #endif */
		width: 100%;
		height: 90rpx;
		background: #434343;
		box-sizing: border-box;
		display: flex;
		flex-wrap: nowrap;
	}

	.sta_right {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		width: 100%;
	}

	.sta_dea {
		height: 100%;
	}

	.sta_dea .sta_dea_text {
		color: #fff;
		display: flex;
		height: 100%;
		align-items: center;
	}

	.sta_dea_text i {
		color: #fff;
		font-size: 40rpx;
		font-style: initial;
	}

	.sta_dea_fre {
		color: #aaa;
		font-size: 24rpx;
		font-style: initial;
		display: flex;
		justify-content: flex-start;
	}

	.sta_an {
		width: 200rpx;
		height: 100%;
		border: none;
		background: #49bdfb;
		color: #fff;
		border-radius: 0;
		margin: 0;
	}

	.sta_an_add {
		background: #000;
		width: 300rpx;
		height: 100%;
		border: none;
		border-radius: 0;
		color: #fff;
	}
</style>
