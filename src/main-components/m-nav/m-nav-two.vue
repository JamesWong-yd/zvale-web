<template>
  <ul>
    <li v-for="(item, index) in aaa" :key="index" :name="item.name">
      {{item.title}}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      aaa: [
        { name: '0', title: '首页' },
        { name: '1', title: '首页2' },
        { name: '2', title: '首页3' },
        { name: '3', title: '首页4' },
        { name: '4', title: '首页5啊实打实大苏打' },
        { name: '3', title: '首页4' },
        { name: '4', title: '首页5' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  li{
    float left
    text-align center
  }
</style>
