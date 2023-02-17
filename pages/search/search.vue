<template>
	<view class="search_cont">
		<!-- #ifdef MP-WEIXIN -->
		<view class="search_title">
			<view class="search_title_list">
				<i class="iconfont icon-sousuo1"></i>
				<input type="text" focus v-model="search_value" placeholder="请输入搜索内容" />
				<view @click="Search_list" class="search_btn">搜索</view>
			</view>
		</view>
		<!-- #endif -->

		<view class="search_list_cont">
			<view class="search_list" v-show="item.tag_list.length != 0" v-for="(item,index) in search_list"
				:key="index">
				<view class="list_title">
					<text class="title_name">
						{{item.title}}
					</text>
					<i @click="Remove_show()" class="iconfont" :class="item.remove"></i>
				</view>
				<view class="list_tag">
					<view class="tag_name" v-for="(item1,index1) in item.tag_list" :key="index1">
						<text>{{item1}}</text>
						<i v-if="item.title == '最近搜索'" @click="Remove_tag(index1)" class="icon_remove"
							:style="remove_show ? 'display:block':'display:none'">×</i>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_value: '',
				search_list: [{
					title: "最近搜索",
					tag_list: ["四件套", "面膜", "衣服", "皮鞋", "充电宝", "手机"],
					remove: "icon-shanchu"
				}, {
					title: "热门推荐",
					tag_list: ["四件套", "面膜", "衣服", "皮鞋", "充电宝", "手机"],
					remove: ""
				}],
				remove_show: false
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if (e.float === 'right') {
				if (this.search_value == '') return uni.showToast({
					title: '请输入关键词',
					icon: 'error'
				})
				uni.navigateTo({
					url: `/pages/search/search_list?detail=${this.search_value}`
				})
			}
		},
		onNavigationBarSearchInputChanged(val) {
			this.search_value = val.text
		},
		methods: {
			// 删除搜索记录
			Remove_show() {
				this.remove_show = !this.remove_show
			},

			// 删除搜索记录
			Remove_tag(index) {
				console.log(index);
				this.search_list[0].tag_list.splice(index, 1)
			},

			// 修改input 值、
			Change_input(e) {
				console.log(e);
				this.$nextTick(() => {
					console.log(this.$refs.input.value)
					this.search_value = this.$refs.input.value
				})
			},

			// 跳转搜索结果页
			Search_list() {
				setTimeout(() => {
					if (this.search_value == '') return uni.showToast({
						title: '请输入关键词',
						icon: 'error'
					})
					uni.navigateTo({
						url: `/pages/search/search_list?detail=${this.search_value}`
					})
				}, 500)
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

	.search_list_cont {
		width: 100%;
		height: auto;
	}

	.search_list_cont .search_list {
		width: 100%;
		height: auto;
	}

	.search_list .list_title {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		height: 80rpx;
		line-height: 80rpx;
		color: #434343;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.list_title .title_name {
		font-size: 30rpx;
	}

	.list_title .iconfont {
		font-size: 34rpx;
	}

	.search_list .list_tag {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		height: auto;
		color: #434343;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.list_tag .tag_name {
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 20rpx;
		background: #f1f1f1;
		color: #aaa;
		border-radius: 100rpx;
		margin: 10rpx 0rpx;
		margin-right: 20rpx;
		position: relative;
	}

	.tag_name .icon_remove {
		width: 30rpx;
		height: 30rpx;
		line-height: 25rpx;
		text-align: center;
		font-style: initial;
		position: absolute;
		top: -25%;
		right: -10%;
		background: rgba(255, 0, 0, 0.5);
		border-radius: 100rpx;
		color: #fff;
		z-index: 100;
	}
</style>
