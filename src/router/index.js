import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Games from '@/components/Games'
import MyGames from '@/components/MyGames'
import Login from '@/components/login/Login'

import Create from '@/components/games/Create'
import Play from '@/components/games/Play'
import DvonnRule from '@/components/games/dvonn/Rule'
import DvonnPlay from '@/components/games/dvonn/Play'

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: '/create/:gameType',
      name: 'Create',
      component: Create
    },
    {
      path: '/play/:gameType',
      name: 'Play',
      component: Play
    },
    {
      path: '/mygames',
      name: 'MyGames',
      component: MyGames
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/games/rule/dvonn',
      name: 'DvonnRule',
      component: DvonnRule
    },
    {
      path: '/games/play/dvonn',
      name: 'DvonnPlay',
      component: DvonnPlay,
      meta: {requiresAuth: true, playerAuth: true}
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('openXumUser'));

    if (!authUser || !authUser.token) {
      next('/login')
    }
    else if (to.meta.adminAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('openXumUser'));

      if (authUser.data.role === 'admin') {
        next()
      } else {
        next('/')
      }
    } else if (to.meta.playerAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('openXumUser'));

      if (authUser.data.role === 'player') {
        next()
      } else {
        next('/admin')
      }
    }
  } else {
    next()
  }
});

export default router;