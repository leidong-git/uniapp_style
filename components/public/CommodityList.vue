<template>
	<view class="commodity_cont">
		<view class="commodity_list" v-for="(item,index) in commodity_data" :key="index">
			<image class="commodity_img" :src="`../../static/image/${item.img}`"></image>
			<view class="commodity_detail">
				<view class="detail">{{item.detail}}</view>
				<view class="price">
					<view>¥{{item.price}}</view>
					<view class="old_price">¥{{item.old_price}}</view>
				</view>
				<i class="discount">{{item.discount}}折</i>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// props: {
		// 	commodity_data: Array
		// },
		data() {
			return {
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
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.commodity_cont {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		color: #434343;
	}

	.commodity_list {
		width: 50%;
		height: auto;
		margin-bottom: 20rpx;
	}

	.commodity_list .commodity_img {
		width: 100%;
		height: 300rpx;
	}

	.commodity_list .commodity_detail {
		width: 100%;
		padding: 15rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.commodity_detail .detail {
		width: 100%;
		wtext-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		line-height: 40rpx;
		font-size: 24rpx;
	}

	.commodity_detail .price {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		height: 50rpx;
	}

	.price view {
		color: #f00;
	}

	.price .old_price {
		color: #f1f1f1;
		margin-left: 20rpx;
	}

	.discount {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		height: 40rpx;
		text-align: center;
		border: 2rpx solid #fff000;
		font-size: 24rpx;
		font-style: initial;
		border-radius: 10rpx;
	}
</style>
