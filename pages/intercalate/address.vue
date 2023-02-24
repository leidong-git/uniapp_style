<template>
	<view class="address">
		<view class="address_cont">
			<view class="address_list" v-for="(item,index) in address_data" :key="index"
				@touchstart="itemTouchStart($event, index)" @touchmove="itemTouchMove($event, index)"
				@touchend="itemTouchEnd($event, index)"
				:style="{ transform: vitrIndex==index ? 'translateX( ' + itemTransLateX + 'px)' : 0, transition: 'all 0.4s' }">
				<view class="list_column">
					<view>{{item.name}}</view>
					<view>{{item.phone}}</view>
				</view>
				<view class="list_column">
					<view class="default" v-if="item.default">默认</view>
					<view>{{item.address}}</view>
				</view>

				<view class="del-box" @touchend.stop>
					<view class="default_text" @click.stop="DefaultClick(index)">设为默认</view>
					<view class="delete_text" @click.stop="itemDelClick(index)">编辑</view>
				</view>
			</view>
		</view>

		<button class="address_add" @click="address_add()">新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vitrIndex: '',
				itemTransLateX: '',
				address_data: [{
					name: '田狗蛋',
					phone: '12345678910',
					address: '重庆市巴南区云篆山水C区**栋**-**',
					default: true,
				}, {
					name: '田狗蛋',
					phone: '12345678911',
					address: '重庆市开州区****',
					default: false,
				}, {
					name: '田狗蛋',
					phone: '12345678912',
					address: '重庆市南岸区弹子石***',
					default: false,
				}]
			}
		},
		methods: {
			address_add() {
				console.log(1111);
				uni.navigateTo({
					url: '/pages/intercalate/address_form'
				})
			},

			// 手指触摸事件
			itemTouchStart(e, index) {
				this.vitrIndex = index;
				this.startX = e.changedTouches[0].pageX;
				// console.log('手指触摸时', this.startX);
			},
			// 手指移动事件
			itemTouchMove(e) {
				let moveX = e.changedTouches[0].pageX;
				//计算删除划出的距离 具体根据实际情况 修改
				// this.itemTransLateX = moveX - this.startX >= 0 ? 0 : moveX - this.startX;
				this.itemTransLateX = -75
				// console.log(moveX)
				// console.log('手指移动了', this.itemTransLateX);
			},
			// 手指离开事件
			itemTouchEnd(e, index) {
				let endX = e.changedTouches[0].pageX;
				// 如果手指离开和手指触摸时的值一致则是点击事件的行为，不以滑动的逻辑处理此行为
				if (endX == this.startX) {
					if (this.itemTransLateX !== 0) return (this.itemTransLateX = 0);
					return;
				}
				this.itemTransLateX = endX - this.startX;
				// console.log('移动量', this.itemTransLateX);
				this.itemTransLateX = this.itemTransLateX <= -41 ? -75 : 0;
				// console.log('手指离开时', endX);
			},
			// 数据项的删除按钮点击事件
			itemDelClick(index) {
				uni.navigateTo({
					url: `/pages/intercalate/address_form?detail=${JSON.stringify(this.address_data[index])}`
				})
			},

			// 设为默认
			DefaultClick(index) {
				this.address_data = this.address_data.map(item => {
					return {
						...item,
						default: false
					}
				})

				this.address_data[index].default = true
				this.itemTransLateX = 0
			}
		}
	}
</script>

<style scoped lang="less">
	.address {
		width: 100%;
		height: calc(100vh - 90rpx);
		background: #f1f1f1;

		.address_cont {
			width: calc(100% - 40rpx);
			margin: 0 20rpx;
			box-sizing: border-box;
			overflow: hidden;

			.address_list {
				width: 100%;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				flex-direction: column;
				background: #fff;
				padding: 10rpx 20rpx;
				box-sizing: border-box;
				border-bottom: 2rpx solid #f2f2f2;
				font-size: 28rpx;
				margin-top: 20rpx;
				border-radius: 0;
				float: left;

				.list_column {
					width: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;

					view {
						display: flex;
						height: 70rpx;
						align-items: center;
						margin-right: 20rpx;
					}

					.default {
						background: #42b7fb;
						border-radius: 100px;
						color: #fff;
						padding: 0 20rpx;
						height: 40rpx;
					}
				}

				.del-box {
					width: 150rpx;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #F2F3F3;
					position: absolute;
					top: 0;
					right: -150rpx;
					z-index: -1;

					.delete_text {
						text-align: center;
						color: #fff;
						font-size: 34upx;
						background: #FF4E00;
						width: 100%;
						height: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.default_text {
						text-align: center;
						color: #fff;
						font-size: 34upx;
						background: #42b7fb;
						width: 100%;
						height: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}
		}

		.address_add {
			width: 50%;
			height: 70rpx;
			background: rgba(200, 100, 100, 0.8);
			color: #fff;
			border-radius: 50rpx;
			font-size: 30rpx;
			line-height: 70rpx;
			margin: 40rpx 25%;
			float: left;
			display: flex;
			justify-content: center;
		}
	}
</style>
