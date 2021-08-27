<template>
	<view>
		<button type="default" @tap="onTabUser">获取用户</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onTabUser() {
				this.$msg.toast('提示')
			}
		}
	}
</script>

<style>

</style>
