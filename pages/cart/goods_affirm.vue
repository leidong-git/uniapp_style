<template>
	<view class="affirm">
		<view class="affirm_address">
			<i class="iconfont icon-wxbdingwei"></i>
			<view class="address_list">
				<view class="list_column">
					<view>收货人：{{address_data.name}}</view>
					<view>{{address_data.phone}}</view>
				</view>
				<view class="list_column">
					<view>收货地址：{{address_data.address}}</view>
				</view>
			</view>
			<i class="iconfont icon-xuanzeqixiayige"></i>
		</view>
		<view class="line"></view>

		<view class="affirm_cart">
			<view class="cart_list" v-for="(item,index) in cart_goods" :key="index">
				<view class="cart_list_title" v-if="item.page_list.length != 0">
					<image class="store_icon" :src="`../../static/icon/${item.store_icon}`"></image>
					<text class="store_name">{{item.store_name}}</text>
				</view>
				<view class="cart_list_page">
					<view class="list_page" v-for="(item1,index1) in item.page_list" :key="index1">
						<image class="page_img" :src="`../../static/image/Types/${item1.com_img}`"></image>
						<view class="page_detail">
							<view class="page_name">{{item1.com_name}}</view>
							<view class="page_color">颜色分类：{{item1.com_color}}</view>
							<view class="page_dea">
								<view class="page_pic">¥{{item1.com_price}}</view>
								<view class="page_num">X {{item1.com_num}}</view>
							</view>
						</view>
					</view>

					<view class="cart_paly">
						<view class="paly_deta">
							运费：<i>¥0</i>
						</view>
						<view class="paly_deta">
							留言：<textarea placeholder="给卖家留言,140字以内"></textarea>
						</view>
						<view class="paly_total">
							订单金额：<i>¥{{item.paly}}</i>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cart_sta">
			<view class="sta_right">
				<template>
					<view class="sta_dea">
						<view class="sta_dea_text">合计：<i>¥{{sta_data.sta_pic}}</i>
						</view>
						<view class="sta_dea_fre">{{sta_data.sta_freight ? '含运费':'不含运费'}}</view>
					</view>
					<button class="sta_an" @click="Open_affirm()">提交订单</button>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				cart_goods: [],
				address_data: {
					name: '田狗蛋',
					phone: '12345678910',
					address: '重庆市巴南区云篆山水C区**栋**-**',
					default: true,
				}
			}
		},
		computed: {
			...mapState({
				cart_data: state => state.cart.cart_data,
				sta_data: state => state.cart.sta_data
			}),
		},
		onLoad() {
			this.GetData()
		},
		methods: {
			GetData() {
				this.cart_goods = this.cart_data.map(item => {
					let list = item.page_list.filter(item1 => {
						if (item1.checked) {
							return item
						}
					})

					let paly = 0;

					list.forEach(item => {
						paly = paly + parseInt(item.com_price)
					})

					if (list.length > 0) {
						return {
							...item,
							paly: paly.toFixed(2),
							page_list: list
						}
					}
				})

				this.cart_goods = this.cart_goods.filter(i => i != null)
			},

			Open_affirm() {
				uni.navigateTo({
					url: `/pages/paymont/paymont?detail=${JSON.stringify(this.sta_data)}`
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.affirm {
		width: 100%;
		height: auto;
		min-height: calc(100vh - 175rpx);
		background: #f1f1f1;
		padding-bottom: 90rpx;
	}

	.cart_list {
		width: 100%;
		height: auto;
		background: #fff;
		border-bottom: 25rpx solid #f1f1f1;
		box-sizing: border-box;

		.cart_paly {
			width: 100%;
			background: #fff;
			padding: 0 20rpx;
			box-sizing: border-box;
			font-size: 28rpx;

			.paly_total {
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				i {
					color: #42b7fb;
					font-style: initial;
				}
			}

			.paly_deta {
				min-height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2rpx solid #d1d1d1;

				textarea {
					height: 150rpx;
					line-height: 80rpx;
				}

				i {
					color: #42b7fb;
					font-style: initial;
				}
			}

			.paly_an {
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.an_button {
					width: 150rpx;
					height: 60rpx;
					line-height: 60rpx;
					border-radius: 50rpx;
					border: 2rpx solid rgb(200, 100, 100, 0.9);
					background: rgba(200, 100, 100, 0.8);
					color: #fff;
					border-radius: 50rpx;
					font-size: 30rpx;
					margin-right: 0;
				}
			}
		}
	}

	.cart_list_title {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 15rpx;
		box-sizing: border-box;
	}

	::v-deep.store_checked {
		width: 40rpx;
		height: 40rpx;
		display: flex;
		align-items: center;
		margin-right: 10rpx;
	}

	::v-deep.store_checked .uni-checkbox-input {
		width: 30rpx;
		height: 30rpx;
		border-radius: 100px;
	}

	::v-deep.store_checked .uni-checkbox-input svg {
		transform: translate(-50%, -48%) scale(0.43);
	}

	.store_label {
		height: auto;
		display: flex;
	}

	.cart_list_title .store_icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}

	.cart_list_title .store_name {
		font-size: 28rpx;
		color: #434343;
	}

	.cart_list_page {
		background: #f5f5f5;
	}

	.cart_list_page .list_page {
		padding: 20rpx 20rpx;
		border-bottom: 2rpx solid #fff;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.cart_list_page .list_page:last-child {
		border-bottom: none;
	}

	.list_page .page_img {
		width: 200rpx;
		height: 230rpx;
	}

	.list_page .page_detail {
		width: calc(100% - 200rpx);
		height: 230rpx;
		padding: 10rpx 15rpx;
		box-sizing: border-box;
		line-height: 50rpx;
	}

	.page_detail .page_name {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 26rpx;
	}

	.page_detail .page_color {
		color: #aaa;
		font-size: 26rpx;
	}

	.page_detail .page_dea {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		height: 60rpx;
		line-height: 60rpx;
		align-items: center;
		font-size: 28rpx;
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
		background: #fff;
		padding: 0 0 0 15rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-end;
	}

	.sta_right {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.sta_dea {
		height: 100%;
		margin-right: 15rpx;
	}

	.sta_dea .sta_dea_text {
		color: #434343;
	}

	.sta_dea_text i {
		color: #49bdfb;
		font-size: 40rpx;
		font-style: initial;
	}

	.sta_dea_fre {
		color: #aaa;
		font-size: 24rpx;
		font-style: initial;
		display: flex;
		justify-content: flex-end;
	}

	.sta_an {
		width: 200rpx;
		height: 100%;
		border: none;
		background: #49bdfb;
		color: #fff;
		border-radius: 0;
	}

	.sta_an_add {
		background: #000;
		width: 300rpx;
		height: 100%;
		border: none;
		border-radius: 0;
		color: #fff;
	}

	.affirm_address {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		padding: 0 20rpx;
		box-sizing: border-box;

		i {
			font-size: 40rpx;
			color: #ccc;
		}

		.address_list {
			width: 100%;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: column;
			padding: 20rpx;
			box-sizing: border-box;
			font-size: 28rpx;
			margin-top: 20rpx;
			border-radius: 0;
			float: left;

			.list_column {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				view {
					display: flex;
					height: 50rpx;
					align-items: center;
					margin-right: 20rpx;
				}
			}
		}
	}

	.line {
		width: 100%;
		height: 10rpx;
		background-image: linear-gradient(110deg, #87f 40%, #f78 30%);
		background-size: 30px 30px;
		margin-bottom: 20rpx;
	}
</style>
