
const base = '/api.php?s=user/';

const api = {
	getUserInfo: base + 'user/get',			//获取用户信息
	init:{
		wxLogin: base + 'login/auth',			//微信授权
	},
	index: {
		getall : base + 'index/index'			//获取首页数据
	},
	mine:{
		getinfo: base + 'user/get_overview'				//获取 我的 信息
	}
}

export default api;
