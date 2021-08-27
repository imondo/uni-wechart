<template>
	<view class="user-btn">
		<view v-if="type=='user'" class="user-btn-item">
			<button class="user-btn-item" v-if="canIUseGetUserProfile" @tap="getUserProfile"></button>
			<button class="user-btn-item" v-else open-type="getUserInfo" @getuserinfo="getUserInfo"></button>
		</view>
		<view v-if="type=='phone'" class="user-btn-item">
			<button class="user-btn-item" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber"></button>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"UserButton",
		props: {
			type: {
				type: String,
				default: 'user'
			}
		},
		data() {
			return {
				canIUseGetUserProfile: false
			};
		},
		onLoad() {
			if (uni.getUserProfile) {
				this.canIUseGetUserProfile = true
			}
		},
		methods: {
			getUserProfile(e) {
				// 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
				// 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
				uni.getUserProfile({
					desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						console.log(res)
						this.$emit('tap', res)
					}
				})
			},
			getUserInfo(e) {
				console.log(e)
				this.$emit('tap', e.detail)
			},
			decryptPhoneNumber(e) {
				console.log(e)
				this.$emit('tap', e)
			}
		},
	}
</script>

<style lang="less">
.user-btn {
	position: relative;
	display: inline-block;
	&-item {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
		border: none;
		background-color: inherit;
		display: flex;
		height: 100%;
		&::after {
			border: 0;
		}
	}
}
</style>
