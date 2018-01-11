<template>
  <div class="layout-main">
    <div :is="model" :main="maininfo"></div>
  </div>
</template>

<script>
export default {
  props: ['main'],
  data() {
    return {
      model: this.main.pagetype,
      maininfo: this.main.info
    }
  },
  watch: {
    $route(to, from) {
      this.model = this.main.pagetype
    }
  },
  methods: {},
  components: {
    singer: resolve => {
      require(['@/components/singer/singer'], resolve)
    },
    list: resolve => {
      require(['@/components/list/list'], resolve)
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout-main {
  width: 1200px;
  margin: 0 auto;
}
</style>

