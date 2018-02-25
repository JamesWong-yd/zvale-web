<template>
  <div class="my-scard">
    <div ref="scardBox" class="my-scard-box" :style="{height:info.height}">
      <span class="my-scard-font" v-for="font in fonts" :style="font.style">
        {{ font.content }}
      </span>
      <div class="my-scard-btn" v-for="btn in btns" @mouseover="hoverChange($event,btn.sbgcolor,btn.sborder,btn.scolor)" @mouseout="hoverChange($event, btn.style.background,btn.style.borderColor,btn.style.color)" :style="btn.style">
        {{ btn.content }}
      </div>
      <img class="my-scard-img" v-for="image in images" :src="image.url" :style="image.style">
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data() {
    return {
      scrollFlag: false,
      fonts: [],
      images: [],
      btns: []
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  created() {
    if (this.info.fonts) this.fontsInit(this.info.fonts)
    if (this.info.btns) this.btnInit(this.info.btns)
    if (this.info.images) this.imageInit(this.info.images)
  },
  methods: {
    handleScroll() {
      if (this.scrollFlag) return
      if (!this.$refs.scardBox) return
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (
        scrollTop + document.documentElement.clientHeight / 3 >=
          this.$refs.scardBox.offsetTop ||
        scrollTop + document.documentElement.clientHeight >=
          document.body.scrollHeight
      ) {
        this.topLeftChange(this.fonts)
        this.topLeftChange(this.images)
        this.topLeftChange(this.btns)
        this.scrollFlag = true
      }
    },
    topLeftChange(arr) {
      for (const key in arr) {
        if (arr[key].sTop && arr[key].sLeft) {
          arr[key].style.top = `${arr[key].sTop}%`
          arr[key].style.left = `${arr[key].sLeft}%`
        }
      }
    },
    fontsInit(obj) {
      let fontsLength = obj.length
      for (let i = 0; i < fontsLength; i++) {
        let font = {}
        let fontObj = obj[i]
        font.style = {
          fontSize: fontObj.size,
          color: fontObj.color,
          top: `${fontObj.top}%`,
          left: `${fontObj.left}%`,
          zIndex: fontObj.zIndex
        }
        font.content = fontObj.content
        font.sTop = fontObj.sTop
        font.sLeft = fontObj.sLeft
        this.fonts.push(font)
      }
    },
    btnInit(obj) {
      let btnsLength = obj.length
      for (let i = 0; i < btnsLength; i++) {
        let btn = {}
        let btnObj = obj[i]
        btn.style = {
          width: btnObj.width,
          height: btnObj.height,
          lineHeight: btnObj.height,
          fontSize: btnObj.size,
          color: btnObj.color,
          top: `${btnObj.top}%`,
          left: `${btnObj.left}%`,
          zIndex: btnObj.zIndex,
          background: btnObj.bgcolor,
          borderColor: btnObj.border
        }
        btn.content = btnObj.content
        btn.sTop = btnObj.sTop
        btn.sLeft = btnObj.sLeft
        btn.sbgcolor = btnObj.sbgcolor
        btn.sborder = btnObj.sborder
        btn.scolor = btnObj.scolor
        this.btns.push(btn)
      }
    },
    imageInit(obj) {
      let imagesLength = obj.length
      for (let i = 0; i < imagesLength; i++) {
        let image = {}
        let imageObj = obj[i]
        image.style = {
          width: imageObj.width,
          height: imageObj.height,
          zIndex: imageObj.zIndex,
          top: `${imageObj.top}%`,
          left: `${imageObj.left}%`
        }
        image.url = imageObj.url
        image.sLeft = imageObj.sLeft
        image.sTop = imageObj.sTop
        this.images.push(image)
      }
    },
    hoverChange(event, sbgcolor, sborder, scolor) {
      let that = event.currentTarget
      that.style.background = sbgcolor
      that.style.borderColor = sborder
      that.style.color = scolor
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
  transition: top 2s, left 2s;
  position: absolute;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #212121;
  color: #212121;
  font-size: 18px;
}

.my-scard-img {
  position: absolute;
  z-index: 5;
  transition: top 2s, left 2s;
}
</style>
 