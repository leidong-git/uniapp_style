<template>
	<view class="goods">
		<view class="goods_title">
			<view class="goods_title_item" @click="Itemactive(index)" :class="active == index ? 'active':''"
				v-for="(item,index) in goods_title" :key="index">
				<view>{{item.name}}</view>
				<view v-if="item.tag != ''" class="item_tag">{{item.tag}}</view>
			</view>
		</view>

		<scroll-view v-if="cart_data.length != 0" :style="'height:'+scroll_height" scroll-y="true"
			@scrolltolower="Scroll_Onload()">
			<view class="cart_list" v-for="(item,index) in cart_data" :key="index">
				<view class="cart_list_title" v-if="item.page_list.length != 0">
					<view>
						<image class="store_icon" :src="`../../static/icon/${item.store_icon}`"></image>
						<text class="store_name">{{item.store_name}}</text>
					</view>
					<view class="paly">待买家支付</view>
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
				</view>

				<view class="cart_paly">
					<view class="paly_total">
						订单金额：<i>¥{{item.total}}</i>(含运费：¥<i>{{item.freight}}</i>)
					</view>
					<view class="paly_an">
						<button class="an_button">支付</button>
					</view>
				</view>
			</view>
		</scroll-view>

		<scroll-view v-else :style="'height:'+scroll_height">
			<view class="data_none">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				goods_title: [{
					name: '全部',
					tag: '',
				}, {
					name: '待付款',
					tag: '5',
				}, {
					name: '待发货',
					tag: '',
				}, {
					name: '待收货',
					tag: '',
				}, {
					name: '待评价',
					tag: '',
				}],

				cart_data: [{
					store_name: '****精品店铺',
					store_icon: 'my-active.png',
					checked: false,
					total: '151515:00',
					freight: 0,
					page_list: [{
						id: '0001',
						checked: false,
						com_name: '天王（TIAN WANG）手表男 情人节礼物昆仑系列钢带商务机械男表白色GS5876S.D.S.W',
						com_img: '1.jpg',
						com_color: '玫瑰金色',
						com_price: '1369.00',
						com_num: 1,
					}, {
						id: '0002',
						checked: false,
						com_name: '艾米龙(Emile Chouriet)瑞士手表智慧三问表金表手动机械表男表礼物',
						com_img: '2.jpg',
						com_color: '金色',
						com_price: '1489000.00',
						com_num: 1,
					}, {
						id: '0003',
						checked: false,
						com_name: '诺曼纳 Normana Chateau 城堡系列陀飞轮多功能瑞士男表10004',
						com_img: '3.jpg',
						com_color: '金色',
						com_price: '730600.00',
						com_num: 1,
					}, {
						id: '0004',
						checked: false,
						com_name: '劳力士(Rolex)瑞士手表 宇宙计型迪通拿系列机械腕表M116508-0013',
						com_img: '1.jpg',
						com_color: '金色',
						com_price: '646500.00',
						com_num: 1,
					}]
				}, {
					store_name: '小腰金官方旗舰店',
					store_icon: 'my.png',
					checked: false,
					total: '151515:00',
					freight: 0,
					page_list: [{
						id: '0005',
						checked: false,
						com_name: '小腰金 凤穿牡丹花项链夸张豪华新娘结婚首饰黄金五金嫁妆手镯耳环戒指结婚订婚高端金饰 足金凤穿牡丹花项链套链约472克（定金）下单咨询',
						com_img: '1.jpg',
						com_color: '玫瑰金色',
						com_price: '1369.00',
						com_num: 1,
					}, {
						id: '0006',
						checked: false,
						com_name: '小腰金 黄金项链男士足金实心9999足金十字链粗款生日礼物送老公定制传承古法手工定制结婚订婚三金礼 黄金项链可定制克重42至300克',
						com_img: '2.jpg',
						com_color: '金色',
						com_price: '1489000.00',
						com_num: 1,
					}, {
						id: '0007',
						checked: false,
						com_name: '小腰金 999足金蛇骨链宽扁款叠戴黄金项链女ins简约风格足金套链不含吊坠传承古法手工定制礼物送女朋 宽扁蛇骨链项链约7.2克长35加7cm',
						com_img: '3.jpg',
						com_color: '金色',
						com_price: '730600.00',
						com_num: 1,
					}, {
						id: '0008',
						checked: false,
						com_name: '小腰金 老板黄金项链侧身链男士9999足金坦克链长款实心2022新款时尚送女朋友送老婆礼物 页面图足金侧身项链约50克长72cm',
						com_img: '1.jpg',
						com_color: '金色',
						com_price: '646500.00',
						com_num: 1,
					}]
				}],

				scroll_height: '',
				valid: true
			}
		},
		onLoad(option) {
			this.active = option.index
			uni.getSystemInfo({
				success: (res) => {
					this.scroll_height = res.windowHeight - uni.upx2px(90) + 'px'
				}
			})
		},
		methods: {
			// 选中
			Itemactive(index) {
				this.active = index
				console.log(this.commodity_data.length);
				switch (index) {
					case 1:
						// 获取待付款
						uni.showToast({
							title: '获取待付款'
						})
						break
					case 2:
						// 获取待发货
						uni.showToast({
							title: '获取待发货'
						})
						break
					case 3:
						// 获取待收货
						uni.showToast({
							title: '获取待收货'
						})
						break
					case 4:
						// 获取待评价
						uni.showToast({
							title: '获取待评价'
						})
						this.commodity_data = []
						break
					default:
						// 获取全部数据
						uni.showToast({
							title: '获取全部数据'
						})
				}
			},

			// 触底加载
			Scroll_Onload() {
				if (this.valid) {
					this.valid = false
					uni.showLoading({
						title: '数据加载中'
					});
					console.log('触底加载!!!');
					setTimeout(() => {
						console.log('触底加载结束!!!');
						this.valid = true
						uni.hideLoading();
					}, 5000)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.goods {
		width: 100%;

		.goods_title {
			width: 100%;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20rpx;
			box-sizing: border-box;
			border-bottom: 2rpx solid #d1d1d1;

			.goods_title_item {
				padding: 0 20rpx;
				box-sizing: border-box;
				height: 80rpx;
				display: flex;
				align-items: center;
				position: relative;
				border-bottom: 4rpx solid rgba(0, 0, 0, 0);
			}

			.active {
				border-bottom: 4rpx solid #42b7fb;
			}

			.item_tag {
				position: absolute;
				right: 5rpx;
				top: 5rpx;
				background: #f00;
				color: #fff;
				font-size: 24rpx;
				border-radius: 50rpx;
				width: 30rpx;
				height: 30rpx;
				text-align: center;
				line-height: 30rpx;
			}
		}

		.data_none {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
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
					border-bottom: 2rpx solid #d1d1d1;

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
			justify-content: space-between;
			padding: 0 15rpx;
			box-sizing: border-box;

			.paly {
				color: #42b7fb;
			}
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
	}
</style>
