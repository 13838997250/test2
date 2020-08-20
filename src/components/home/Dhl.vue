<template>
	<div class="dhl">
		<nav class="navbar navbar-default " role="navigation">
			<!--navbar-inverse-->
			<div class="container ">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
			<span class="sr-only">切换导航</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			 
		</button>
					<a class="navbar-brand coll-md-12" href="#"><img src="../../assets/log.jpg" /></a>
				</div>
				<div class="collapse navbar-collapse" id="example-navbar-collapse">
					<ul class="nav navbar-nav">
						<li>
							<router-link to='/Dhl'>首页</router-link>
						</li>
						<li>
							<router-link to='/Ozo'> 020云电商</router-link>
						</li>
						<li>
							<router-link to="#">云建站</router-link>
						</li>
						<li>
							<router-link to="#">小程序』</router-link>
						</li>
						<li>
							<router-link to="#">IDC数据中心</router-link>
						</li>
						<li>
							<router-link to="#">精选样板</router-link>
						</li>
						<li>
							<router-link to="#">客户案例</router-link>
						</li>
					</ul>
				</div>
				
				<div class="anniu col-lg-2 col-md-12">
					<a href="" class="dl">登录</a>
					<a href="" class="lan">注册有礼</a>
				</div>
			</div>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.navbar-header:after {
		display: block;
		content: '';
		clear: both;
	}
	
	.navbar-toggle {
		float: left;
		margin-left: 10px;
	}
	
	.navbar-brand img {
		margin: auto;
		max-width: 100%;
		width: 188px;
		height: 100%;
		display: block;
		height: 55px;
	}
	
	.navbar {
		background-color: white;
		border: 0px solid white;
	}
	
	.navbar-nav {
		/*margin-top: 20px;*/
	}
	
	.navbar-nav {
		margin-left: 56px;
	}
	
	.navbar-nav li a {
		font-family: "微软雅黑";
		font-size: 16px;
		/*color: rgb(255, 255, 255);*/
		font-weight: bold;
		text-decoration: none;
		font-style: normal;
		text-align: center;
		height: 53px;
		line-height: 53px;
	}
	
	.navbar-collapse:after {
		display: block;
		content: '';
		clear: both;
	}
	
	.anniu a {
		width: 54px;
		height: 24px;
		border: 1px solid black;
		padding: 8px;
		font-size: 12px;
		text-decoration: none;
		text-align: center;
		border-radius: 4px;
	}
	
	.anniu {
		float: right;
		margin-top: -20px;
	}
	
	.dl {
		color: black;
	}
	
	.lan {
		color: white;
		background-color: blue;
	}
</style>