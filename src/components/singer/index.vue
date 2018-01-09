<template>
  <div>
    <div v-for="(item, index) in temp" :key="index" :is="item.temp"></div>

  </div>
</template>

<script>
import MNav from '@/main-components/m-nav/m-nav.vue'
import MNavTwo from '@/main-components/m-nav/m-nav-two.vue'

export default {
  data() {
    return {
      temp: [
        { temp: 'MNav' },
        { temp: 'MNavTwo' },
        { temp: 'MNav' },
        { temp: 'MNavTwo' },
        { temp: 'MNav' },
        { temp: 'MNavTwo' },
        { temp: 'MNav' }
      ]
    }
  },
  components: {
    MNav,
    MNavTwo
  }
}
</script>

<style lang="stylus" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}

.layout-footer-center {
  text-align: center;
}
</style>

