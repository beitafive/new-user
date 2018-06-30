/**
 *	by beitafive
 * 	解决微信授权问题
 * */

import axios from 'axios'
import store from '@/vuex/store'
import router from '@/router/index'

axios.interceptors.request.use(function (config) {  //在请求发出之前进行一些操作
	return config
})
axios.interceptors.response.use(response =>{
	if(response.status == '200'){
		let rsp = response.data;
		if(rsp.error == 1){
			if(rsp.error_code == "NOT_LOGIN"){
				window.location.href = '/api.php?s=user/login/auth&backurl='+encodeURIComponent(window.location.href);
				return null;
			}
		}
	}
	return response;
})
const http = {
	get:(url,params)=>{
		if(load){
			params = {...params}
		}
		return axios.get(url,{
			params:params
		})
	},
	post:(url,params)=>{
		if(load){
			params = {...params}
		}
		return axios.post(url,params)
	}
}
export default http;