<template>
  <div>
    <!-- 头部 -->
    <header :style="{background:header.bgcolor}" :class="{headerFix:header.fixed}">
      <div :is="header.type" :active="activeNav" :header="header.info"></div>
    </header>
    <!-- 内容 -->
    <main :class="{mainFix: header.fixed}">
      <router-view :main="main"></router-view>
    </main>
    <!-- 尾部 -->
    <footer :style="{background:footer.bgcolor}">
      <div :is="footer.type" :footer="footer.info"></div>
    </footer>
  </div>
</template>

<script>
import strdata from '@/libs/strdata'

export default {
  data() {
    return {
      header: {},
      activeNav: '',
      main: {
        pagetype: 'singer',
        info: {}
      },
      footer: {}
    }
  },
  created() {
    this.header = strdata.header
    this.footer = strdata.footer
    this.activeNav = `/${this.getStatus(this.$route.path)}`
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
    },
    myfooter: resolve => {
      require(['@/main-components/myfooter/myfooter'], resolve)
    }
  }
}
</script>

<style>
header {
  width: 100%;
}

.headerFix {
  position: fixed;
  top: 0;
  z-index: 25;
}

main {
  min-height: 500px;
}

.mainFix {
  margin-top: 60px;
}
</style>

