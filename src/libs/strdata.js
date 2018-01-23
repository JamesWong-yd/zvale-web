import util from '@/libs/util'

let strdata = {}

/*  #header.type 头部类型 String /myheader
    #header.fixed 是否固定 Boolean true/false
    #header.bgcolor 头部背景色 String bgcolor all
    #header.info 导航信息
    #header.info Object
      ##logo 网站logo File fixedheight freedomwidth
      ##theme 导航样式模板 String dark/light/primary
      ##nav 栏目信息 JSONArray
      ###name 栏目名称 String
      ###title 栏目显示名称 String
      ###path 显示路径 String
      ###sort 排序 String
      ###structureId 栏目结构ID ID
*/
strdata.header = {
  type: 'myheader',
  fixed: true,
  bgcolor: '#1abc9c',
  info: {
    logo: './static/images/logo-min.png',
    theme: 'dark',
    nav: [
      {
        name: '首页1',
        title: 'zvale | 纵享丝滑1',
        path: '/index1',
        sort: 1,
        pagetype: 'singer',
        state: true,
        structureId: '1'
      },
      {
        name: '首页2',
        title: 'zvale | 纵享丝滑2',
        path: '/index2',
        sort: 22,
        pagetype: 'list',
        state: true,
        structureId: '2'
      },
      {
        name: '首页3',
        title: 'zvale | 纵享丝滑3',
        path: '/index3',
        sort: 3,
        pagetype: 'list',
        state: true,
        structureId: '3'
      },
      {
        name: '首页4',
        title: 'zvale | 纵享丝滑4',
        path: '/index4',
        sort: 12,
        pagetype: 'detailspage',
        state: true,
        structureId: '4'
      }
    ]
  }
}

/*
  @mian 页面主题结构信息 JSONArray

*/
strdata.main = [
  {
    moduleId: '1',
    bgcolor: '#fff',
    padding: '0 0 0 0',
    margin: '0 0 0 0'
  },
  {
    moduleId: '2',
    bgcolor: '#ccc',
    padding: '0 0 0 0',
    margin: '0 0 0 0'
  }
]

strdata.footer = {
  type: 'myfooter',
  bgcolor: '#1abc9c',
  info: {

    rlength: 6,
    rTitle: 'Tel: +86 13662327524',
    rDetail: 'QQ: 380928526',
    linkRow: [
      {
        rowTitle: 'THIS IS ONE',
        link: [
          {
            title: 'LISYFG',
            router: './1'
          },
          {
            title: 'KJAHDK',
            router: './1'
          },
          {
            title: 'DQWHDKL',
            router: './1'
          },
          {
            title: 'DQWKLJDLK',
            router: './1'
          }
        ]
      },
      {
        rowTitle: 'THIS IS ONE',
        link: [
          {
            title: 'LISYQWEQWFG',
            router: './1'
          },
          {
            title: 'KJAQWEWEQQWEHDK',
            router: './1'
          },
          {
            title: 'DQWWQWEEWHDKL',
            router: './1'
          },
          {
            title: 'DQWKQWEWQELJDLK',
            router: './1'
          }
        ]
      },
      {
        rowTitle: 'THIS IS ONE',
        link: [
          {
            title: 'LISEQWQWEYFG',
            router: './1'
          },
          {
            title: 'KJAQWEQWEHDK',
            router: './1'
          },
          {
            title: 'QWEEQWWEQ',
            router: './1'
          },
          {
            title: 'DQWKQWEWEQLJDLK',
            router: './1'
          }
        ]
      },
      {
        rowTitle: 'THIS IS ONE',
        link: [
          {
            title: 'EQWQWE',
            router: './1'
          },
          {
            title: 'WEQWEQWEQ',
            router: './1'
          },
          {
            title: 'QWEQWEQWE',
            router: './1'
          },
          {
            title: 'QWEEQWQWE',
            router: './1'
          }
        ]
      },
      {
        rowTitle: 'THIS IS ONE',
        link: [
          {
            title: 'EQWQWE',
            router: './1'
          },
          {
            title: 'WEQWEQWEQ',
            router: './1'
          },
          {
            title: 'QWEQWEQWE',
            router: './1'
          },
          {
            title: 'QWEEQWQWE',
            router: './1'
          }
        ]
      }
    ]
  }
}

// 移除失效结构
strdata.header.info.nav = util.removeFalseState(strdata.header.info.nav).sort(util.sortNav)

export default strdata;
