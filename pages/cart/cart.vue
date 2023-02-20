<template>
	<view>
		<UniNavBar @clickRight="Show_Inf" fixed="true">
			<!-- <block v-slot:left>
				<uni-icons type="left" size="24" />
			</block> -->
			<view class="cart_center">
				<view class="cart_title">购物车</view>
				<view class="cart_bj" @click="isEdit = !isEdit">{{isEdit ? '完成':'编辑'}}</view>
			</view>
			<block v-slot:right>
				<uni-icons type="chat" size="24" />
			</block>
		</UniNavBar>

		<view class="cart_cont">
			<view class="cart_list" v-for="(item,index) in cart_data" :key="index">
				<view class="cart_list_title">
					<checkbox class="store_checked" @click="SelectChildAll(index,item.checked)"
						:checked="item.checked" />
					<image class="store_icon" :src="`../../static/icon/${item.store_icon}`"></image>
					<text class="store_name">{{item.store_name}}</text>
				</view>
				<view class="cart_list_page">
					<view class="list_page" v-for="(item1,index1) in item.page_list" :key="index1">
						<checkbox class="store_checked" @click="SelectSunAll(index,index1,item1.checked)"
							:checked="item1.checked" :id="item1.id" />
						<label class="store_label" :for="item1.id">
							<image class="page_img" :src="`../../static/image/Types/${item1.com_img}`"></image>
							<view class="page_detail">
								<view class="page_name">{{item1.com_name}}</view>
								<view class="page_color">颜色分类：{{item1.com_color}}</view>
								<view class="page_dea">
									<view class="page_pic">¥{{item1.com_price}}</view>
									<view class="page_num">X {{item1.com_num}}</view>
								</view>
							</view>
						</label>
					</view>
				</view>
			</view>

			<view class="cart_sta">
				<view class="sta_left">
					<checkbox class="store_checked" @click="SelectAll()" :checked="sta_data.sta_checked" id="sta" />
					<label class="store_label" for="sta">
						全选
					</label>
				</view>
				<view class="sta_right">
					<view class="sta_dea">
						<view class="sta_dea_text">合计：<i>¥{{sta_data.sta_pic}}</i>
						</view>
						<view class="sta_dea_fre">{{sta_data.sta_freight ? '含运费':'不含运费'}}</view>
					</view>
					<button class="sta_an">结算({{sta_data.sta_num}})</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import UniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				isEdit: false,
			}
		},
		components: {
			UniNavBar,
		},
		computed: {
			...mapState({
				cart_data: state => state.cart.cart_data,
				sta_data: state => state.cart.sta_data
			}),
		},
		watch: {
			cart_data: {
				handler(newVal, oldVal) {
					let pic = 0

					newVal.forEach((item, index) => {
						item.page_list.forEach(item1 => {
							if (item1.checked) {
								pic = (item1.com_price * item1.com_num) + pic
							}
						})
					})

					this.$store.commit('SelectPrice', pic)
				},
				deep: true,
			}
		},
		methods: {
			// 点击信息
			Show_Inf() {
				uni.showToast({
					title: "你点击了信息"
				})
			},

			SelectAll(index) {
				this.$store.commit('SelectAll', index)
			},

			SelectChildAll(index, code) {
				this.$store.commit('SelectChildAll', {
					code: code,
					index: index
				})
			},

			SelectSunAll(index, index1, code) {
				this.$store.commit('SelectSunAll', {
					index: index,
					Cindex: index1,
					code: code
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.cart_center {
		width: 100%;
		height: 100%;
		position: relative;
		font-size: 28rpx;
	}

	.cart_title {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cart_bj {
		position: absolute;
		height: 100%;
		align-items: center;
		top: 0;
		right: 0rpx;
		display: flex;
		font-size: 24rpx;
	}

	.cart_cont {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		border-top: 25rpx solid #f1f1f1;
		padding-bottom: 90rpx;
	}

	.cart_list {
		width: 100%;
		height: auto;
		background: #fff;
		border-bottom: 25rpx solid #f1f1f1;
		box-sizing: border-box;
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
		width: 100%;
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

	.sta_left {
		display: flex;
		align-items: center;
		height: 100%;
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

	.cart_sta {
		position: fixed;
		/* #ifdef MP-WEIXIN */
		bottom: 0rpx;
		/* #endif */

		/* #ifdef H5 */
		bottom: 90rpx;
		/* #endif */
		width: 100%;
		height: 90rpx;
		background: #fff;
		padding: 0 0 0 15rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
</style>
