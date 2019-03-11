import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/page/List'
import New from '../components/page/New'

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: '*',
			redirect: '/404'
		},
		{
			path: '/login',
			component: resolve => require(['../components/page/Login.vue'], resolve)
	},
		{
			path: '/',
			component: resolve => require(['../components/common/Home'], resolve),
			meta: {
				title: '自述文件'
			},
			children: [{
					path: '/',
					name: 'List',
					component: List,
					meta: {
						title: '列表信息'
					}
				},
				{
					path: '/new',
					name: 'New',
					component: New,
					meta: {
						title: '新建用户'
					}
				},
				{
					path: '/404',
					component: resolve => require(['../components/page/404.vue'], resolve),
					meta: {
						title: '404'
					}
				}
			]
		}
	]
})