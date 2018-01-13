import util from '@/libs/util'

let strdata = {}

strdata.header = {
  type: 'myheader',
  fixed: true,
  bgcolor: '#1abc9c',
  activeNav: '/',
  info: {
    logo: './static/images/logo-min.png',
    theme: 'dark',
    nav: [
      {
        name: '首页1',
        title: 'zvale | 纵享丝滑',
        path: '/index1',
        sort: 1,
        pagetype: 'singer',
        state: true
      },
      {
        name: '首页2',
        title: 'zvale | 纵享丝滑2',
        path: '/index2',
        sort: 22,
        pagetype: 'list',
        state: true
      },
      {
        name: '首页3',
        title: 'zvale | 纵享丝滑3',
        path: '/index3',
        sort: 3,
        pagetype: 'list',
        state: true
      },
      {
        name: '首页4',
        title: 'zvale | 纵享丝滑4',
        path: '/index4',
        sort: 12,
        pagetype: 'singer',
        state: true
      }
    ]
  }
}
// 移除失效结构
strdata.header.info.nav = util.removeFalseState(strdata.header.info.nav).sort(util.sortNav)

export default strdata;
