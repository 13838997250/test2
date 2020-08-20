import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
//Vue.use(Swiper)
import Ozo from '@/components/daohan/Ozo.vue'
import Dhl from '../components/home/Dhl.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			component: Home,
			children: [
			{
				path: '/Dhl ',
				component: Dhl
			}
			]
		},
        
	]
//  routers:[{
//  	path: '/',
// 		name: 'Ozo',
//	    component: Ozo,
//  }]
})