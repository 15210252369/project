import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import shop from '../pages/shop/shop'
import shopGoods from '../pages/shop/shopGoods/shopGoods'
import shopRatings from '../pages/shop/shopRatings/shopRatings'
import shopInfo from '../pages/shop/shopInfo/shopInfo'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/',
      redirect: '/msite'
    }, {
      path: '/shop',
      component: shop,
      children:[
        {
          path:'/shop/goods',
          component:shopGoods
        },{
          path:'/shop/ratings',
          component:shopRatings
        },{
          path:'/shop/info',
          component:shopInfo
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    }
  ]
})
