import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from 'components/123.gif'
import './filters'//加载过滤器

Vue.config.productionTip = false
Vue.component(Button.name,Button)
Vue.use(VueLazyload)
Vue.use(VueLazyload, {//内部自定义一个指定 lazy
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
