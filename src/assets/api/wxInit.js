'use strict';
import axios from '@/http';

export function wxConfig(to){
	return new Promise((resolve,reject)=>{
		axios.get('/api.php?s=user/login/getJssdkParams',{
			params:{
				url:window.location.origin+to
			}
		}).then((res)=>{
			let r = res.data;
			if(r.error == 0){
				wx.config({
				  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				  appId: r.data.appId, // 必填，公众号的唯一标识
				  timestamp:r.data.timestamp , // 必填，生成签名的时间戳
				  nonceStr: r.data.nonceStr, // 必填，生成签名的随机串
				  signature: r.data.signature,// 必填，签名，见附录1
				  jsApiList: ['checkJsApi', 'getLocation', 'chooseWXPay', 'chooseImage', 'uploadImage', 'getLocalImgData', 'downloadImage','onMenuShareAppMessage','onMenuShareTimeline','hideMenuItems'] 
				})
				wx.error((res)=>{
					wxConfig();
				})
				resolve();
			}
		})
	})
}
