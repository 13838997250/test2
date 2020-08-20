<template>
	<div class="swiper">
		 
		<div id="myCarousel1" class="carousel slide">   
  
    <div class="carousel-inner">
        <div class="item active">
           <img src="../../assets/ll.jpg" alt="First slide">
            
        </div>
        <div class="item">
           <img src="../../assets/lo.jpg" alt="Second slide">
            
        </div>
        <div class="item">
           <img src="../../assets/lu.png" alt="Second slide">
            
        </div>
    </div>
     
    <a class="carousel-control left" href="#myCarousel1" 
    data-slide="prev">&lsaquo;</a>
    <a class="carousel-control right" href="#myCarousel1" 
    data-slide="next">&rsaquo;</a>
</div>

      <!--<div class="sss">
      	<swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                <img :src="item"/>
            </swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>   
              
            <div class="swiper-button-prev" slot="button-prev"></div> 
            <div class="swiper-button-next" slot="button-next"></div> 
        </swiper>
      </div>-->
	</div>
</template>

<script>
	 
//	 export default {
//      data(){
//          return {
//              swiperOption:{
//                   
//                  pagination: {
//                    el: '.swiper-pagination'
//                  },
//                  
//                  navigation: {
//                    nextEl: '.swiper-button-next', 
//                    prevEl: '.swiper-button-prev'
//                  },
//                   
//                  autoplay: {
//                    delay: 2000,
//                    
//                    disableOnInteraction: false,
//                  },
//                  
//                  loop: true
//              }
//          }
//      }
//  }

 
</script>

<style scoped="scoped">
 
</style>