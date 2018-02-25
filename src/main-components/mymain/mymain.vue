<template>
  <div>
    <div :is="model" :main="structureId"></div>
  </div>
</template>

<script>
export default {
  props: ['main'],
  data() {
    return {
      model: this.main.pagetype,
      structureId: this.main.structureId
    }
  },
  watch: {
    $route(to, from) {
      this.model = this.main.pagetype
      this.structureId = this.main.structureId
      window.scrollTo(0, 0)
    }
  },
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

