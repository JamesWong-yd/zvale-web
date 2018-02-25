<template>
  <div>
    这是list
    <br> {{this.message}}
    <input type="text">
  </div>
</template>

<script>
// import util from '@/libs/util'

export default {
  props: ['main'],
  data() {
    return {
      message: this.main
    }
  },
  created() {
    // console.log(2)
  },
  watch: {
    $route(to, from) {
      this.message = this.main
      // console.log(this.flag)
      // util.axios.get('/approle').then(res => {
      //   console.log(res.data)
      // })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

