<template>
  <div>
    这是details
    <br> {{this.message}}
  </div>
</template>

<script>
// import util from '@/libs/util'

export default {
  props: ['main'],
  data() {
    return {
      message: 'asd'
    }
  },
  created() {
    // console.log('this is details')
  },
  watch: {
    $route(to, from) {
      // util.axios.get('/approle').then(res => {
      //   console.log(res.data)
      // })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
