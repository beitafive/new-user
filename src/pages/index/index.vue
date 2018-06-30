<template>
	<div class="index">
		<router-view></router-view>
		<bottom-nav :list="navList"></bottom-nav>
	</div>
</template>

<script>
	import bottomNav from '@/components/nav/bottomNav'
	export default{
		name:'index',
		data(){
			return{
				navList:[{name:'首页',router:'/index',icon:'&#xe635;'},{name:'店主精选',router:'/keeperselect',icon:'&#xe64f;'},{name:'发现',router:'/finddetail',icon:'&#xe636;'},{name:'购物车',router:'/shopcart',icon:'&#xe64e;'},{name:'我的',router:'/mine',icon:'&#xe638;'},]
			}
		},
		components:{
			bottomNav
		}
	}
</script>

<style scoped lang="scss">
	
</style>