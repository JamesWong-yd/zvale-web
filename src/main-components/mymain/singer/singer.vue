<template>
  <div>
    <div v-for="(item, index) in structure" :key="index" :is="item.type" :info="item.info"></div>
  </div>
</template>

<script>
export default {
  props: ['main'],
  data() {
    return {
      structure: [
        {
          type: 'myCarousel',
          info: {
            index: 0,
            height: '200',
            autoplay: true,
            autoplaySpeed: 5000,
            dots: 'inside',
            radiusDot: false,
            trigger: 'click',
            arrow: 'hover',
            images: ['./satic/images/1.jpg', './static/images/2.jpg', './static/images/1.jpg', './static/images/2.jpg']
          }
        }
      ]
    }
  },
  created() {
    // console.log('this is singer')
  },
  components: {
    myCarousel: resolve => {
      require(['@/components/myCarousel/myCarousel'], resolve)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

