<template>
	<view class="container">

		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<video src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls></video>
		<uni-link :href="href" :text="href"></uni-link>
		<button type="primary" @tap="onTab">点击</button>
		<button type="default" @tap="onTabMsg">提示</button>
		<button type="default" @tap="onTapSleep">延迟</button>
		<UserButton @tap="onTapUser">登录</UserButton>/
		<UserButton type="phone" @tap="onTapPhone">手机号</UserButton>
		<button type="default" @tap="onTabNav">跳转</button>
		<uni-fab :content="fabContent" horizontal="right" @trigger="onTrigger" @fabClick="onTab"></uni-fab>
	</view>
</template>

<script>
	import UserButton from '../../components/UserButton.vue';
	import {
		sleep
	} from '../../utils/util.js'
	export default {
		components: {
			UserButton
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				fabContent: [{
						text: '选项1',
						value: 1
					},
					{
						text: '选项2'
					},
					{
						text: '选项3'
					}
				]
			}
		},
		onLoad() {},
		methods: {
			async onTab() {
				await this.$storage.set('a', {
					b: 1
				})
				try {
					const a = await this.$storage.get('a')
					console.log(a)
				} catch (e) {
					//TODO handle the exception
				}

			},
			onTabMsg() {
				// this.$msg.success('提示')
				this.$msg.modal('询问', () => {
					console.log('确认')
				})
			},
			onTrigger(e) {
				console.log(e)
			},
			onTapSleep() {
				sleep(1000).then(() => {
					console.log('延迟 1s')
				})
			},
			onTapUser(e) {
				console.log('user', e)
			},
			onTapPhone(e) {
				console.log('phone', e)
			},
			onTabNav(e) {
				console.log(e)
				uni.navigateTo({
				  url: '../dashboard/dashboard?id=11333'
				});
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
