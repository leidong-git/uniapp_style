<template>
	<view class="add_cont">
		<view class="add_form">
			<view class="form_item">
				<view class="item_title">收件人</view>
				<input class="item_cont" value="" v-model="add_form.name" placeholder="收件人姓名" />
			</view>
			<view class="form_item">
				<view class="item_title">手机号</view>
				<input class="item_cont" maxlength="11" value="" v-model="add_form.phone" placeholder="11位手机号" />
			</view>
			<view class="form_item form_item1">
				<view class="item_left">所在地区</view>
				<view class="item_right">
					<view @click="showMulLinkageThreePicker">{{add_form.area}}<i
							class="iconfont icon-xuanzeqixiayige"></i>
					</view>
					<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
						@onConfirm="onConfirm">
					</mpvue-city-picker>
				</view>

			</view>
			<view class="form_item">
				<view class="item_title">详细地址</view>
				<textarea class="item_cont" value="" v-model="add_form.address" placeholder="详细地址"></textarea>
			</view>
			<view class="form_item">
				<view class="item_title">邮编</view>
				<input class="item_cont" value="" v-model="add_form.email" placeholder="可选填" />
			</view>
			<view class="form_item form_item1">
				<view class="item_left">设为默认地址</view>
				<switch class="item_right" name="switch" :checked="add_form.default" @change="Switch_change" />
			</view>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/uni/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		data() {
			return {
				add_form: {
					name: '',
					phone: '',
					area: '请选择',
					address: '',
					email: '',
					default: true
				},
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
			}
		},
		components: {
			mpvueCityPicker
		},
		onLoad(option) {
			let detail = JSON.parse(option.detail)
			// 获取url传值
			this.add_form = detail || ''
		},
		onNavigationBarButtonTap(e) {
			if (e.float === 'right') {
				if (this.add_form.name == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入姓名'
					})
					return false;
				}

				// 手机
				let reg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
				if (!reg.test(this.add_form.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的11位手机号'
					})
					this.add_form.phone = '';
					return false;
				}

				if (this.add_form.area == '') {
					uni.showToast({
						icon: 'none',
						title: '请选择地区'
					})
					return false;
				}

				let email_reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

				if (!email_reg.test(this.add_form.email)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的邮箱'
					})
					this.add_form.email = '';
					return false;
				}

				console.log(this.add_form);
				uni.showToast({
					icon: 'success',
					title: '添加成功'
				})

				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/intercalate/address'
					})
				}, 1000)

			}
		},
		methods: {
			// 改变switch 
			Switch_change(e) {
				this.add_form.default = e.detail.value
			},

			// 三级联动选择
			showMulLinkageThreePicker() {
				console.log(1221);
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.add_form.area = e.label
			}
		}
	}
</script>

<style scoped lang="less">
	.add_cont {
		width: 100%;
		height: auto;
		background: #fff;

		.add_form {
			width: 100%;
			height: auto;
			padding: 0 20rpx;
			box-sizing: border-box;

			.form_item {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				min-height: 90rpx;
				border-bottom: 2rpx solid #ddd;

				.item_title {
					width: 120rpx;
					font-size: 28rpx;
				}

				.item_cont {
					width: calc(100% - 140rpx);
					margin-left: 20rpx;
					line-height: 90rpx;
					font-size: 28rpx;
					max-height: 200rpx;
				}

				.item_right {
					display: flex;
					align-items: center;
					justify-content: flex-end;
				}
			}
		}
	}
</style>
