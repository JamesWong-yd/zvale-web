<template>
  <div>
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'asd'
    }
  },
  created() {
    this.message = this.getStatus(this.$route.path)
  },
  methods: {
    getStatus(urlStr) {
      var urlStrArr = urlStr.split('/')
      return urlStrArr[urlStrArr.length - 1]
    }
  },
  watch: {
    $route(to, from) {
      this.message = this.getStatus(this.$route.path)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

