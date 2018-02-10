<template>
  <div class="my-scard">
    <div ref="scardBox" class="my-scard-box" :style="{height:info.height}">
      <span class="my-scard-font" v-for="(font, index) in fonts" :key="index" :style="{fontSize:font.size,color:font.color,top:`${font.top}%`,left:`${font.left}%`,zIndex: font.zIndex}">
        {{ font.content }}
      </span>
      <div class="my-scard-btn">
        按钮
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data() {
    return {
      scrollFlag: false,
      fonts: this.info.fonts,
      images: this.info.images,
      btns: this.info.btns
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scrollFlag) return
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (
        scrollTop + document.documentElement.clientHeight / 3 >=
          this.$refs.scardBox.offsetTop ||
        scrollTop + document.documentElement.clientHeight >=
          document.body.scrollHeight
      ) {
        this.scrollFlag = true
        this.topLeftChange(this.fonts)
        this.topLeftChange(this.images)
        this.topLeftChange(this.btns)
      }
    },
    topLeftChange(arr) {
      for (const key in arr) {
        if (arr[key].sTop && arr[key].sLeft) {
          arr[key].top = arr[key].sTop
          arr[key].left = arr[key].sLeft
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.my-scard {
  width: 100%;
}

.my-scard-box {
  width: 100%;
  max-width: 1600px;
  min-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 50px 0;
  position: relative;
}

.my-scard-font {
  position: absolute;
  transition: all 2s;
}

.my-scard-btn {
  position: absolute;
  padding: 5px;
  border-radius: 3px;
}
</style>
 