<template>
	<div class="home">
		<Banner></Banner>
		<Dhl></Dhl>
		<Swiper></Swiper>
		<Sangcheng></Sangcheng>
		<Yx></Yx>
		<Jjue></Jjue>
		<Kh></Kh>
	</div>
</template>

<script>
   import Banner from './Banner'
   import Swiper from './Swiper'
   import Dhl from './Dhl'
   import Sangcheng from './Sangcheng'
   import Yx from './Yx'
   import Jjue from './Jjue'
   import Kh from './Kh'
	export default {
        name: 'home',
        components:{
        	Banner,
        	Swiper,
        	Dhl,
        	Sangcheng,
        	Yx,
        	Jjue,
        	Kh
        	
        }
}
</script>

<style>
</style>