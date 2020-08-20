<template>
	<div class="jiejue container">
		<h2>{{logo}}</h2>
		<h5>{{logo1}}</h5>
		<p class="gd">{{more}}</p>
		<em></em>
		<div class="cent animated">
			<ul>
				<li v-for="item in jjlist">
					<img :src="item.img" />
					<p>{{item.title}}</p>
					<div class="sh">
						<span>{{item.conten}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logo: "解决方案",
				logo1: "专业行业电商经验，我们懂得您的真正需求",
				more: "查看更多+",
				jjlist: [{
					id: 0,
					img: '../../assets/qy.jpg',
					title: "企业建站解决方案",
					conten: "为企业提供从PC电脑版网站、手机触屏版网站、APP手"
				}, {
					id: 0,
					img: '../../assets/qy.jpg',
					title: "企业建站解决方案",
					conten: "为企业提供从PC电脑版网站、手机触屏版网站、APP手"
				}, {
					id: 0,
					img: '../../assets/qy.jpg',
					title: "企业建站解决方案",
					conten: "为企业提供从PC电脑版网站、手机触屏版网站、APP手"
				}, {
					id: 0,
					img: '../../assets/qy.jpg',
					title: "企业建站解决方案",
					conten: "为企业提供从PC电脑版网站、手机触屏版网站、APP手"
				}]
			}
		}
	}
</script>

<style scoped="scoped">
	h2,
	h5 {
		text-align: center;
	}
	
	h5 {
		color: #5C5C5C;
	}
	
	.jiejue {
		position: relative;
	}
	
	em {
		display: block;
		width: 60px;
		height: 4px;
		overflow: hidden;
		position: absolute;
		background: #858585;
		margin-left: -30px;
		top: 116px;
		left: 50%;
	}
	
	.gd {
		text-align: right;
		color: #8d8d8d;
	}
	
	.cent {
		width: 100%;
		height: 400px;
		padding-top: 60px;
	}
	
	.cent ul {
		display: flex;
	}
	
	.cent ul li {
		position: relative;
		overflow: hidden;
		margin-right: 2px;
		width: 299px;
		height: 318px;
	}
	
	.cent ul li img {
		border: none;
		width: 100%;
		height: 100%;
	}
	
	.cent ul li p {
		position: absolute;
		bottom: -9px;
		height: 100px;
		left: 0;
		background: #343434;
		line-height: 100px;
		color: #FFFFFF;
		text-align: center;
		font-size: 22px;
		width: 100%;
		transition: 0.5s;
		-moz-transition: 0.5s;
		-webkit-transition: 0.5s
	}
	
	.sh {
		position: absolute;
		width: 100%;
		height: 320px;
		background: #0A6DEE;
		left: 0;
		top: 320px;
		transition: 0.5s;
		-moz-transition: 0.5s;
		-webkit-transition: 0.5s
	}
	/*.sh{
		display: none;
	}*/
	
	.sh span {
		display: block;
		font-size: 14px;
		color: #FFFFFF;
		line-height: 30px;
		width: 230px;
		margin: 0 auto;
		height: 120px;
		overflow: hidden
	}
	
	.cent ul li:hover p {
		bottom: -110px;
		/*display: none;*/
	}
	
	.cent ul li:hover .sh {
		display: block;
		filter: alpha(opacity=90);
		-moz-opacity: 0.9;
		opacity: 0.9;
		top: 0;
	}
</style>