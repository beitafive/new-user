import Vue from 'vue'
import Router from 'vue-router'
import { wxConfig } from '@/assets/api/wxInit'

/*
 首页模块
 * */
import index from '@/pages/index/index'
import indexBody from '@/pages/index/body'
const recommend = () => import('@/pages/index/child/recommend')
const singleSite = () => import('@/pages/index/child/singleSite')
const classifyNew = () => import('@/pages/index/child/classifyNew')
const classifyList = () => import('@/pages/index/child/classifyList')

const mine = () => import('@/pages/mine/mine')
const shopcart = () => import('@/pages/goods/shopcart')
const storeSelect = () => import('@/pages/store/storeSelect')
const find = () => import('@/pages/content/find')
Vue.use(Router)

const routes = [
  {
  	path: '/',name: 'index',redirect:'/index',component: index,meta:{title:'安厨商城'},children:[
    	{path:'/index',name: 'body',component: indexBody,meta:{title:'安厨商城'},children:[
    		{path:'',name: 'recommend',component: recommend,meta:{title:'安厨商城',wxjssdk:true}},
    		{path:'/index/singlesite',name: 'singleSite',component: singleSite,meta:{title:'特色中国'}},
    		{path:'/index/classifynew',name: 'classifyNew',component: classifyNew,meta:{title:'新品'}},
    		{path:'/index/classifylist/:id',name: 'classifyList',component: classifyList,meta:{title:'首页'}}
    	]},
    	{path:'/keeperselect',name: 'storeSelect',component: storeSelect,meta:{title:'店主精选'}},
    	{path:'/mine',name: 'mine',component: mine,meta:{title:'我的',wxjssdk:true}},
    	{path:'/shopcart',name: 'shopcart',component: shopcart,meta:{title:'购物车'}},
    	{path:'/finddetail',name: 'find',component: find,meta:{title:'发现'}}
    ]
  }
]

const router = new Router({
	mode:"history",
	routes
});
router.beforeEach((to,from,next)=>{
	//可以做登录拦截。 需要登录的路由后面加上requireAuth:true 就可以
//	if(to.matched.some(r => r.meta.wxjssdk)){
//	}
	next();
	document.title = to.meta.title
})
router.afterEach((to, from)=>{
	console.log(to)
	if(to.matched.some(r => r.meta.wxjssdk)){
		wxConfig(to.path)
	}
})

export default router;