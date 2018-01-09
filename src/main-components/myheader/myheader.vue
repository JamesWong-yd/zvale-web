<template>
  <div>
    <Row class="my-header">
      <Col :xs="0" :lg="8">{{headerInfo.title}}</Col>
      <Col :xs="20" :lg="8">{{headerInfo.content}}</Col>
      <Col :xs="4" :lg="8">{{headerInfo.footer}}</Col>
    </Row>
    <slot name="name"></slot>
  </div>
</template>

<script>
export default {
  props: {
    headerInfo: {
      type: Object
    }
  },
  // props: ['headerInfo'],
  created() {
    this.initfunc()
  },
  methods: {
    initfunc() {
      console.log(this.headerInfo)
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-header {
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
}
</style>
