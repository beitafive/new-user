<template>
	<div class="classify-list">
		{{id}}
	</div>
</template>

<script>
	export default{
		name:'classifyList',
		data(){
			return{
//				id:this.$route.params.id
			}
		},
		computed:{
			id(){
				return this.$route.params.id
			}
		}
	}
</script>

<style>
</style>