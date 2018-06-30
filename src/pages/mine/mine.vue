<template>
	<div class="mine">
		<!--顶部  用户信息-->
		<div class="mine-top wd-flex">
			<img :src="mine.profile_photo">
			<div class="name-id">
				<p class="light-34">{{mine.nickname}}</p>
				<p class="light-26">ID：{{userInfo.user_id}}</p>
			</div>
			<div class="setting-btn light-26">
				设置
			</div>
		</div>
		<!--订单状态-->
		<div class="order-type wd-flex">
			<div class="order-type-item">
				<i class="iconfont">&#xe666;</i>
				<p class="light-26">待付款({{mine.order_wait_pay}})</p>
			</div>
			<div class="order-type-item">
				<i class="iconfont">&#xe661;</i>
				<p class="light-26">待发货({{mine.order_wait_send}})</p>
			</div>
			<div class="order-type-item">
				<i class="iconfont">&#xe65f;</i>
				<p class="light-26">待收货({{mine.order_wait_rec}})</p>
			</div>
		</div>
		<!--服务 列表-->
		<div class="serve-item" :style="{marginBottom:item.margin?'.1rem':'0'}" v-for="(item,index) in serveList" :key="index">
			<div class="serve-wrappar wd-flex" :style="{borderBottom:item.margin?'0':'1px solid #e7e7e7'}">
				<i class="iconfont serve-logo" :style="{color:item.color}" v-html="item.icon" v-if="item.icon"></i>
				<p class="light-28">{{item.name}}</p>
				<i class="iconfont serve-arrows">&#xe616;</i>					
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'mine',
		data(){
			return{
				mine:{},
				serveList:[{name:'全部订单',icon:'',path:'',margin:true,color:''},
				{name:'收货地址',icon:'&#xe662;',path:'',margin:false,color:'#9AB6FF'},
				{name:'优惠券',icon:'&#xe665;',path:'',margin:false,color:'#FF9A9A'},
				{name:'我的厨币',icon:'&#xe696;',path:'',margin:false,color:'#FFBC82'},
				{name:'成为店主',icon:'&#xe663;',path:'',margin:true,color:'#9AD2FF'},
				{name:'发票服务',icon:'&#xe613;',path:'',margin:false,color:'#FF9A9A'},
				{name:'我收藏的宝贝',icon:'&#xe652;',path:'',margin:false,color:'#ffd69a'},
				{name:'帮助与客服',icon:'&#xe684;',path:'',margin:false,color:'#ff9aae'}]
			}
		},
		computed:{
			userInfo(){
				return this.$store.getters.getUserInfo;
			}
		},
		mounted(){
			this.getUserInfo();
		},
		methods:{
			getUserInfo(){
				this.$axios.get(this.$api.mine.getinfo).then((res)=>{
					let r = res.data;
					if(r.error == 0){
						this.mine = r.data;
					}
				})
			}
		}
	}
</script>

<style scoped lang='scss'>
	.mine{
		padding-bottom:1rem;
		.mine-top{
			width:100%;
			height:1.9rem;
			background:#1A1920 url('https://wd-image.cdn.hzanchu.com/45126aebd730a2d7079c1fd4c9754e83') no-repeat;
			background-size:cover;
			align-items:center;
			img{
				width:1rem;height:1rem;
				border-radius:100%;
				margin:0 .26rem 0 .36rem;
			}
			.name-id{
				color:#fff;
				line-height:.42rem;
				flex:1
			}
			.setting-btn{
				width:1.24rem;
				height:.46rem;
				background:rgba(255,255,255,0.2);
				color:#fff;
				text-align: center;
				line-height:.46rem;
				border-radius:.4rem 0 0 .4rem;
			}
		}
		.order-type{
			height:1.4rem;
			box-sizing: border-box;
			padding:.2rem 0;
			justify-content: center;
			align-items:center;
			background: #fff;
			border-bottom:1px solid #e7e7e7;
			.order-type-item{
				flex:1;
				height:100%;
				text-align:center;
				color:#3c3c3c;
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				i{
					font-size:.35rem;
				}
				p{
					margin-top:.1rem;
				}
			}
			.order-type-item:nth-of-type(2){
				border-left:1px solid #e7e7e7;
				border-right:1px solid #e7e7e7;
			}
		}
		.serve-item{
			background:#fff;
			padding-left:.36rem;
			.serve-wrappar{
				height:1rem;
				padding-right:.36rem;
				align-items:center;
				p{
					color:#3c3c3c;
				}
				.serve-logo{
					font-size:.36rem;
				}
				.serve-arrows{
					margin-left:auto;
				}
			}
		}
	}
</style>