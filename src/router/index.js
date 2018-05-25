import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games'
import MyGames from '@/components/MyGames'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Profile from '@/components/Profile'

import Create from '@/components/games/Create'
import CreateGame from '@/components/games/CreateGame'
import DvonnRules from '@/components/games/dvonn/RulesDvonn'
import DvonnPlay from '@/components/games/dvonn/PlayDvonn'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', redirect: { name: 'Home' }},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
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
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {requiresAuth: true, playerAuth: true}
    },
    {
      path: '/create/:gameType',
      name: 'Create',
      component: Create,
      meta: {requiresAuth: true, playerAuth: true}
    },
    {
      path: '/play/:gameType',
      name: 'Play',
      component: CreateGame
    },
    {
      path: '/games/rules/dvonn',
      name: 'DvonnRules',
      component: DvonnRules
    },
    {
      path: '/games/play/dvonn/:type/:color/:mode/:idGame',
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