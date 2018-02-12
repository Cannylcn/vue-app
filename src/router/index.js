import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

const Index = () => import('@/page/Index')
const Login = () => import('@/page/Login')
const LoginType = () => import('@/page/LoginType')
const Register = () => import('@/page/Register')
const PopularMovie = () => import('@/page/PopularMovie')
const SongList = () => import('@/page/SongListDetail')
const SongPlay = () => import('@/page/SongPlay')
const Recommend = () => import('@/page/Recommend')
const AllSongList = () => import('@/page/AllSongList')
const Ranking = () => import('@/page/Ranking')
const UserInfo = () => import('@/page/UserInfo')
const MyMusic = () => import('@/page/MyMusic')
const Social = () => import('@/page/SocialExt')
const About = () => import('@/page/About')
const SettingUp = () => import('@/page/SettingUp')
const Timing = () => import('@/page/Timing')
const Message = () => import('@/page/Message')
const Vip = () => import('@/page/Vip')
const Store = () => import('@/page/Store')
const Skin = () => import('@/page/Skin')
const MyDynamic = () => import('@/page/MyDynamic')
const Attention = () => import('@/page/Attention')
const Fans = () => import('@/page/Fans')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/popular',
      name: 'popularMovie',
      component: PopularMovie,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/songlist',
      name: 'songList',
      component: SongList
    },
    {
      path: '/songplay',
      name: 'songplay',
      component: SongPlay
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/info',
      name: 'info',
      component: UserInfo
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusic
    },
    {
      path: '/social',
      name: 'social',
      component: Social
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/set',
      name: 'set',
      component: SettingUp
    },
    {
      path: '/timing',
      name: 'timing',
      component: Timing
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/skin',
      name: 'skin',
      component: Skin
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: MyDynamic
    },
    {
      path: '/attention',
      name: 'attention',
      component: Attention
    },
    {
      path: '/fans',
      name: 'fans',
      component: Fans
    },
    {
      path: '/allsonglist',
      name: 'allsonglist',
      component: AllSongList
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logintype',
      name: 'logintype',
      component: LoginType
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      component: Login,
      hidden: true
    }
  ]
})

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
// let methods = ['push', 'go', 'replace', 'forward', 'back']

router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.dispatch('updateDirection', 'forward')
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.dispatch('updateDirection', '')
      } else {
        store.dispatch('updateDirection', 'reverse')
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.dispatch('updateDirection', 'forward')
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }

  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
