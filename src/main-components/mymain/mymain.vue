<template>
  <div>
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
      require(['@/main-components/mymain/singer/singer'], resolve)
    },
    list: resolve => {
      require(['@/main-components/mymain/list/list'], resolve)
    },
    detailspage: resolve => {
      require(['@/main-components/mymain/detailspage/detailspage'], resolve)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

