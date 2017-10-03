import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Games from '@/components/Games'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    }
  ]
})
