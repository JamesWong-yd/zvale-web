<template>
  <div>
    <Row class="my-card-row" v-for="(itemrow, index) in this.colList" :key="index" :style="{width:info.width,margin:info.width ? 'auto': ''}">
      <Col class="my-card-col" v-for="(itemcol, index) in itemrow" :key="index" :span="24/itemrow.length">
      <div class="my-card-box" :class="{'my-active': info.isActive}">
        <img :src="itemcol.image" alt="">
        <h3 :style="{color:titleColor}">{{itemcol.title}}</h3>
        <p class="my-card-details" :style="{color:detailColor}">{{itemcol.detail}}</p>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data() {
    return {
      colList: [],
      titleColor: this.info.titleColor,
      detailColor: this.info.detailColor
    }
  },
  created() {
    let newListarr = []
    for (const i in this.info.list) {
      if (this.info.col === parseInt(i)) {
        this.colList.push(newListarr)
        newListarr = []
      }
      newListarr.push(this.info.list[i])
    }
    this.colList.push(newListarr)
  }
}
</script>
<style lang="stylus">
.my-card-row {
  margin: 0 auto;
  text-align: center;
}

.my-card-box {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
}

.my-active:hover {
  cursor: pointer;
  box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease;
}

.my-card-box img {
  width: 240px;
}

.my-card-col h3 {
  line-height: 2;
  font-size: 18px;
}

.my-card-col p {
  font-size: 14px;
}

.my-card-details {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
