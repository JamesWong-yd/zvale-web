<template>
  <div>
    <div class="my-col" v-for="(item, index) in structure" :style="{background:item.background,padding:item.padding}" :key="index" :is="item.type" :info="item.info">
    </div>
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
            isActive: true,
            tilteColor: '#aaa',
            detailColor: '#bbb',
            col: 4,
            list: [
              {
                image:
                  'https://resource.smartisan.com/resource/d577909752ec2afef49e928041c44bb7.jpg?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              },
              {
                image:
                  'https://resource.smartisan.com/resource/9ae4d799a478d1a629966f84b56a1277.jpg?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              },
              {
                image:
                  'https://resource.smartisan.com/resource/3f78b9032249cbffbe813dfe1c0f03b7.jpg?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail:
                  '这是的detail这是的d这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detail这是的detailetail这是的detail这是的detail'
              },
              {
                image:
                  'https://resource.smartisan.com/resource/ce8b06c16e9f6f14d048de1e60d7f658.png?x-oss-process=image/resize,w_381/quality,Q_100',
                title: '这是title',
                detail: '这是的detail这是的detail这是的detail这是的detail'
              }
            ]
          }
        },
        {
          type: 'myScrollCard',
          background: '#ccc',
          padding: '50px 0',
          info: {
            // height: '500px',
            images: [
              {
                url: 'sdas',
                width: '200px',
                height: '200px',
                left: '70%',
                top: '20%',
                sLeft: '80%',
                sTop: '20%',
                zIndex: '5'
              }
            ],
            fonts: [
              {
                content: '',
                size: '',
                color: '',
                top: '',
                left: '',
                sTop: '',
                sLeft: '',
                zIndex: '5'
              }
            ],
            btns: [
              {
                content: '',
                size: '',
                color: '',
                top: '',
                left: '',
                sTop: '',
                sLeft: '',
                zIndex: '5',
                bgcolor: '',
                border: ''
              }
            ]
          }
        },
        {
          type: 'myScrollCard',
          background: '#ede',
          padding: '50px 0',
          info: {
            // height: '500px',
            images: [
              {
                url: 'sdas',
                width: '200px',
                height: '200px',
                left: '70%',
                top: '20%',
                sLeft: '80%',
                sTop: '20%',
                zIndex: '5'
              }
            ],
            fonts: [
              {
                content: '',
                size: '',
                color: '',
                top: '',
                left: '',
                sTop: '',
                sLeft: '',
                zIndex: '5'
              }
            ],
            btns: [
              {
                content: '',
                size: '',
                color: '',
                top: '',
                left: '',
                sTop: '',
                sLeft: '',
                zIndex: '5',
                bgcolor: '',
                border: ''
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
    },
    myScrollCard: resolve => {
      require(['@/components/myScrollCard/myScrollCard'], resolve)
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-col {
  width: 100%;
}
</style>

