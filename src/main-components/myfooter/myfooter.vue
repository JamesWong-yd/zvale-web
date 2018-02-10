<template>
  <div class="my-footer">
    <Row class="my-footer-up">
      <Col span="18">
      <Row>
        <Col v-for="(itema, index) in footer.linkRow" :key="index" :span="rlength">
        <h3 class="my-link-title">{{itema.rowTitle}}</h3>
        <div class="my-link-span" v-for="(itemb, index) in itema.link" :key="index" :route="itemb.router">{{itemb.title}}</div>
        </Col>
      </Row>
      </Col>
      <Col span="6" style="text-align:right">
      <h2>{{ footer.rTitle }}</h2>
      <h3>{{ footer.rDetail }}</h3>
      </Col>
    </Row>
    <Row class="my-footer-down">
      <Col span="18"> 1321
      </Col>
      <Col span="6" style="text-align:right"> 13213
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: ['footer'],
  data() {
    return {
      rlength: 6
    }
  },
  created() {
    this.rlength = Math.floor(24 / this.footer.linkRow.length)
  }
}
</script>
<style lang="stylus">
.my-footer {
  max-width: 1300px;
  min-width: 1100px;
  margin: 0 auto;
  padding-top: 50px;
}

.my-footer-up {
  padding: 10px;
  margin: 0 30px;
  border-bottom: 1px solid #eee;
}

.my-footer-down {
  margin: 0 30px;
  padding: 20px 10px 30px;
  text-align: left;
}

.my-link-title {
  line-height: 2;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: default;
}

.my-link-span {
  margin: 5px;
  line-height: 2;
  cursor: pointer;
}

.my-link-span:hover {
  color: #ddd;
}
</style>
