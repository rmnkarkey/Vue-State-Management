import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import About from '../components/about'
import WeDo from '../components/wedo'
import testimon from '../components/textimonal'
import team from '../components/team'
import JoinTeam from '../components/jointeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/about',
    	name:'About',
    	component:About
    },
    {
    	path:'/work',
    	name:'WeDo',
    	component:WeDo
    },
    {
    	path:'/testimonal',
    	name:'testimon',
    	component:testimon
    },
    {
    	path:'/team',
    	name:'team',
    	component:team
    },
    {
        path:'/jointeam',
        name:'joinTeam',
        component:JoinTeam
    }
    ]
})
