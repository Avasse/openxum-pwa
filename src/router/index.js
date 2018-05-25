import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games'
import MyGames from '@/components/MyGames'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Profile from '@/components/Profile'
import Faq from '@/components/Faq'

import Create from '@/components/games/Create'
import CreateGame from '@/components/games/CreateGame'
import PlayDvonn from '@/components/games/dvonn/PlayDvonn'
import RulesDvonn from '@/components/games/dvonn/RulesDvonn'
import RulesGipf from '@/components/games/gipf/RulesGipf'
import RulesInvers from '@/components/games/invers/RulesInvers'
import RulesKamisado from '@/components/games/kamisado/RulesKamisado'
import RulesPaletto from '@/components/games/paletto/RulesPaletto'
import RulesPentago from '@/components/games/pentago/RulesPentago'
import RulesTzaar from '@/components/games/tzaar/RulesTzaar'
import RulesYinsh from '@/components/games/yinsh/RulesYinsh'
import RulesZertz from '@/components/games/zertz/RulesZertz'

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
      path: '/faq',
      name: 'Faq',
      component: Faq
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
      path: '/games/play/dvonn/:type/:color/:mode/:idGame',
      name: 'PlayDvonn',
      component: PlayDvonn,
      meta: {requiresAuth: true, playerAuth: true}
    },
    {
      path: '/games/rules/dvonn',
      name: 'RulesDvonn',
      component: RulesDvonn
    },
    {
      path: '/games/rules/gipf',
      name: 'RulesGipf',
      component: RulesGipf
    },
    {
      path: '/games/rules/invers',
      name: 'RulesInvers',
      component: RulesInvers
    },
    {
      path: '/games/rules/kamisado',
      name: 'RulesKamisado',
      component: RulesKamisado
    },
    {
      path: '/games/rules/paletto',
      name: 'RulesPaletto',
      component: RulesPaletto
    },
    {
      path: '/games/rules/pentago',
      name: 'RulesPentago',
      component: RulesPentago
    },
    {
      path: '/games/rules/tzaar',
      name: 'RulesTzaar',
      component: RulesTzaar
    },
    {
      path: '/games/rules/yinsh',
      name: 'RulesYinsh',
      component: RulesYinsh
    },
    {
      path: '/games/rules/zertz',
      name: 'RulesZertz',
      component: RulesZertz
    },
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