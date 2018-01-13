import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import { routers } from './routers'
import util from '@/libs/util'

Vue.use(VueRouter)

const RouterConfig = {
  // mode: 'history',
  routes: routers
};

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  util.title(to.meta.title)
  if (to.matched.length === 0) {
    util.title()
    next({ name: 'error-404' })
  } else {
    next()
  }
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})
