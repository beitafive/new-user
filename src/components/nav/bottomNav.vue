<template>
	<div class="bottom-nav">
		<router-link v-for="(item,index) in list" :key="index" tag="div" :to="item.router" >
			<i class="iconfont" v-html="item.icon"></i>
			<span>{{item.name}}</span>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'bottomNav',
		props:{
			list:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style scoped lang="scss">
.bottom-nav{
	width: 100%;
	height: 0.98rem;
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 100;
	background: #fff;
	line-height:0.45rem;
	z-index: 4000;
	border-top: 0.01rem solid #ccc;
	div {
		text-align: center;
		flex:1;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
    i{
    	display: block;
      width: 100%;
      color: #666;
      margin-top: .14rem;
      font-size: .4rem;
	  	font-weight: 600;
    }
    span{
    	display: block;
      width: 100%;
      font-size: .24rem;
      color: #333;
    }
  }
  .router-link-active{
  	i{
  		color:#CC3737
  	}
  	span{
  		color:#CC3737
  	}
  }
}
</style>