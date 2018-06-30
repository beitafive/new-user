<template>
	<div class="search-box">
		<div class="wd-search wd-flex">
			<router-link to="/location" tag="div" class="wd-search-city wd-flex">
				<span class="regular-22">{{checkCity}}</span>
				<i class="iconfont">&#xe602;</i>
			</router-link>
			<router-link to='/search' tag="div" class="wd-search-go regular-26">
				<i class="iconfont">&#xe670;</i>
				<span>追寻美味</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'wdsearch',
		data(){
			return{
				checkCity:'杭州市',		//当前选中的城市
			}
		}
	}
</script>

<style scoped lang="scss">
.search-box{
	height:.8rem;
	.wd-search{
		position: fixed;
		width:100%;
		background:#fff;
		height:.8rem;
		left:0;top:0;
		box-sizing:border-box;
		padding:.1rem .26rem;
		.wd-search-city{
			width:1.2rem;
			margin-right:.26rem;
			line-height:.6rem;
			align-items:center;
			justify-content:center;
			span{
		    width: 70%;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    font-size: .26rem;
			}
			i{
				color:#3c3c3c;
				font-size:.24rem;
				transform: rotate(90deg);
			}
		}
		.wd-search-go{
			width:5.5rem;
			border-radius:6px;
			line-height:.6rem;
			color:#888;
			background:#f2f3f4;
			i{
				display: inline-block;
				margin:0 .05rem 0 .2rem;
			}
		}
	}
}
</style>