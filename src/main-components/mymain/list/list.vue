<template>
  <div>
    这是list
    <br> {{this.message}}
  </div>
</template>

<script>
import util from '@/libs/util'

export default {
  props: ['main'],
  data() {
    return {
      message: 'asd'
    }
  },
  created() {
    // console.log('this is list')
  },
  watch: {
    $route(to, from) {
      util.axios.get('/approle').then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

