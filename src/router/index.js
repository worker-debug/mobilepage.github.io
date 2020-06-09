import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import cate from '../components/cate'

Vue.use(Router)

// const originalReplace = Router.prototype.replace;
// Router.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cate',
      name: 'cate',
      component: cate
    }
  ]
})
