<template>
  <div>
    <div class="my-col" v-for="(item, index) in structure" :style="{background:item.background,padding:item.padding}" :key="index" :is="item.type" :info="item.info"></div>
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
          background: '#fff',
          info: {
            index: 0,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: 'inside',
            radiusDot: false,
            trigger: 'click',
            arrow: 'never',
            images: [
              'https://resource.smartisan.com/resource/n/nhj1.png',
              'https://resource.smartisan.com/resource/n/nianhuojiepc1.png',
              'https://resource.smartisan.com/resource/p/pcshoujiaokouzhaosonger1.png',
              'https://resource.smartisan.com/resource/o/ofoshangchnegshoujiao1.png'
            ]
          }
        },
        {
          type: 'myCard',
          background: '#fff',
          padding: '50px 0',
          info: {
            width: '1200px',
            tilteColor: '#aaa',
            detailColor: '#bbb',
            col: 4,
            list: [
              {
                image: 'https://resource.smartisan.com/resource/d577909752ec2afef49e928041c44bb7.jpg?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              },
              {
                image: 'https://resource.smartisan.com/resource/9ae4d799a478d1a629966f84b56a1277.jpg?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              },
              {
                image: 'https://resource.smartisan.com/resource/3f78b9032249cbffbe813dfe1c0f03b7.jpg?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail: '这是的detail这是的d这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detailetail这是的detail这是的detail'
              },
              {
                image: 'https://resource.smartisan.com/resource/ce8b06c16e9f6f14d048de1e60d7f658.png?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              }
            ]
          }
        },
        {
          type: 'myCard',
          background: '#fff',
          padding: '50px 0',
          info: {
            width: '1200px',
            tilteColor: '#aaa',
            detailColor: '#bbb',
            col: 4,
            list: [
              {
                image: 'https://resource.smartisan.com/resource/0ac4853da0303c131147044f85d4bb1c.jpg',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              },
              {
                image: 'https://resource.smartisan.com/resource/d00bbc1b5fc369c6bca2475b1a89b6c9.png',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail'
              },
              {
                image: 'https://resource.smartisan.com/resource/c819e2f96fdb67ce3c38e99386212222.png',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              },
              {
                image: 'https://resource.smartisan.com/resource/10a2bf88d9c0da90e2dd6335c9ad3bef.jpg',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail '
              }
            ]
          }
        }
      ]
    }
  },
  created() {},
  components: {
    myCarousel: resolve => {
      require(['@/components/myCarousel/myCarousel'], resolve)
    },
    myCard: resolve => {
      require(['@/components/myCard/myCard'], resolve)
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-col {
  width:100%
}
</style>

