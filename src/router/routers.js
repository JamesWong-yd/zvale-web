import strdata from '@/libs/strdata'
import Main from '@/main.vue';

let singerInfo = strdata.header.info.nav || ''
let route = []
for (let i in singerInfo) {
  let robj = {
    path: singerInfo[i].path,
    meta: {
      title: singerInfo[i].title
    },
    component: resolve => { require(['@/main-components/mymain/mymain'], resolve); }
  }
  route.push(robj)
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/error-page/404.vue'], resolve); }
};

export const appRouter = {
  path: '/',
  name: 'app',
  component: Main,
  redirect: singerInfo[0].path,
  children: route
};

export const routers = [
  appRouter,
  page404
]
