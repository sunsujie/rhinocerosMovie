<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item,index) in bannerImage" :key="index">
					<image class="swiper-item" :src="item.image">
				</swiper-item>
			</swiper>
		</view>
		<view class="example-body">
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" text="如有问题请咨询客服小雅" />
		</view>
		<view class="newFilm">
			<view class="uni-flex uni-row"
				style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text1">热门电影1</view>
				<view class="text2">查看更多
					<uni-icons type="arrowright" :color="moreColor" size="14" />
				</view>
			</view>
			<view class="film_list">
				<uni-grid :column="3" :show-border="false" :square="false" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
						<view class="grid-item-box" style="margin: 15rpx;">
							<image :src="item.url" class=".film_image" mode="aspectFill" />
							<text class="film_name">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
		<view class="newFilm">
			<view class="uni-flex uni-row"
				style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text1">同步剧场</view>
				<view class="text2">查看更多
					<uni-icons type="arrowright" :color="moreColor" size="14" />
				</view>
			</view>
			<view class="film_list">
				<uni-grid :column="3" :show-border="false" :square="false" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
						<view class="grid-item-box" style="margin: 15rpx;">
							<image :src="item.url" class=".film_image" mode="aspectFill" />
							<text class="film_name">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//banner模拟数据
				bannerImage: [{
					image: "../../static/banner/banner1.jpg"
				}, {
					image: "../../static/banner/banner2.jpg"
				}, {
					image: "../../static/banner/banner3.jpg"
				}],
				//模拟电影数据
				list: [{
						url: '../../static/banner/f1.jpg',
						text: 'Grid 1',
						badge: '0',
						type: "primary"
					},
					{
						url: '../../static/banner/f9.jpg',
						text: 'Grid 2',
						badge: '1',
						type: "success"
					},
					{
						url: '../../static/banner/f1.jpg',
						text: 'Grid 3',
						badge: '99',
						type: "warning"
					},
					{
						url: '../../static/banner/f9.jpg',
						text: 'Grid 4',
						badge: '2',
						type: "error"
					},
					{
						url: '../../static/banner/f1.jpg',
						text: 'Grid 5'
					},
					{
						url: '../../static/banner/f9.jpg',
						text: 'Grid 6'
					},
					{
						url: '../../static/banner/f1.jpg',
						text: 'Grid 7'
					},
					{
						url: '../../static/banner/f9.jpg',
						text: 'Grid 8'
					},
					{
						url: '../../static/banner/f1.jpg',
						text: 'Grid 9'
					}
				],
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500
			}
		},
		methods: {

		}
	}
</script>

<style>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		width: 100%;
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.text1 {
		color: #E8AB20;
		font-size: 32rpx;
		margin-left: 20rpx;
	}

	.text2 {
		color: #E8AB20;
		font-size: 32rpx;
		margin-right: 20rpx;
	}
	.film_image {
		width: 100%;
		height: 360rpx;
		border-radius: 10rpx;
	}

	.film_text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}

</style>
