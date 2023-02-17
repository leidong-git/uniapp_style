<template>
	<view class="">
		<!-- #ifdef MP-WEIXIN -->
		<view class="search_title">
			<view class="search_title_list">
				<i class="iconfont icon-sousuo1"></i>
				<input type="text" focus v-model="invitation" placeholder="请输入搜索内容" />
				<view @click="Search_list()" class="search_btn">筛选</view>
			</view>
		</view>
		<!-- #endif -->

		<view class="search_list_title">
			<view class="search_list_title_list" @click="Search_click(index)" v-for="(item,index) in search_title"
				:key="index">
				<text :class="search_index ==index ? 'f_active_color':''">{{item.name}}</text>
				<view class="iconfont_cont">
					<i :class="item.status == 1 ? 'i_active_color':''" class="iconfont icon-xiangshang"></i>
					<i :class="item.status == 2 ? 'i_active_color':''" class="iconfont icon-xiangxia"></i>
				</view>
			</view>
		</view>

		<scroll-view scroll-y="true" :style="'height:'+search_height">
			<CommodityList :commodity_data="commodity_data"></CommodityList>
		</scroll-view>
	</view>
</template>

<script>
	import CommodityList from '@/components/public/CommodityList.vue'
	export default {
		data() {
			return {
				invitation: '',
				search_title: [{
					name: '价格',
					status: 1,
				}, {
					name: '折扣',
					status: 0,
				}, {
					name: '品牌',
					status: 0,
				}],
				search_index: 0,
				commodity_data: [{
					img: '1.jpg',
					detail: "新华社北京2月9日电 题:新时代十年伟大变革奠定坚实基础——新征程上满怀信心开新局展新貌系列述评之四 新华社记者谭谟晓、姚均芳、刘羽佳 历经新时代十年伟大变革的中国,站...",
					price: '152.5',
					old_price: '254.3',
					discount: '5.5'
				}, {
					img: '2.jpg',
					detail: "满怀信心踏上新征程 阔步向前续写新篇章 中国共产党第二十次全国代表大会已经召开,大会报告让红谷滩区各界干部群众满怀信心,自信、喜悦和豪迈之情溢于言表。大家畅所欲言,纷...",
					price: '352.5',
					old_price: '654.3',
					discount: '5.5'
				}, {
					img: '3.jpg',
					detail: "党的二十大举旗定向、继往开来、指路领航,提出了新征程中心任务。新的赶考路上,我们要满怀信心、踔厉奋发,坚定不移推进高质量跨越发展,以实干实绩谱写现代化...",
					price: '152.5',
					old_price: '204.3',
					discount: '9.5'
				}, {
					img: '1.jpg',
					detail: "前，多位海外侨胞在接受中央广播电视总台华语环球广播记者采访时表示，对中国式现代化新征程充满信心，将继续秉持情系桑梓的家国情怀拥抱新机遇，发挥融通...",
					price: '162.5',
					old_price: '354.3',
					discount: '6.5'
				}, {
					img: '3.jpg',
					detail: "党的二十大举旗定向、继往开来、指路领航,提出了新征程中心任务。新的赶考路上,我们要满怀信心、踔厉奋发,坚定不移推进高质量跨越发展,以实干实绩谱写现代化...",
					price: '152.5',
					old_price: '204.3',
					discount: '9.5'
				}, {
					img: '1.jpg',
					detail: "前，多位海外侨胞在接受中央广播电视总台华语环球广播记者采访时表示，对中国式现代化新征程充满信心，将继续秉持情系桑梓的家国情怀拥抱新机遇，发挥融通...",
					price: '162.5',
					old_price: '354.3',
					discount: '6.5'
				}],
				search_height: '0'
			}
		},
		components: {
			CommodityList,
		},
		onLoad(option) {
			// 获取url传值
			this.invitation = option.detail || ''

			console.log(this.invitation);

			// 延迟获取高度，不然会有BUG
			setTimeout(() => {
				uni.getSystemInfo({
					success: (res) => {
						console.log(option);
						console.log(res.windowHeight);
						this.search_height = res.windowHeight - uni.upx2px(70) - this
							.Get_type_height() + 'px'
						this.Set_input(this.invitation)
					}
				})
			}, 500)

		},
		methods: {
			// 状态栏输入框 赋值
			Set_input(keyword) {
				// 动态设置导航栏搜索框内容
				// #ifdef APP-PLUS
				let webView = this.$mp.page.$getAppWebview();
				webView.setTitleNViewSearchInputText(keyword);
				// #endif

				// #ifdef H5

				let inputSearch = document.querySelector('.uni-input-input[type=search]');
				var evt = new InputEvent('input', {
					inputType: 'insertText',
					data: keyword,
					dataTransfer: null,
					isComposing: false
				});
				if (inputSearch) {
					inputSearch.value = keyword;
					inputSearch.dispatchEvent(evt);
				}
				// #endif
			},

			// 获取不同设备的导航栏宽度
			Get_type_height() {
				let type_height = 0;
				let type = uni.getSystemInfoSync().uniPlatform

				if (type === 'web') {
					type_height = uni.upx2px(0)
				} else if (type === 'app') {
					type_height = uni.upx2px(90)
				} else if (type === 'mp-weixin') {
					type_height = uni.upx2px(90)
				} else {
					type_height = 0
				}

				return type_height
			},

			// 筛选
			Search_list() {
				console.log(this.invitation);
			},

			// 点击切换菜单
			Search_click(index) {
				let oldIndex = this.search_index
				// 切换升序降序
				if (oldIndex == index) {
					if (this.search_title[index].status === 1) {
						// 降序
						this.search_title[index].status = 2
					} else {
						// 升序
						this.search_title[index].status = 1
					}
				} else {
					this.search_index = index
					this.search_title[index].status = 1
					this.search_title[oldIndex].status = 0
				}
			}
		}
	}
</script>

<style scoped>
	.search_list_title {
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.search_list_title_list {
		width: 100%;
		display: flex;
		height: 70rpx;
		align-items: center;
		flex-wrap: nowrap;
		justify-content: center;
	}

	.iconfont_cont {
		display: flex;
		flex-direction: column;
		margin-left: 10rpx;
		align-items: center;
	}

	.iconfont_cont .iconfont {
		font-size: 20rpx;
		transform: scale(0.9);
		height: 15rpx;
	}

	.iconfont_cont .i_active_color {
		color: #49bdfb;
	}

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
</style>
