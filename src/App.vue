<template>
  <div id="app">
    <!-- 头部 -->
    <header :style="{background:header.bgcolor}" :class="{headerFix:header.fixed}">
      <div :is="header.type" :active="header.activeNav" :header="header.info"></div>
    </header>
    <!-- 内容 -->
    <main :class="{mainFix: header.fixed}">
      <router-view :main="main"></router-view>
    </main>
    <!-- 尾部 -->
    <footer>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      header: {
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
              path: '/',
              sort: 1,
              pagetype: 'singer'
            },
            {
              name: '首页2',
              path: '/index2',
              sort: 22,
              pagetype: 'list'
            },
            {
              name: '首页3',
              path: '/index3',
              sort: 3,
              pagetype: 'list'
            },
            {
              name: '首页4',
              path: '/index4',
              sort: 12,
              pagetype: 'singer'
            }
          ]
        }
      },
      main: {
        pagetype: 'singer',
        info: {}
      }
    }
  },
  created() {
    this.header.activeNav = `/${this.getStatus(this.$route.path)}`
  },
  methods: {
    getStatus(urlStr) {
      var urlStrArr = urlStr.split('/')
      return urlStrArr[urlStrArr.length - 1]
    }
  },
  watch: {
    $route(to, from) {
      let path = '/' + this.getStatus(this.$route.path)
      let checkObj = this.header.info.nav
      for (const i in checkObj) {
        if (checkObj[i].path === path) {
          this.main.pagetype = checkObj[i].pagetype
          break
        }
      }
    }
  },
  components: {
    myheader: resolve => {
      require(['@/main-components/myheader/myheader'], resolve)
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media screen and (min-width: 768px) {
  #app {
    min-width: 1200px;
  }
}

header {
  width: 100%;
}

.headerFix {
  position: fixed;
  top: 0;
}

main {
  min-height: 2000px;
}

.mainFix {
  margin-top: 60px;
}
</style>
