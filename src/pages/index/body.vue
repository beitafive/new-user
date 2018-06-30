<template>
	<div class="index-body">
		<wd-search></wd-search>
		<row-scroll :list="cateList" box_id="rows" @rowChange="checkCard" wrapper_id="rows-child" :typeIndex="typeIndex" :config="config"></row-scroll>
		<router-view></router-view>
	</div>
</template>

<script>
	import wdSearch from '@/components/index/wdSearch'
	import rowScroll from '@/components/scroll/rowScroll'
	export default{
		name:'indexBody',
		data(){
			return{
				cateList:[{name:'推荐',link:'/index'},{name:'特色中国',link:'/index/singlesite'},{name:'新品',link:'/index/classifynew'}],
				info:{},
				typeIndex:0,
				config: {
					scrollX: true, //开启X滑动
					scrollY: false, //关闭Y滑动
					preventDefault: false,
					tap: true,
					disableMouse: true, //禁止鼠标
					disablePointer: true, //禁止指针
					momentum: false
				}
			}
		},
		components:{
			wdSearch,
			rowScroll
		},
		mounted(){
			this.getAll();
		},
		methods:{
			getAll(){
				this.$axios.get(this.$api.index.getall).then((res)=>{
					let r = res.data;
					if(r.error == 0){
						this.cateList = this.cateList.concat(r.data.category_level1);
						this.info = r.data;
					}
				})
			},
			checkCard(item,index) {
				this.typeIndex = index;
				if(item.link){
					this.$router.push(item.link)
				}else{
					this.$router.push({name:'classifyList',params:{id:item.id}})
				}
			}
		}
	}
</script>

<style scoped lang='scss'>
	
</style>