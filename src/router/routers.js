import Mymain from '@/main-components/mymain/mymain'

let singerInfo = [
  { path: '/' },
  { path: '/index4' },
  { path: '/index2' },
  { path: '/index3' }
]

let route = []
for (let i in singerInfo) {
  let robj = {
    path: singerInfo[i].path,
    component: Mymain
  }
  route.push(robj)
}

export const routers = [
  ...route
]
