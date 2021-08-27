export default {
	toast(title, callback = () => {}, icon = 'none', duration = 2000) {
		uni.showToast({
			title: title,
			icon: icon,
			duration: duration
		});
		setTimeout(callback, duration)
	},
	success(title, callback = () => {}) {
		this.toast(title, callback, 'success')
	},
	error(title, callback = () => {}) {
		this.toast(title, callback, 'error')
	},
	modal(content, callback = () => {}, cancel = () => {}) {
		uni.showModal({
		    title: '提示',
		    content: content,
		    success: function (res) {
		        if (res.confirm) {
		          callback();
		        } else if (res.cancel) {
		          cancel();
		        }
		    }
		});
	}
}