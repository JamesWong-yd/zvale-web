<template>
  <div id="app">
    <!-- 头部 -->
    <header>
      <myheader :headerInfo="headerInfo">
        <div slot="name">12312312312</div>
      </myheader>
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
      headerInfo: {
        title: '这是我的头部',
        content: '这是内容',
        footer: '这是腿部'
      }
    }
  },
  components: {
    Myheader: resolve => {
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
header{
  background:#1abc9c;
}
</style>
