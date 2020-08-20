<template>
	<div class="yx container">
		<h2>{{logo}}</h2>
		<h5>{{logo1}}</h5>
		<div class="wx-img">
			 <ul>
			 	<li v-for="item in list">
			 		<img :src="item.imgUrl"/>
			 		<p class="db">{{item.title}}</p>
			 	</li>			 	 
			 </ul>
       </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
					logo:"微信营销小程序",
			        logo1:"帮助小微企业轻松玩转微信营销",
				    list:[
                       {
                       	id:0,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:1,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:2,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:3,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:4,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:5,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:6,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },{
                       	id:7,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:8,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:9,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:10,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:11,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       
                       {
                       	id:12,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },{
                       	id:13,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:14,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       },
                       {
                       	id:15,
                       	imgUrl:'../../assets/wx1.png',
                       	title:"夺宝"
                       }
                        
                        
            ]

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
	.db{
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.yx{
		padding: .6rem 0;
	}
	.yx ul li{
		padding-top: 50px;
		width: 12.5%;
		float: left;
	}
	.yx ul li img{
		width: 100px;
		height: 100px;
		margin-right: auto;
		margin-left: auto;
		display: block;
	}
   
</style>