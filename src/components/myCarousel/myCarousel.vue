<template>
  <div ref="mycarousel">
    <Carousel v-model="info.index" :autoplay="info.autoplay" :autoplay-speed="info.autoplaySpeed" :dots="info.dots" :radius-dot="info.radiusDot" :trigger="info.trigger" :arrow="info.arrow">
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
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
.demo-carousel {
  font-size: 50px;
  text-align: center;
}
</style>

