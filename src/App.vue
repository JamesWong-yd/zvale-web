<template>
  <div id="app">
    <!-- 头部 -->
    <header :style="'background:'+ header.bgcolor">
      <div :is="header.type" :header="header.info"></div>
    </header>
    <!-- 内容 -->
    <main>
      <router-view></router-view>
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
        bgcolor: '#1abc9c',
        info: {
          logo: './static/images/logo-min.png',
          // dark、 light、 primary
          theme: 'dark',
          nav: [
            {
              name: '首页1',
              path: '/',
              sort: 1
            },
            {
              name: '首页2',
              path: '/index2',
              sort: 22
            },
            {
              name: '首页3',
              path: '/index3',
              sort: 3
            },
            {
              name: '首页4',
              path: '/index4',
              sort: 12
            }
          ]
        }
      },
      main: {}
    }
  },
  components: {
    myheader: resolve => {
      require(['@/main-components/myheader/myheader'], resolve)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*  */
@media screen and (min-width: 768px) {
  #app {
    min-width: 1200px;
  }
}
</style>
