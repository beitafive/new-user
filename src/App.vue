<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
  	this.getUserInfo();
  },
  methods:{
  	getUserInfo(){
  		this.$axios.get(this.$api.getUserInfo,{
  			params:{
  				
  			}
  		}).then((res)=>{
  			let r = res.data;
  			if(r.error == 0){
  				this.$store.dispatch('getUserInfo',r.data)
  			}else{

  			}
  		})
  	}
  }
}
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width:100%;
	height: 100%;
	background: #f8f8f8;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>
