class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }

    return Storage.instance;
  }

  set(key, value) {
    const _val = typeof value === 'object' ? JSON.stringify(value) : value;
		return new Promise((resolve, reject) => {
			uni.setStorage({
				key: key,
				data: _val,
				success: function () {
					console.log('success');
					resolve()
				},
				fail: function() {
					reject()
				}
			});
		})
  }

  get(key) {
    return new Promise((resolve, reject) => {
			uni.getStorage({
				key: key,
				success: function (res) {
					const str = res.data;
					try {
						var _val = JSON.parse(str);
						resolve(_val);
					} catch (e) {
						resolve(str);
					}
				},
				fail: function() {
					reject()
				}
			});
		})
  }

  remove(key) {
		try {
		    uni.removeStorageSync(key);
		} catch (e) {
		}
  }

  clear() {
    try {
        uni.clearStorageSync();
    } catch (e) {
    }
  }
}

export default Storage.getInstance;
