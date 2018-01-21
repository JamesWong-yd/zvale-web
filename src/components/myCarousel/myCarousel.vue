<template>
  <div class="mycarousel">
    <Carousel v-model="info.index"
             :autoplay="info.autoplay"
             :autoplay-speed="info.autoplaySpeed"
             :dots="info.dots"
             :radius-dot="info.radiusDot"
             :trigger="info.trigger"
             arrow="never">
      <CarouselItem v-for="(item, index) in info.images" :key="index">
        <img class="my-carouselItem-img" :src="item" width="100%" />
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data() {
    return {}
  },
  created() {}
}
</script>
<style>
.mycarousel {
  font-size: 50px;
  text-align: center;
}
.mycarousel .my-carouselItem-img{
  width: 100%
}
</style>

