/**
 * by beitafive
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 * context === store
 * **/

const actions = {
	getUserInfo:(context,data)=>{
		context.commit('GETUSERINFO',data)
	}
}

export default actions;