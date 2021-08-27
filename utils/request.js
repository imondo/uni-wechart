/**
 * 请求
 */
export function request({
	url,
	method = 'get',
	data,
	header = {},
}) {
	return new Promise((reslove, reject) => {
		uni.request({
			url: url,
			method: method
			data: data,
			header: header,
			success: (res) => {
				console.log(res.data);
			},
			complete: res => {
				if (res.code === 200) {
					reslove(res.data)
				} else {
					reject()
				}
			}
		});
	})
}
