<template>
	<div class="kehu container">
		<h2>{{logo}}</h2>
		<h5>{{logo1}}</h5>
		<p class="gd">{{more}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
					logo:"客户案例",
			        logo1:"他们都在用上吾云的产品和服务",
			        more: "更多客户案例+",
			       }
		}
	}
</script>

<style scoped="scoped">
h2,h5{
		text-align: center;
	}
	h5{
		color: #5C5C5C;
	}
	.gd {
		text-align: right;
		color: #8d8d8d;
	}
</style>